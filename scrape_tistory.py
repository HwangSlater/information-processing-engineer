import requests
from bs4 import BeautifulSoup
import json
import re

urls = {
    "Chapter 12. SQL 기출문제": "https://complainrevolutionist.tistory.com/51",
    "Chapter 13. Java 기출문제": "https://complainrevolutionist.tistory.com/39",
    "Chapter 14. Python 기출문제": "https://complainrevolutionist.tistory.com/40",
    "Chapter 15. C언어 기출문제": "https://complainrevolutionist.tistory.com/38"
}

questions = []

for chapter, url in urls.items():
    try:
        res = requests.get(url, timeout=10)
        res.encoding = 'utf-8'
        soup = BeautifulSoup(res.text, 'html.parser')
        
        content_div = soup.find('div', class_='tt_article_useless_p_margin')
        if not content_div:
             content_div = soup.find('div', class_='entry-content')
             
        if not content_div: continue
        
        more_less_blocks = content_div.find_all('div', attrs={'data-ke-type': 'moreLess'})
        for block in more_less_blocks:
            # Extract Answer
            answer_text = block.get_text(separator='\\n', strip=True).replace('더보기', '', 1).strip()
            
            # The answer text might have trailing newlines or extra text, let's keep it simple
            if not answer_text: continue
            
            # Collect elements backwards until the previous moreLess block or start
            nodes = []
            prev = block.find_previous_sibling()
            while prev:
                if prev.name == 'div' and prev.get('data-ke-type') == 'moreLess':
                    break
                # Ignore empty tags
                if prev.get_text(strip=True) or prev.name in ['pre', 'table', 'img']:
                    nodes.append(prev)
                prev = prev.find_previous_sibling()
            
            nodes.reverse()
            if not nodes: continue
            
            # Try to find the title which starts with year e.g. "20년 1회"
            title_text = ""
            code_html = ""
            for n in nodes:
                text = n.get_text(strip=True)
                if not title_text and re.match(r'^\d{2}년\s*\d회', text):
                    title_text = text
                else:
                    code_html += str(n)
                    
            if not title_text:
                title_text = nodes[0].get_text(strip=True)
                code_html = "".join(str(n) for n in nodes[1:])
                
            q_obj = {
                "chapter": chapter,
                "q": f'<span class="q-prefix">Q. {title_text}</span><div class="question-box">{code_html}</div>정답: [[{answer_text}]]',
                "hint": "기출문제 코딩/SQL 분석입니다. 노트에 직접 추적(Tracing)하며 풀어보세요."
            }
            questions.append(q_obj)
            print(f"Extracted: {title_text}")
    except Exception as e:
        print(f"Error processing {url}: {e}")

js_content = "const codeQuestions = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";"
with open('c:/Users/pc/Desktop/정처기/code_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print(f"Successfully generated code_data.js with {len(questions)} questions!")

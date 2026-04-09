const quizQuestions = [
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 방법론을 쓰시오.</span>
<div class="question-box">절차보다는 사람 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 신속 적응적 경량 개발 방법론이다. (2020년 2회)</div>
정답: [[애자일 방법론]]`,
    hint: "시스템 장비나 절차보다는 <strong>'사람'</strong>과 <strong>'의미 있는 소통'</strong>을 중심으로 두고, 변화에 매우 <strong>기민(Agile)하게 적응</strong>하는 방법론입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음은 애자일 방법론의 유형에 대한 설명이다. 빈칸에 알맞은 용어를 작성하시오.</span>
<div class="question-box">
1. 의사소통 개선과 즉각적 피드백으로 소프트웨어 품질을 높이기 위한 방법론으로 1~3주의 반복 개발주기를 가진다. : [[XP (eXtreme Programming)]]<br>
2. 도요타의 시스템 품질 기법을 소프트웨어 개발 프로세스에 적용해서 낭비 요소를 제거하여 품질을 향상시킨 방법론 : [[린]]<br>
3. 매일 정해진 시간, 장소에서 짧은 시간의 개발을 하는 팀을 위한 프로젝트 관리 중심 방법론 : [[스크럼]]
</div>`,
    hint: "반복 주기가 짧고 <strong>피드백을 중시하면 XP</strong>, <strong>낭비 제거</strong>가 목적이면 <strong>린(Lean)</strong>, 매일 스탠드업 미팅 등 <strong>팀 중심이면 스크럼(Scrum)</strong>입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 괄호 안에 들어갈 XP의 5가지 가치를 쓰시오.</span>
<div class="question-box">XP의 5가지 가치: [[용기]], [[단순성]], [[의사소통]], [[피드백]], [[존중]]</div>`,
    hint: "(용기, 단순성, 의사소통, 피드백, 존중) 머릿글자를 따서 <strong>'용.단.피.의.존'</strong>으로 외우는 것이 좋습니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 설계 원칙에 해당하는 원칙을 작성하시오.</span>
<div class="question-box">하나의 클래스는 하나의 목적을 위해서 생성되며, 클래스가 제공하는 모든 서비스는 하나의 책임을 수행하는 데 집중되어 있어야 한다는 원칙</div>
정답: [[단일 책임의 원칙 (SRP)]]`,
    hint: "클래스가 제공하는 서비스는 오직 <strong>'하나의 책임(기능)'에 집중</strong>해야 한다는 원칙입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 설계 원칙에 해당하는 원칙을 작성하시오.</span>
<div class="question-box">소프트웨어의 구성요소(컴포넌트, 클래스, 모듈, 함수)는 확장에는 열려있고, 변경에는 닫혀있어야 한다는 원칙</div>
정답: [[개방 폐쇄 원칙 (OCP)]]`,
    hint: "<strong>기능 추가 확장(Open)은 가능</strong>하지만, <strong>기존 코드 수정(Close)은 불필요</strong>하도록 설계해야 한다는 원칙입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 설계 원칙에 해당하는 원칙을 작성하시오.</span>
<div class="question-box">서브 타입(상속받은 하위 클래스)은 어디서나 자신의 기반 타입(상위 클래스)으로 교체할 수 있어야 한다는 원칙</div>
정답: [[리스코프 치환의 법칙 (LSP)]]`,
    hint: "<strong>자식 클래스는 언제나 부모 클래스를 무조건 완벽하게 대체할 수 있어야 한다</strong>는 원칙입니다. 즉, 부모의 행동 규약을 자식이 깨면 안 됩니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 설계 원칙에 해당하는 원칙을 작성하시오.</span>
<div class="question-box">한 클래스는 자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다는 원칙 / 객체 설계 시 특정 기능에 대한 인터페이스는 그 기능과 상관없는 부분이 변해도 영향을 받지 않아야 한다는 원칙</div>
정답: [[인터페이스 분리의 원칙 (ISP)]]`,
    hint: "<strong>인터페이스는 자신의 클라이언트를 기준으로 가장 작고 구체적으로 분리(Segregation)</strong>되어야 한다는 원칙입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 설계 원칙에 해당하는 원칙을 작성하시오.</span>
<div class="question-box">실제 사용 관계는 바뀌지 않으며, 추상을 매개로 메시지를 주고받음으로써 관계를 최대한 느슨하게 만드는 원칙</div>
정답: [[의존성 역전의 원칙 (DIP)]]`,
    hint: "구체적인 하위 클래스에 의존하지 말고, 상위의 <strong>추상화된 구조 및 인터페이스에 의존(역전)</strong>하라는 원칙입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 객체 지향 분석 방법론의 종류에 알맞은 용어를 쓰시오.</span>
<div class="question-box">
- E-R 다이어그램을 사용하는 방법론: [[코드 – 요든 (Coad-Yourdon)]] 방법론<br>
- 분석과 설계 간의 구분이 없고 고객 명세서를 평가해서 설계 작업까지 연속적으로 수행하는 분석 방법: [[워프 – 브록 (Wirfs – Brock)]] 방법론
</div>`,
    hint: "<strong>ER 다이어그램</strong> 구조 중심으로 접근하면 <strong>Coad-Yourdon</strong>, <strong>분석 설계 구분이 없는 연속 처리</strong>는 <strong>Wirfs-Brock</strong>입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 럼바우 분석 절차를 진행 순서에 맞게 나열하시오. (21년 2회)</span>
<div class="question-box">
진행 순서: [[객체 모델링]] -> [[동적 모델링]] -> [[기능 모델링]] (객동기)
</div>`,
    hint: "럼바우 기법의 순서는 객체, 동적, 기능 순입니다. 앞글자를 따서 <strong>'객.동.기'</strong>로 무조건 암기하세요."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 비용산정 모형 중 다음 모형의 명칭과 식의 빈칸을 채우시오.</span>
<div class="question-box">원시 코드 라인 수의 낙관치, 중간치, 비관치를 측정하여 예측치를 구하고 이를 이용하여 비용을 산정하는 방식.</div>
명칭: [[LoC(Lines of Code)]] 모형<br>
예측치 = ([[낙관치]] + 4 × [[중간치]] + [[비관치]]) / 6`,
    hint: "프로그램의 <strong>라인 수(Lines of Code)</strong>를 기준으로 비용을 산정하는 가장 기본적 방식입니다. <strong>공식 (a+4m+b)/6</strong>은 단골 문제입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명하는 비용산정 모형의 명칭은?</span>
<div class="question-box">
- 보헴이 제안한 모형으로 프로그램 규모에 따라 비용을 산정하는 방식이다.<br>
- 5만 라인 이하: [[조직형 (organic)]]<br>
- 30만 라인 이하: [[반 분리형 (semi-Detached)]]<br>
- 30만 라인 이상: [[임베디드형 (Embedded)]]
</div>
명칭: [[COCOMO (COnstructive COst MOdel)]] 모형`,
    hint: "보헴이 만든 규모 기반 모형 <strong>COCOMO</strong>입니다. <strong>5만 이하 조직형 / 30만 이하 반 분리형 / 30만 이상 임베디드형</strong>을 외우세요."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 디자인 패턴의 한 유형은 무엇인가? (2020년 4회, 21년 2회, 3회)</span>
<div class="question-box">더 큰 구조 형성 목적으로 클래스나 객체의 조합을 다루는 패턴이다.</div>
정답: [[구조 패턴]]`,
    hint: "디자인 패턴 3가지(생성, 구조, 행위) 중에 클래스를 직소퍼즐처럼 조합해 <strong>더 큰 단위의 구조를 만드는 패턴</strong>들을 통틀어 구조 패턴이라 합니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 디자인 패턴을 쓰시오. (생성 패턴 중 하나)</span>
<div class="question-box">전역 변수를 사용하지 않고 객체를 하나만 생성하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 디자인 패턴 (한 클래스에 한 객체만 존재하도록 제한)</div>
정답: [[Singleton (싱글톤)]]`,
    hint: "시스템 전체에 다른 모든 것들은 차단한 채 <strong>객체가 단 '하나'만 존재하도록 강제로 제한</strong>하는 생성 패턴입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 디자인 패턴을 쓰시오. (구조 패턴 중 하나)</span>
<div class="question-box">기존에 구현되어 있는 클래스에 필요한 기능을 추가해 나가는 설계 패턴으로, 객체 간의 결합을 통해 기능을 동적으로 유연하게 확장할 수 있게 해주어 상속의 대안으로 사용하는 디자인 패턴</div>
정답: [[Decorator (데코레이터)]]`,
    hint: "상속 대신 기존 객체에 <strong>포장지(장식)를 덧씌워 유연하게 기능을 확장</strong>해 나가는 패턴입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 디자인 패턴을 쓰시오. (행위 패턴 중 하나)</span>
<div class="question-box">객체 상태를 캡슐화화여 클래스화 함으로써 그것을 참조하게 하는 방식으로, 상태에 따라 다르게 처리할 수 있도록 행위 내용을 변경하여, 변경 시 원시 코드의 수정을 최소화할 수 있는 디자인 패턴</div>
정답: [[State (스테이트)]]`,
    hint: "객체의 <strong>'상태' 그 자체를 하나의 클래스로 분리</strong>하여 상태가 변할 때마다 행위가 자동으로 변하게 만드는 패턴입니다."
  },
  {
    chapter: "Chapter 1. 요구사항 확인 (디자인 패턴 포함)",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 디자인 패턴을 쓰시오. (행위 패턴 중 하나)</span>
<div class="question-box">한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대다의 의존성을 가지는 디자인 패턴</div>
정답: [[Observer (옵저버)]]`,
    hint: "한 객체의 변화가 다른 종속 객체들에게 <strong>자동으로 방송(알림)되는 일대다 통신 구조</strong>입니다. (마치 유튜브 구독 원리)"
  },
  {
    chapter: "Chapter 2. 화면 설계",
    q: `<span class="q-prefix">Q. UI(User Interface)의 설계 원칙 4가지를 작성하시오.</span>
<div class="question-box">
1. 누구나 쉽게 이해하고 사용할 수 있어야 함: [[직관성]]<br>
2. 정확하고 완벽하게 사용자의 목표가 달성될 수 있도록 제작: [[유효성]]<br>
3. 초보와 숙련자 모두가 쉽게 배우고 사용할 수 있게 제작: [[학습성]]<br>
4. 사용자의 요구사항을 최대한 수용하고, 실수를 방지할 수 있도록 제작: [[유연성]]
</div>`,
    hint: "직관성(이해하기 쉬움), 유효성(목표 달성), 학습성(배우기 쉬움), 유연성(요구 수용) 4가지를 묶어 <strong>'직.유.학.유'</strong> 로 외우세요!"
  },
  {
    chapter: "Chapter 2. 화면 설계",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 UML의 다이어그램 명칭을 각각 쓰시오.</span>
<div class="question-box">
[구조적 다이어그램]<br>
- 객체 지향 모델링 시 클래스의 속성 및 연산과 클래스 간 정적인 관계를 표현: [[클래스 다이어그램]]<br>
- 시스템을 구성하는 컴포넌트와 그들 사이의 의존관계를 표현: [[컴포넌트 다이어그램]]<br>
[행위적 다이어그램]<br>
- 시스템이 제공하는 기능과 관련된 외부 요소를 '사용자' 관점에서 표현: [[유스케이스 다이어그램]]<br>
- 객체 간 동적 상호 작용을 시간적 개념 중심으로 메시지 흐름으로 표현: [[시퀀스 다이어그램]]
</div>`,
    hint: "<strong>정적인 관계는 클래스/컴포넌트 </strong> 다이어그램, <strong>동적인 기능 흐름과 메세지는 유스케이스/시퀀스</strong> 다이어그램입니다."
  },
  {
    chapter: "Chapter 2. 화면 설계",
    q: `<span class="q-prefix">Q. 클래스 간의 관계에 대한 설명이다. 빈칸에 알맞은 용어를 작성하시오.</span>
<div class="question-box">
- 하나의 사물이 다른 사물에 보다 일반적인지 구체적인지를 표현 (부모와 자식): [[일반화 관계]]<br>
- 추상 클래스나 인터페이스를 상속받아 자식 클래스가 추상 메서드를 구현할 때 사용: [[실체화 관계]]<br>
- 영구적이고 더 강한 관계로 구성, 포함하는 쪽과 포함되는 쪽을 속이 채워진 마름모로 연결: [[포함 관계 (Composition)]]
</div>`,
    hint: "부모-자식 상속 구조는 <strong>'일반화'</strong>, 기능이 빈 껍데기뿐인 인터페이스 구조 구현은 <strong>'실체화'</strong>, 생명주기를 같이하는 종속 관계는 <strong>'포함(Composition)'</strong>입니다."
  },
  {
    chapter: "Chapter 3. 데이터 입출력 및 정규화",
    q: `<span class="q-prefix">Q. 데이터 모델의 절차를 순서대로 작성하시오.</span>
<div class="question-box">
순서: [[요구조건 분석]] -> [[개념적 설계]] -> [[논리적 설계]] -> [[물리적 설계]]
</div>`,
    hint: "DB 구축을 위한 설계 기본 순서입니다. 앞글자를 따서 <strong>'요.개.논.물'</strong> 로 반드시 암기하세요."
  },
  {
    chapter: "Chapter 3. 데이터 입출력 및 정규화",
    q: `<span class="q-prefix">Q. 순수 관계 연산자의 종류(기호)와 의미를 작성하시오.</span>
<div class="question-box">
- [[셀렉트 (σ)]]: 릴레이션에서 조건을 만족하는 튜플을 반환<br>
- [[프로젝트 (π)]]: 주어진 속성들의 값으로만 구성된 튜플을 반환<br>
- [[조인 (⋈)]]: 공통 속성을 이용해 튜플들을 연결<br>
- [[디바이드 (÷)]]: 릴레이션 S의 모든 튜플과 관련 있는 R의 튜플 반환
</div>`,
    hint: "가로줄 전체(행)를 몽땅 가져오는 건 <strong>셀렉트(σ)</strong>, 내가 원하는 세로줄(열)만 쏙 뽑는 건 <strong>프로젝트(π)</strong>, 공통값으로 둘을 붙이는 건 <strong>조인</strong>입니다."
  },
  {
    chapter: "Chapter 3. 데이터 입출력 및 정규화",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 이상현상(Anomaly)의 명칭을 각각 쓰시오.</span>
<div class="question-box">
- 정보 저장 시 해당 정보의 불필요한 세부정보를 입력해야 되는 경우: [[삽입 이상]]<br>
- 정보 삭제 시 원치 않는 다른 정보가 같이 삭제되는 경우: [[삭제 이상]]<br>
- 중복 데이터 중에서 특정 부분만 수정되어 중복된 값이 모순을 일으키는 경우: [[갱신 이상]]
</div>`,
    hint: "정규화를 하지 않아 발생하는 3대 찌꺼기 현상입니다. 필요 없는데 입력을 강요당하는 <strong>'삽입'</strong>, 전혀 연관 없는 애먼 데이터가 같이 지워지는 <strong>'삭제'</strong>, 일관성이 깨지는 <strong>'갱신'</strong> 이상이지요."
  },
  {
    chapter: "Chapter 3. 데이터 입출력 및 정규화",
    q: `<span class="q-prefix">Q. 정규화 단계에 따른 조건을 작성하시오.</span>
<div class="question-box">
- 1정규형(1NF): [[도메인이 원자값으로 구성]]<br>
- 2정규형(2NF): [[부분 함수 종속 제거]]<br>
- 3정규형(3NF): [[이행 함수 종속 제거]]<br>
- 보이스-코드 정규형(BCNF): [[결정자가 후보 키가 아닌 함수 종속 제거]]
</div>`,
    hint: "1~3 및 BCNF 조건은 완전 단골 문제입니다. <strong>'원자값 -> 부분 종속 제거 -> 이행 종속 제거 -> 결정자이면서 후보키가 아닌 부분 제거'</strong>의 흐름을 통째로 익히세요."
  },
  {
    chapter: "Chapter 3. 데이터 입출력 및 정규화",
    q: `<span class="q-prefix">Q. 다음 키가 뜻하는 명칭을 쓰시오.</span>
<div class="question-box">
- 속성의 집합 중 튜플을 고유하게 식별하기 위해 선택된 주 키(유일성, 최소성 만족): [[기본 키 (Primary Key)]]<br>
- 테이블 간의 참조 데이터 무결성을 위한 제약 조건 (다른 릴레이션의 기본 키로 이용): [[외래 키 (Foreign Key)]]
</div>`,
    hint: "테이블에서 행을 유일하게 증명(주민번호처럼) 하는 건 대장 역할인 <strong>기본 키(PK)</strong>, 다른 테이블들과 화살표로 이어지는 고리 역할을 하는 키는 <strong>외래 키(FK)</strong>입니다."
  },
  {
    chapter: "Chapter 4~5. 통합 및 인터페이스 구현",
    q: `<span class="q-prefix">Q. EAI 구축 유형 4가지를 작성하시오.</span>
<div class="question-box">
답: [[포인트 투 포인트]], [[허브 앤 스포크]], [[메시지 버스]], [[하이브리드]]
</div>`,
    hint: "전사적 어플리케이션 통합(EAI) 토폴로지 4대장: 1:1로 직접 잇는 <strong>직결형(PtP)</strong>, 중앙을 거쳐 가는 <strong>집중형(허브앤스포크)</strong>, 고속도로 미들웨어를 타는 <strong>메시지버스</strong>, 두 방식을 스까먹는 <strong>하이브리드</strong>."
  },
  {
    chapter: "Chapter 4~5. 통합 및 인터페이스 구현",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 기술 용어를 작성하시오.</span>
<div class="question-box">
- “속성 - 값 쌍”으로 이루어진 데이터 오브젝트를 전달하기 위해 텍스트를 사용하는 개방형 포맷. XML을 대체함: [[JSON]]<br>
- 자바스크립트를 사용하여 웹 서버와 클라이언트 간 비동기적으로 XML 데이터를 교환하고 조작하기 위한 웹 기술: [[AJAX]]<br>
- 분산 하이퍼미디어 환경에서 자원의 존재/상태 정보를 표준화된 HTTP 메서드로 주고받는 웹 아키텍처: [[REST]]
</div>`,
    hint: "과거의 무거운 구조 대신 쓰는 초경량 구조 포맷은 <strong>JSON</strong>, 화면 전체를 새로고침 안 해도 되는 비동기 통신의 대명사는 <strong>AJAX</strong>, 자원 자체를 주소로 표기하는 구조는 <strong>REST</strong>입니다."
  },
  {
    chapter: "Chapter 8. 서버 프로그램 구현",
    q: `<span class="q-prefix">Q. 모듈의 독립성을 판단하는 두 가지 지표인 '응집도'와 '결합도'에 대해 설명하시오.</span>
<div class="question-box">
- 모듈 내부 구성요소 간 연관 정도로 높은 것이 좋음: [[응집도 (Cohesion)]]<br>
- 모듈과 모듈 간의 상호의존성 척도로 낮은 것이 좋음: [[결합도 (Coupling)]]
</div>`,
    hint: "좋은 소프트웨어는 <strong>자신들끼리 내부적으로 똘똘 뭉치게(강한 응집도)</strong>, <strong>다른 모듈과는 완전히 무관하게(느슨한 결합도)</strong> 엮어두는 것이 대원칙입니다. (높을수록 좋음: 응집도 / 낮을수록 좋음: 결합도)"
  },
  {
    chapter: "Chapter 9. 소프트웨어 개발 보안 구축",
    q: `<span class="q-prefix">Q. 정보보안의 3대 요소를 작성하시오.</span>
<div class="question-box">
- 인가되지 않은 사람에게 정보 노출 차단, 인가된 사람만 자원 접근 가능: [[기밀성]]<br>
- 인가된 사용자에 대해서만 자원 수정이 가능하며, 정보는 수정/변조되지 않아야 하는 특성: [[무결성]]<br>
- 인가된 사용자나 애플리케이션이 원하는 서비스를 언제든 지속 이용 가능: [[가용성]]
</div>`,
    hint: "정보보안 3대 요약(CIA): 안보이게 완벽히 막는 <strong>기밀성(Confidentiality)</strong>, 수정을 막고 지키는 <strong>무결성(Integrity)</strong>, 원할 때 문제없이 제공하는 <strong>가용성(Availability)</strong>. 필수!"
  },
  {
    chapter: "Chapter 9. 소프트웨어 개발 보안 구축",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 DoS 공격 종류를 작성하시오.</span>
<div class="question-box">
- 서버의 동시 가용 사용자 수를 SYN 패킷만 보내 점유하여 사용 불가능하게 하는 공격: [[SYN 플러딩]]<br>
- 출발지 주소를 공격 대상의 IP로 위조하여 네트워크 내의 모든 영영(브로드캐스트)에 ICMP Echo 패킷을 핑으로 전송: [[스머프 (Smurf) 공격]]<br>
- 출발지 IP와 목적지 IP를 같은 패킷 주소로 만들어 보냄으로써 수신자가 자기 자신에게 응답을 보내게 하는 공격: [[랜드 어택 (Land Attack)]]
</div>`,
    hint: "네트워크 공격 단골 기출입니다: SYN 연결만 맺고 잠수타는 <strong>SYN플러딩</strong>, 메가폰으로 다른 사람 IP를 외쳐서 그 사람에게 수만 개의 핑이 집중되게 하는 <strong>스머프</strong>, 자신에게 패킷을 미친듯이 보내 연산을 꼬이게 하는 <strong>랜드어택</strong>."
  },
  {
    chapter: "Chapter 9. 소프트웨어 개발 보안 구축",
    q: `<span class="q-prefix">Q. 다음 설명에 해당하는 애플리케이션 공격 종류를 작성하시오.</span>
<div class="question-box">
- HTTP GET 메서드를 사용해 헤더의 최종 끝을 알리는 개행문자(\r\n\r\n)를 전송하지 않고 연결을 장시간 지속시키는 서비스 거부 공격: [[Slowloris]]<br>
- 요청 헤더의 Content-Length를 비정상적으로 크게 설정하고 바디를 소량씩 보내 연결을 유지시키는 공격: [[RUDY Attack]]
</div>`,
    hint: "7계층 웹(App) 서버 연결 고갈 공격: 데이터가 다 왔다는 헤더 끝부분을 일부러 안 보내는 <strong>Slowloris (끝맺음 회피 공격)</strong>, 데이터가 엄청 많다고 속이고 소량씩 수일 동안 쪼개보내는 <strong>RUDY (본문 늘리기 공격)</strong>."
  },
  {
    chapter: "Chapter 9. 소프트웨어 개발 보안 구축",
    q: `<span class="q-prefix">Q. 대칭 키 / 비대칭 키 암호화 알고리즘 종류에 대해 빈칸을 채우시오.</span>
<div class="question-box">
- 대칭 키 암호: [[DES]], [[SEED]], [[AES]], [[ARIA]] 등<br>
- 비대칭 키 암호: [[RSA]], [[ECC]], [[ElGamal]] 등<br>
- 해시 (일방향 암호): [[MD-5]], [[SHA-1]], [[SHA-256]], [[HAS-160]] 등
</div>`,
    hint: "<strong>대칭키</strong>의 대표주자 <strong>AES, DES</strong> / 자신만의 <strong>비대칭키(공개키)</strong>를 발급하는 <strong>RSA</strong> / 수학적으로 <strong>되돌리는 게(역산출) 불가능</strong>해 로그인 비밀번호 저장 등에 주로 쓰이는 것은 <strong>해시(일방향)</strong>."
  },
  {
    chapter: "Chapter 10~11. 테스트 관리 및 기초 기술",
    q: `<span class="q-prefix">Q. 다음 테스트 기법의 명칭을 명확하게 작성하시오.</span>
<div class="question-box">
- 각 응용 프로그램의 내부 구조와 동작을 검사하는 테스트 방식 (구문 커버리지, 결정 커버리지): [[화이트박스 테스트]]<br>
- 프로그램 외부 사용자의 요구사항 명세를 보면서 수행하는 테스트 방식 (경곗값 분석, 동등 분할): [[블랙박스 테스트]]
</div>`,
    hint: "코드를 투명한 박스처럼 내부 구조를 직접 뜯어보고 테스트하면 <strong>화이트박스</strong>, 코드 로직은 새카매서 모른 채로 입력값에 따라 정상 작동하는지만 체크하면 <strong>블랙박스</strong> 방식입니다."
  },
  {
    chapter: "Chapter 10~11. 테스트 관리 및 기초 기술",
    q: `<span class="q-prefix">Q. 페이지 교체 기법 중 다음 설명에 해당하는 명칭을 쓰시오.</span>
<div class="question-box">
- 각 페이지가 적재될 때마다 시간을 기억, 가장 먼저 들어온 페이지를 교체 (선입선출): [[FIFO]]<br>
- 사용된 시간을 확인하여 가장 오랫동안 사용되지 않은 페이지를 선택하여 교체: [[LRU]]<br>
- 사용된 횟수를 확인하여 참조 횟수가 가장 적은 페이지를 선택하여 교체: [[LFU]]<br>
- 앞으로 가장 오랫동안 사용하지 않을 페이지를 교체: [[OPT]]
</div>`,
    hint: "먼저 들어온 게 먼저 나가면 <strong>FIFO(First-In-First-Out)</strong>, 가장 오랫동안 안 쓴(시간적 방치) 건 <strong>LRU</strong>, 빈출도 즉 참조 횟수가 가장 적은 소외된 페이지를 빼내는 건 <strong>LFU</strong>입니다."
  },
  {
    chapter: "Chapter 10~11. 테스트 관리 및 기초 기술",
    q: `<span class="q-prefix">Q. 선점/비선점 스케줄링의 방식 중 다음 설명에 해당하는 명칭을 쓰시오.</span>
<div class="question-box">
- (선점형) 프로세스는 같은 크기의 CPU 시간을 할당받고, 시간 내에 처리 못하면 대기 큐 맨 뒤로 감: [[라운드 로빈 (RR)]]<br>
- (비선점형) 프로세스가 대기 큐에 도착한 순서대로 CPU 할당: [[FCFS (FIFO)]]<br>
- (비선점형) 대기 중인 프로세스 중 현재 '응답률'이 가장 높은 것을 선택 (응답률 = (대기+서비스)/서비스): [[HRN]]
</div>`,
    hint: "공평하게 시간을 칼같이 할당해서 강제로 제어권을 뺏는 건 <strong>라운드 로빈(선점)</strong>. 대기시간이 긴 늙은 요소들에게도 강제로 우선순위를 끌어올려주는 공식을 활용하는 것은 <strong>HRN(비선점)</strong>입니다."
  },
  {
    chapter: "Chapter 10~11. 테스트 관리 및 기초 기술",
    q: `<span class="q-prefix">Q. OSI 7계층 중 3, 4계층과 관련된 장비를 쓰시오.</span>
<div class="question-box">
- 3계층 (네트워크 계층) 장비: [[라우터]], [[L3 스위치]]<br>
- 4계층 (전송 계층) 장비로 정교한 로드밸런싱이 가능한 스위치: [[L4 스위치]]
</div>`,
    hint: "IP 주소를 활용해 경로를 설정해 주는 3계층 핵심 장비는 <strong>라우터</strong>. 포트 번호를 식별하여 트래픽 분산과 로드밸런싱을 완벽하게 수행하는 네트워크 앞단의 방패막 4계층 장비는 <strong>L4 스위치</strong>입니다."
  }
];

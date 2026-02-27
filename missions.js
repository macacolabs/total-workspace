const allCourses = {};
allCourses.portfolio = [
    {
        id: 1,
        title: "HTML 뼈대 만들기",
        badge: "Step 1",
        description: `<span class="mission-badge">Step 1 / 10</span>
<h3>🎯 미션: 포트폴리오 HTML 구조 만들기</h3>
<p>시맨틱 태그를 활용해 포트폴리오 페이지의 기본 뼈대를 만드세요.</p>
<h3>📋 완성 조건</h3>
<ul>
  <li><code>&lt;header&gt;</code> — 이름과 직업명 포함</li>
  <li><code>&lt;nav&gt;</code> — 링크 3개 이상</li>
  <li><code>&lt;main&gt;</code> — 소개 섹션 포함</li>
  <li><code>&lt;section id="skills"&gt;</code> — 스킬 목록</li>
  <li><code>&lt;section id="portfolio"&gt;</code> — 포트폴리오</li>
  <li><code>&lt;footer&gt;</code> — 저작권 정보</li>
</ul>`,
        hint: "시맨틱 태그(header, nav, main, section, footer)를 순서대로 작성하세요. id 속성도 꼭 추가하세요!",
        startCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 포트폴리오</title>
</head>
<body>

    <!-- 여기에 HTML 구조를 작성하세요 -->

</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 포트폴리오</title>
</head>
<body>
    <header>
        <h1>홍길동</h1>
        <p>웹 개발자 / 디자이너</p>
    </header>
    <nav>
        <a href="#about">소개</a>
        <a href="#skills">스킬</a>
        <a href="#portfolio">포트폴리오</a>
    </nav>
    <main>
        <section id="about">
            <h2>소개</h2>
            <p>안녕하세요! 저는 웹 개발을 좋아하는 홍길동입니다.</p>
        </section>
        <section id="skills">
            <h2>스킬</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>
        <section id="portfolio">
            <h2>포트폴리오</h2>
            <p>제 작업물을 소개합니다.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 홍길동. All Rights Reserved.</p>
    </footer>
</body>
</html>`,
        validation: function (code) {
            const ok = code.includes('<header') && code.includes('<nav') && code.includes('<main') && code.includes('id="skills"') && code.includes('id="portfolio"') && code.includes('<footer');
            return ok ? { success: true, message: "HTML 뼈대 완성!" } : { success: false, message: "header, nav, main, section#skills, section#portfolio, footer가 모두 있는지 확인하세요." };
        }
    },
    {
        id: 2,
        title: "헤더 꾸미기",
        badge: "Step 2",
        description: `<span class="mission-badge">Step 2 / 10</span>
<h3>🎨 미션: 헤더에 배경색과 패딩 적용</h3>
<p>CSS로 header를 멋지게 꾸며보세요!</p>
<h3>📋 완성 조건</h3>
<ul>
  <li><code>header</code>에 <code>background-color</code> 지정 (어두운 색 권장)</li>
  <li><code>header</code>에 <code>padding: 30px</code> 이상</li>
  <li><code>header h1</code>에 <code>color: white</code></li>
  <li><code>header p</code>에 <code>color</code> 지정 (밝은 회색 계열)</li>
</ul>`,
        hint: "header { background-color: #2c3e50; padding: 40px; } 처럼 style 태그 안에 작성하세요.",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; }
        header {
            background-color: #1a1a2e;
            padding: 40px 60px;
            text-align: center;
        }
        header h1 { color: white; font-size: 36px; margin-bottom: 8px; }
        header p { color: #aabbcc; font-size: 16px; }
        nav { background: #16213e; padding: 15px 60px; }
        nav a { color: white; text-decoration: none; margin-right: 20px; }
        main { padding: 40px 60px; }
        section { margin-bottom: 40px; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; }
    </style>
</head>
<body>
    <header>
        <h1>홍길동</h1>
        <p>웹 개발자 / 디자이너</p>
    </header>
    <nav>
        <a href="#about">소개</a>
        <a href="#skills">스킬</a>
        <a href="#portfolio">포트폴리오</a>
    </nav>
    <main>
        <section id="about"><h2>소개</h2><p>안녕하세요! 홍길동입니다.</p></section>
        <section id="skills"><h2>스킬</h2><ul><li>HTML</li><li>CSS</li></ul></section>
        <section id="portfolio"><h2>포트폴리오</h2><p>제 작업물입니다.</p></section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasHeaderBg = /header[^}]*background/i.test(code);
            const hasHeaderColor = /header[^}]*color\s*:\s*white/i.test(code) || /h1[^}]*color/i.test(code);
            const hasPadding = /header[^}]*padding\s*:\s*[3-9]\d/i.test(code) || /header[^}]*padding\s*:\s*[1-9]\d{2}/i.test(code) || /header[^}]*padding/i.test(code);
            if (hasHeaderBg && hasHeaderColor) return { success: true, message: "헤더 스타일 완성!" };
            return { success: false, message: "header의 background-color와 h1의 color: white를 확인하세요." };
        }
    },
    {
        id: 3,
        title: "내비게이션 꾸미기",
        badge: "Step 3",
        description: `<span class="mission-badge">Step 3 / 10</span>
<h3>🔗 미션: 내비게이션 메뉴를 Flexbox로 꾸미기</h3>
<ul>
  <li><code>nav</code>에 <code>display: flex</code>와 <code>gap</code> 적용</li>
  <li><code>nav a</code>의 밑줄 제거 (<code>text-decoration: none</code>)</li>
  <li><code>nav a:hover</code>에 색상 변화 효과</li>
</ul>`,
        hint: "nav { display: flex; gap: 20px; padding: 15px 60px; } / nav a:hover { color: #7c6cf5; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; }
        header { background: #1a1a2e; padding: 40px 60px; text-align: center; }
        header h1 { color: white; font-size: 36px; margin-bottom: 8px; }
        header p { color: #aabbcc; font-size: 16px; }
        nav {
            background: #16213e;
            display: flex;
            gap: 30px;
            padding: 15px 60px;
            align-items: center;
        }
        nav a { color: #ccc; text-decoration: none; font-size: 14px; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        main { padding: 40px 60px; }
        section { margin-bottom: 40px; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; }
    </style>
</head>
<body>
    <header><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></header>
    <nav>
        <a href="#about">소개</a>
        <a href="#skills">스킬</a>
        <a href="#portfolio">포트폴리오</a>
    </nav>
    <main>
        <section id="about"><h2>소개</h2><p>안녕하세요! 홍길동입니다.</p></section>
        <section id="skills"><h2>스킬</h2><ul><li>HTML</li><li>CSS</li></ul></section>
        <section id="portfolio"><h2>포트폴리오</h2><p>작업물입니다.</p></section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasFlex = /nav[^}]*display\s*:\s*flex/i.test(code);
            const hasNoUnderline = /text-decoration\s*:\s*none/i.test(code);
            const hasHover = /nav\s+a:hover|nav\s*a:hover/i.test(code);
            if (hasFlex && hasNoUnderline && hasHover) return { success: true, message: "Flexbox 내비게이션 완성!" };
            return { success: false, message: "nav에 display:flex, a에 text-decoration:none, a:hover를 확인하세요." };
        }
    },
    {
        id: 4,
        title: "소개 섹션 (Hero) 꾸미기",
        badge: "Step 4",
        description: `<span class="mission-badge">Step 4 / 10</span>
<h3>✨ 미션: 소개 섹션을 멋지게</h3>
<ul>
  <li><code>#about</code>에 최소 높이 <code>min-height: 200px</code></li>
  <li>텍스트 가운데 정렬 <code>text-align: center</code></li>
  <li>h2 폰트 크기 <code>28px</code> 이상</li>
  <li>배경색 또는 그라데이션 추가 (<code>linear-gradient</code>)</li>
</ul>`,
        hint: "#about { min-height: 200px; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; }
        header { background: #1a1a2e; padding: 40px 60px; text-align: center; }
        header h1 { color: white; font-size: 36px; margin-bottom: 8px; }
        header p { color: #aabbcc; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about {
            min-height: 250px;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            text-align: center;
            padding: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        #about h2 { font-size: 32px; margin-bottom: 16px; }
        #about p { font-size: 16px; max-width: 500px; line-height: 1.6; }
        #skills, #portfolio { padding: 40px 60px; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; margin-top: 40px; }
    </style>
</head>
<body>
    <header><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></header>
    <nav>
        <a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a>
    </nav>
    <main>
        <section id="about">
            <h2>👋 안녕하세요!</h2>
            <p>저는 아름다운 웹을 만드는 것을 좋아하는 홍길동입니다.<br>HTML과 CSS로 세상을 꾸밉니다.</p>
        </section>
        <section id="skills"><h2>스킬</h2><ul><li>HTML</li><li>CSS</li></ul></section>
        <section id="portfolio"><h2>포트폴리오</h2><p>작업물입니다.</p></section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasMinHeight = /#about[^}]*min-height/i.test(code);
            const hasCenter = /#about[^}]*text-align\s*:\s*center/i.test(code) || /#about[^}]*align-items\s*:\s*center/i.test(code);
            if (hasMinHeight && hasCenter) return { success: true, message: "Hero 섹션 완성!" };
            return { success: false, message: "#about에 min-height와 text-align: center를 확인하세요." };
        }
    },
    {
        id: 5,
        title: "스킬 목록 꾸미기",
        badge: "Step 5",
        description: `<span class="mission-badge">Step 5 / 10</span>
<h3>📌 미션: 스킬 목록을 뱃지 스타일로</h3>
<ul>
  <li><code>#skills ul</code>의 <code>list-style: none</code></li>
  <li>li 항목들을 <code>inline-block</code>으로 가로 배치</li>
  <li>각 li에 <code>background</code>, <code>border-radius</code>, <code>padding</code> 적용</li>
  <li>스킬 항목 5개 이상 추가</li>
</ul>`,
        hint: "#skills li { display: inline-block; background: #7c6cf5; color: white; padding: 6px 16px; border-radius: 20px; margin: 4px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; }
        header { background: #1a1a2e; padding: 40px 60px; text-align: center; }
        header h1 { color: white; font-size: 36px; margin-bottom: 8px; }
        header p { color: #aabbcc; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about { min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 32px; margin-bottom: 16px; }
        #about p { font-size: 16px; max-width: 500px; line-height: 1.6; }
        #skills { padding: 40px 60px; }
        #skills h2 { font-size: 24px; margin-bottom: 20px; color: #333; }
        #skills ul { list-style: none; }
        #skills li {
            display: inline-block;
            background: #7c6cf5;
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            margin: 4px;
            font-size: 14px;
            font-weight: 600;
        }
        #portfolio { padding: 40px 60px; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; margin-top: 20px; }
    </style>
</head>
<body>
    <header><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <main>
        <section id="about"><h2>👋 안녕하세요!</h2><p>HTML과 CSS로 세상을 꾸밉니다.</p></section>
        <section id="skills">
            <h2>🛠 스킬</h2>
            <ul>
                <li>HTML5</li><li>CSS3</li><li>JavaScript</li>
                <li>Flexbox</li><li>반응형 웹</li>
            </ul>
        </section>
        <section id="portfolio"><h2>포트폴리오</h2><p>작업물입니다.</p></section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasNoStyle = /#skills\s*(ul|li)[^}]*list-style\s*:\s*none/i.test(code) || /list-style\s*:\s*none/i.test(code);
            const hasInlineBlock = /li[^}]*inline-block/i.test(code);
            const hasRadius = /li[^}]*border-radius/i.test(code);
            if (hasNoStyle && hasInlineBlock && hasRadius) return { success: true, message: "뱃지 스타일 스킬 목록 완성!" };
            return { success: false, message: "list-style: none, display: inline-block, border-radius를 li에 적용하세요." };
        }
    },
    {
        id: 6,
        title: "포트폴리오 카드",
        badge: "Step 6",
        description: `<span class="mission-badge">Step 6 / 10</span>
<h3>🃏 미션: 포트폴리오 카드 레이아웃 만들기</h3>
<ul>
  <li><code>#portfolio</code> 안에 <code>.card</code> div를 3개 추가</li>
  <li>카드에 <code>background</code>, <code>border-radius: 8px</code>, <code>box-shadow</code> 적용</li>
  <li>카드 배치: <code>display: flex; flex-wrap: wrap; gap: 20px</code></li>
  <li>각 카드에 프로젝트 이름과 설명 추가</li>
</ul>`,
        hint: ".card { background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 20px; width: 280px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f5f5f5; }
        header { background: #1a1a2e; padding: 40px 60px; text-align: center; }
        header h1 { color: white; font-size: 36px; margin-bottom: 8px; }
        header p { color: #aabbcc; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about { min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 32px; margin-bottom: 16px; }
        #skills { padding: 40px 60px; background: white; }
        #skills h2 { font-size: 24px; margin-bottom: 20px; }
        #skills ul { list-style: none; }
        #skills li { display: inline-block; background: #7c6cf5; color: white; padding: 8px 20px; border-radius: 20px; margin: 4px; font-size: 14px; }
        #portfolio { padding: 40px 60px; }
        #portfolio h2 { font-size: 24px; margin-bottom: 24px; }
        .card-wrap { display: flex; flex-wrap: wrap; gap: 20px; }
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
            padding: 24px;
            width: 280px;
            transition: transform 0.3s;
        }
        .card:hover { transform: translateY(-4px); }
        .card h3 { font-size: 16px; margin-bottom: 8px; color: #333; }
        .card p { font-size: 13px; color: #777; line-height: 1.6; }
        .card-tag { display: inline-block; background: #e8e4ff; color: #7c6cf5; font-size: 11px; padding: 2px 8px; border-radius: 4px; margin-top: 10px; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; margin-top: 20px; }
    </style>
</head>
<body>
    <header><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <main>
        <section id="about"><h2>👋 안녕하세요!</h2><p>HTML과 CSS로 세상을 꾸밉니다.</p></section>
        <section id="skills"><h2>🛠 스킬</h2><ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Flexbox</li><li>반응형 웹</li></ul></section>
        <section id="portfolio">
            <h2>🗂 포트폴리오</h2>
            <div class="card-wrap">
                <div class="card"><h3>포트폴리오 웹사이트</h3><p>HTML, CSS로 만든 개인 포트폴리오 페이지입니다.</p><span class="card-tag">HTML/CSS</span></div>
                <div class="card"><h3>쇼핑몰 UI</h3><p>Flexbox를 활용한 반응형 쇼핑몰 UI 프로젝트입니다.</p><span class="card-tag">CSS</span></div>
                <div class="card"><h3>레스토랑 홈페이지</h3><p>시맨틱 태그와 그라데이션을 활용한 음식점 웹사이트입니다.</p><span class="card-tag">HTML/CSS</span></div>
            </div>
        </section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasFlex = /card-wrap[^}]*flex|\.card-wrap[^}]*display\s*:\s*flex/i.test(code);
            const hasCard = (code.match(/class="card"/g) || []).length >= 3;
            const hasShadow = /card[^}]*box-shadow/i.test(code);
            const hasRadius = /card[^}]*border-radius/i.test(code);
            if (hasCard && hasShadow && hasRadius) return { success: true, message: "포트폴리오 카드 완성!" };
            return { success: false, message: ".card를 3개 이상 만들고 box-shadow, border-radius를 적용하세요." };
        }
    },
    {
        id: 7,
        title: "프로필 이미지",
        badge: "Step 7",
        description: `<span class="mission-badge">Step 7 / 10</span>
<h3>🖼 미션: 원형 프로필 이미지 추가</h3>
<ul>
  <li>header 안에 <code>img</code> 또는 빈 div로 프로필 자리 추가</li>
  <li>너비/높이 <code>120px</code>, <code>border-radius: 50%</code></li>
  <li><code>border: 4px solid white</code> 테두리</li>
  <li>header를 <code>display: flex</code>로 이미지와 텍스트를 나란히 배치</li>
</ul>`,
        hint: ".profile-img { width: 120px; height: 120px; border-radius: 50%; border: 4px solid white; background: #7c6cf5; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f5f5f5; }
        header {
            background: #1a1a2e; padding: 40px 60px;
            display: flex; align-items: center; gap: 30px;
        }
        .profile-img {
            width: 120px; height: 120px;
            border-radius: 50%;
            border: 4px solid white;
            background: linear-gradient(135deg, #7c6cf5, #a78bfa);
            flex-shrink: 0;
            overflow: hidden;
            display: flex; align-items: center; justify-content: center;
            font-size: 48px;
        }
        .header-text h1 { color: white; font-size: 32px; margin-bottom: 6px; }
        .header-text p { color: #aabbcc; font-size: 15px; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about { min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 28px; margin-bottom: 12px; }
        #skills { padding: 40px 60px; background: white; }
        #skills h2 { font-size: 22px; margin-bottom: 16px; }
        #skills ul { list-style: none; }
        #skills li { display: inline-block; background: #7c6cf5; color: white; padding: 6px 16px; border-radius: 20px; margin: 4px; font-size: 13px; }
        #portfolio { padding: 40px 60px; }
        #portfolio h2 { font-size: 22px; margin-bottom: 20px; }
        .card-wrap { display: flex; flex-wrap: wrap; gap: 20px; }
        .card { background: white; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); padding: 20px; width: 260px; transition: transform 0.3s; }
        .card:hover { transform: translateY(-4px); }
        .card h3 { font-size: 15px; margin-bottom: 6px; }
        .card p { font-size: 12px; color: #777; line-height: 1.6; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; margin-top: 20px; }
    </style>
</head>
<body>
    <header>
        <div class="profile-img">😊</div>
        <div class="header-text">
            <h1>홍길동</h1>
            <p>웹 개발자 / 디자이너</p>
        </div>
    </header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <main>
        <section id="about"><h2>👋 안녕하세요!</h2><p>HTML과 CSS로 세상을 꾸밉니다.</p></section>
        <section id="skills"><h2>🛠 스킬</h2><ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Flexbox</li><li>반응형 웹</li></ul></section>
        <section id="portfolio">
            <h2>🗂 포트폴리오</h2>
            <div class="card-wrap">
                <div class="card"><h3>포트폴리오 사이트</h3><p>HTML/CSS로 만든 포트폴리오입니다.</p></div>
                <div class="card"><h3>쇼핑몰 UI</h3><p>Flexbox 기반 쇼핑몰입니다.</p></div>
                <div class="card"><h3>레스토랑 홈페이지</h3><p>시맨틱 태그 활용 프로젝트입니다.</p></div>
            </div>
        </section>
    </main>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasRound = /border-radius\s*:\s*50%/i.test(code);
            const hasBorder = /profile|img[^}]*border.*solid/i.test(code) || /border\s*:\s*\d+px\s+solid\s+white/i.test(code);
            if (hasRound) return { success: true, message: "원형 프로필 이미지 완성!" };
            return { success: false, message: "border-radius: 50%; 와 width/height 120px를 확인하세요." };
        }
    },
    {
        id: 8,
        title: "2컬럼 레이아웃",
        badge: "Step 8",
        description: `<span class="mission-badge">Step 8 / 10</span>
<h3>⬛ 미션: Flexbox로 2컬럼 레이아웃 만들기</h3>
<ul>
  <li><code>main</code>을 <code>display: flex</code>로 감싸기</li>
  <li>좌측 <code>aside</code>: 폭 220px, 연락처 정보</li>
  <li>우측 <code>section</code>들: <code>flex: 1</code>로 나머지 공간</li>
  <li>aside에 배경색과 패딩 적용</li>
</ul>`,
        hint: "main을 .main-wrap으로 감싸고: .main-wrap { display: flex; } aside { width: 220px; } .content { flex: 1; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f5f5f5; }
        header { background: #1a1a2e; padding: 40px 60px; display: flex; align-items: center; gap: 30px; }
        .profile-img { width: 120px; height: 120px; border-radius: 50%; border: 4px solid white; background: linear-gradient(135deg, #7c6cf5, #a78bfa); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 48px; }
        .header-text h1 { color: white; font-size: 32px; margin-bottom: 6px; }
        .header-text p { color: #aabbcc; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about { min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 28px; margin-bottom: 12px; }
        .main-wrap { display: flex; }
        aside {
            width: 220px; flex-shrink: 0;
            background: #2c3e50; color: white;
            padding: 30px 20px;
            min-height: 300px;
        }
        aside h3 { font-size: 14px; color: #aabbcc; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; }
        aside p { font-size: 13px; color: #ccc; margin-bottom: 10px; line-height: 1.6; }
        .content { flex: 1; padding: 40px; }
        #skills h2 { font-size: 22px; margin-bottom: 16px; }
        #skills ul { list-style: none; margin-bottom: 30px; }
        #skills li { display: inline-block; background: #7c6cf5; color: white; padding: 6px 16px; border-radius: 20px; margin: 4px; font-size: 13px; }
        #portfolio h2 { font-size: 22px; margin-bottom: 20px; }
        .card-wrap { display: flex; flex-wrap: wrap; gap: 20px; }
        .card { background: white; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); padding: 20px; width: 220px; transition: transform 0.3s; }
        .card:hover { transform: translateY(-4px); }
        .card h3 { font-size: 14px; margin-bottom: 6px; }
        .card p { font-size: 12px; color: #777; line-height: 1.5; }
        footer { background: #1a1a2e; color: #aabbcc; text-align: center; padding: 20px; }
    </style>
</head>
<body>
    <header>
        <div class="profile-img">😊</div>
        <div class="header-text"><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></div>
    </header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <section id="about"><h2>👋 안녕하세요!</h2><p>HTML과 CSS로 세상을 꾸밉니다.</p></section>
    <div class="main-wrap">
        <aside>
            <h3>연락처</h3>
            <p>📧 hong@email.com</p>
            <p>📱 010-1234-5678</p>
            <p>🌐 github.com/hong</p>
        </aside>
        <div class="content">
            <section id="skills"><h2>🛠 스킬</h2><ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Flexbox</li><li>반응형</li></ul></section>
            <section id="portfolio"><h2>🗂 포트폴리오</h2><div class="card-wrap"><div class="card"><h3>포트폴리오</h3><p>HTML/CSS 포트폴리오</p></div><div class="card"><h3>쇼핑몰</h3><p>Flexbox 기반</p></div><div class="card"><h3>레스토랑</h3><p>시맨틱 태그 활용</p></div></div></section>
        </div>
    </div>
    <footer><p>&copy; 2024 홍길동</p></footer>
</body>
</html>`,
        validation: function (code) {
            const hasAside = code.includes('<aside');
            const hasFlex = /main-wrap[^}]*display\s*:\s*flex|\.main-wrap[^}]*flex/i.test(code) || (code.includes('aside') && /display\s*:\s*flex/i.test(code));
            if (hasAside && hasFlex) return { success: true, message: "2컬럼 레이아웃 완성!" };
            return { success: false, message: "aside 태그와 display: flex로 2컬럼 배치를 확인하세요." };
        }
    },
    {
        id: 9,
        title: "푸터 완성",
        badge: "Step 9",
        description: `<span class="mission-badge">Step 9 / 10</span>
<h3>🏁 미션: 푸터를 완성하세요</h3>
<ul>
  <li><code>footer</code>에 배경색 (어두운 계열)</li>
  <li><code>text-align: center</code> + <code>padding: 30px</code></li>
  <li>저작권 텍스트 + SNS 링크 3개 추가 (🐙🐦📸 등 이모지 사용)</li>
  <li>링크에 hover 효과 (<code>color</code> 변화 + <code>transition</code>)</li>
</ul>`,
        hint: "footer a { color: #aabbcc; text-decoration: none; margin: 0 10px; transition: color 0.3s; } footer a:hover { color: white; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>포트폴리오</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f5f5f5; }
        header { background: #1a1a2e; padding: 40px 60px; display: flex; align-items: center; gap: 30px; }
        .profile-img { width: 120px; height: 120px; border-radius: 50%; border: 4px solid white; background: linear-gradient(135deg, #7c6cf5, #a78bfa); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 48px; }
        .header-text h1 { color: white; font-size: 32px; margin-bottom: 6px; }
        .header-text p { color: #aabbcc; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: #7c6cf5; }
        #about { min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 28px; margin-bottom: 12px; }
        .main-wrap { display: flex; }
        aside { width: 220px; flex-shrink: 0; background: #2c3e50; color: white; padding: 30px 20px; min-height: 300px; }
        aside h3 { font-size: 14px; color: #aabbcc; margin-bottom: 16px; }
        aside p { font-size: 13px; color: #ccc; margin-bottom: 10px; }
        .content { flex: 1; padding: 40px; }
        #skills h2, #portfolio h2 { font-size: 22px; margin-bottom: 16px; }
        #skills ul { list-style: none; margin-bottom: 30px; }
        #skills li { display: inline-block; background: #7c6cf5; color: white; padding: 6px 16px; border-radius: 20px; margin: 4px; font-size: 13px; }
        .card-wrap { display: flex; flex-wrap: wrap; gap: 20px; }
        .card { background: white; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); padding: 20px; width: 220px; transition: transform 0.3s; }
        .card:hover { transform: translateY(-4px); }
        .card h3 { font-size: 14px; margin-bottom: 6px; }
        .card p { font-size: 12px; color: #777; line-height: 1.5; }
        footer {
            background: #0f0f1a;
            color: #aabbcc;
            text-align: center;
            padding: 40px 20px;
        }
        footer p { margin-bottom: 16px; font-size: 13px; }
        .footer-links { display: flex; justify-content: center; gap: 20px; }
        .footer-links a { color: #778899; text-decoration: none; font-size: 14px; transition: color 0.3s; }
        .footer-links a:hover { color: white; }
    </style>
</head>
<body>
    <header>
        <div class="profile-img">😊</div>
        <div class="header-text"><h1>홍길동</h1><p>웹 개발자 / 디자이너</p></div>
    </header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <section id="about"><h2>👋 안녕하세요!</h2><p>HTML과 CSS로 세상을 꾸밉니다.</p></section>
    <div class="main-wrap">
        <aside><h3>연락처</h3><p>📧 hong@email.com</p><p>📱 010-1234-5678</p></aside>
        <div class="content">
            <section id="skills"><h2>🛠 스킬</h2><ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Flexbox</li><li>반응형</li></ul></section>
            <section id="portfolio"><h2>🗂 포트폴리오</h2><div class="card-wrap"><div class="card"><h3>포트폴리오</h3><p>HTML/CSS 포트폴리오</p></div><div class="card"><h3>쇼핑몰</h3><p>Flexbox 기반</p></div><div class="card"><h3>레스토랑</h3><p>시맨틱 태그 활용</p></div></div></section>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 홍길동. All Rights Reserved.</p>
        <div class="footer-links">
            <a href="#">🐙 GitHub</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">📸 Instagram</a>
        </div>
    </footer>
</body>
</html>`,
        validation: function (code) {
            const hasBg = /footer[^}]*background/i.test(code);
            const hasCenter = /footer[^}]*text-align\s*:\s*center/i.test(code);
            // footer 태그 내부에만 있는 링크 수를 카운트
            const footerMatch = code.match(/<footer[\s\S]*?<\/footer>/i);
            const footerHtml = footerMatch ? footerMatch[0] : '';
            const hasLinks = (footerHtml.match(/<a\s+href/gi) || []).length >= 3;
            if (hasBg && hasCenter && hasLinks) return { success: true, message: "푸터 완성!" };
            return { success: false, message: "footer 배경색, text-align: center, footer 안에 링크 3개를 확인하세요." };
        }
    },
    {
        id: 10,
        title: "마무리 스타일",
        badge: "Step 10",
        description: `<span class="mission-badge">Step 10 / 10 — 마지막!</span>
<h3>🌟 최종 미션: 완성도 높이기</h3>
<p>지금까지 만든 포트폴리오에 마지막 마무리를 더하세요!</p>
<ul>
  <li>구글 웹폰트 적용 (Noto Sans KR 또는 Roboto)</li>
  <li>카드에 <code>transition: transform 0.3s</code> 이미 있다면 확인</li>
  <li>모든 <code>a</code> 링크에 <code>transition: color 0.3s</code></li>
  <li>body에 전체 폰트 패밀리 지정</li>
  <li><code>section h2</code>에 통일된 색상 지정</li>
</ul>
<p>✅ 이 단계를 완료하면 포트폴리오가 완성됩니다! 🎉</p>`,
        hint: "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'); body { font-family: 'Noto Sans KR', sans-serif; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>홍길동 포트폴리오</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Sans KR', sans-serif; background: #f8f9fa; color: #333; }
        a { transition: color 0.3s; }
        h2 { color: #2c3e50; }
        header { background: linear-gradient(135deg, #1a1a2e, #2d2d44); padding: 40px 60px; display: flex; align-items: center; gap: 30px; }
        .profile-img { width: 120px; height: 120px; border-radius: 50%; border: 4px solid rgba(255,255,255,0.8); background: linear-gradient(135deg, #7c6cf5, #a78bfa); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 48px; box-shadow: 0 8px 24px rgba(124,108,245,0.4); }
        .header-text h1 { color: white; font-size: 32px; font-weight: 700; margin-bottom: 6px; }
        .header-text p { color: #aabbcc; font-size: 15px; }
        nav { background: #16213e; display: flex; gap: 30px; padding: 15px 60px; }
        nav a { color: #ccc; text-decoration: none; font-weight: 500; }
        nav a:hover { color: #a78bfa; }
        #about { min-height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        #about h2 { font-size: 30px; color: white; margin-bottom: 14px; }
        #about p { font-size: 16px; max-width: 500px; line-height: 1.8; opacity: 0.9; }
        .main-wrap { display: flex; }
        aside { width: 220px; flex-shrink: 0; background: #2c3e50; color: white; padding: 30px 20px; }
        aside h3 { font-size: 12px; color: #8899aa; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 1.5px; }
        aside p { font-size: 13px; color: #ccc; margin-bottom: 10px; line-height: 1.6; }
        .content { flex: 1; padding: 40px; }
        #skills { margin-bottom: 40px; }
        #skills h2 { font-size: 22px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #7c6cf5; display: inline-block; }
        #skills ul { list-style: none; margin-top: 14px; }
        #skills li { display: inline-block; background: #7c6cf5; color: white; padding: 7px 18px; border-radius: 20px; margin: 4px; font-size: 13px; font-weight: 500; transition: transform 0.2s; }
        #skills li:hover { transform: translateY(-2px); }
        #portfolio h2 { font-size: 22px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #7c6cf5; display: inline-block; }
        .card-wrap { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 14px; }
        .card { background: white; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 22px; width: 220px; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .card h3 { font-size: 14px; font-weight: 700; margin-bottom: 8px; color: #333; }
        .card p { font-size: 12px; color: #888; line-height: 1.6; }
        .card-tag { display: inline-block; background: #ede9ff; color: #7c6cf5; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 4px; margin-top: 10px; }
        footer { background: #0f0f1a; color: #66778a; text-align: center; padding: 40px 20px; }
        footer p { margin-bottom: 14px; font-size: 13px; }
        .footer-links { display: flex; justify-content: center; gap: 20px; }
        .footer-links a { color: #445566; text-decoration: none; font-size: 14px; }
        .footer-links a:hover { color: white; }
    </style>
</head>
<body>
    <header>
        <div class="profile-img">😊</div>
        <div class="header-text"><h1>홍길동</h1><p>웹 개발자 / 디자이너 · HTML & CSS 전문</p></div>
    </header>
    <nav><a href="#about">소개</a><a href="#skills">스킬</a><a href="#portfolio">포트폴리오</a></nav>
    <section id="about"><h2>👋 안녕하세요!</h2><p>저는 아름다운 웹을 만드는 것을 좋아하는 홍길동입니다.<br>HTML과 CSS로 세상을 더 예쁘게 꾸밉니다.</p></section>
    <div class="main-wrap">
        <aside>
            <h3>연락처</h3>
            <p>📧 hong@email.com</p>
            <p>📱 010-1234-5678</p>
            <p>🌐 github.com/hong</p>
        </aside>
        <div class="content">
            <section id="skills"><h2>🛠 스킬</h2><ul><li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>Flexbox</li><li>반응형 웹</li><li>Git</li></ul></section>
            <section id="portfolio">
                <h2>🗂 포트폴리오</h2>
                <div class="card-wrap">
                    <div class="card"><h3>포트폴리오 사이트</h3><p>HTML/CSS로 만든 개인 포트폴리오</p><span class="card-tag">HTML/CSS</span></div>
                    <div class="card"><h3>쇼핑몰 UI</h3><p>Flexbox 기반 반응형 쇼핑몰</p><span class="card-tag">CSS</span></div>
                    <div class="card"><h3>레스토랑 홈페이지</h3><p>시맨틱 태그 활용 프로젝트</p><span class="card-tag">HTML/CSS</span></div>
                </div>
            </section>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 홍길동. All Rights Reserved.</p>
        <div class="footer-links"><a href="#">🐙 GitHub</a><a href="#">🐦 Twitter</a><a href="#">📸 Instagram</a></div>
    </footer>
</body>
</html>`,
        validation: function (code) {
            // 구글 폰트 @import 또는 <link> 태그로 웹폰트를 실제로 불러와야 함
            const hasGoogleFont = code.toLowerCase().includes('fonts.googleapis.com') ||
                code.toLowerCase().includes('noto sans') ||
                code.toLowerCase().includes('roboto');
            // body에 font-family가 지정되어 있어야 함
            const hasBodyFont = /body[^}]*font-family/i.test(code);
            // transition이 있어야 함
            const hasTransition = code.toLowerCase().includes('transition');
            if (hasGoogleFont && hasBodyFont && hasTransition) return { success: true, message: "🎉 포트폴리오 완성! 모든 10단계를 클리어했습니다!" };
            if (!hasGoogleFont) return { success: false, message: "구글 웹폰트(fonts.googleapis.com)를 @import 또는 <link>로 불러오세요." };
            if (!hasBodyFont) return { success: false, message: "body에 font-family를 지정하세요." };
            return { success: false, message: "transition 속성을 추가하세요." };
        }
    }
];

// =============================================
// 쇼핑몰 상품 페이지 코스
// =============================================
allCourses.shop = [
    {
        id: 1, title: "상품 카드 HTML 구조",
        description: `<span class="mission-badge">Step 1 / 10</span>
<h3>🛒 미션: 상품 카드 HTML 만들기</h3>
<p>쇼핑몰의 기본 단위인 상품 카드를 HTML로 구성하세요.</p>
<h3>📋 완성 조건</h3>
<ul>
  <li><code>.card</code> div 안에 아래 요소 포함</li>
  <li><code>.card-img</code> — 상품 이미지 영역 (div)</li>
  <li><code>.card-body</code> — 상품 정보 영역</li>
  <li><code>h3</code> — 상품 이름</li>
  <li><code>.price</code> — 가격 표시</li>
  <li><code>button</code> — 장바구니 버튼</li>
</ul>`,
        hint: '<div class="card"><div class="card-img"></div><div class="card-body"><h3>상품명</h3><span class="price">10,000원</span><button>장바구니</button></div></div>',
        startCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>쇼핑몰</title>
</head>
<body>

    <!-- 여기에 상품 카드를 작성하세요 -->

</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>쇼핑몰</title>
</head>
<body>
    <div class="card">
        <div class="card-img"></div>
        <div class="card-body">
            <h3>무선 이어폰 Pro</h3>
            <span class="price">89,000원</span>
            <button>🛒 장바구니</button>
        </div>
    </div>
</body>
</html>`,
        validation(code) {
            const ok = code.includes('class="card"') && code.includes('card-img') && code.includes('card-body') && code.includes('<h3') && code.includes('price') && code.includes('<button');
            return ok ? { success: true, message: "상품 카드 구조 완성!" } : { success: false, message: ".card 안에 card-img, card-body, h3, .price, button이 모두 있는지 확인하세요." };
        }
    },
    {
        id: 2, title: "카드 기본 스타일",
        description: `<span class="mission-badge">Step 2 / 10</span>
<h3>🎨 미션: 카드에 기본 스타일 적용</h3>
<ul>
  <li><code>.card</code>에 <code>border-radius: 12px</code></li>
  <li><code>.card</code>에 <code>box-shadow</code> 추가</li>
  <li><code>.card</code>에 <code>overflow: hidden</code></li>
  <li><code>.card</code>에 <code>width: 260px</code></li>
  <li><code>.card-body</code>에 <code>padding: 16px</code></li>
</ul>`,
        hint: ".card { width: 260px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        body { font-family: sans-serif; background: #f5f5f5; padding: 40px; }
        .card {
            width: 260px;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.12);
            overflow: hidden;
            background: white;
        }
        .card-img { width: 100%; height: 180px; background: #e0e0f0; }
        .card-body { padding: 16px; }
        .card-body h3 { font-size: 15px; margin-bottom: 8px; color: #333; }
        .price { font-size: 17px; font-weight: 700; color: #e74c3c; }
        button { margin-top: 12px; width: 100%; padding: 10px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-img"></div>
        <div class="card-body">
            <h3>무선 이어폰 Pro</h3>
            <span class="price">89,000원</span>
            <button>🛒 장바구니</button>
        </div>
    </div>
</body>
</html>`,
        validation(code) {
            const ok = /card[^}]*border-radius/i.test(code) && /card[^}]*box-shadow/i.test(code) && /card[^}]*overflow\s*:\s*hidden/i.test(code);
            return ok ? { success: true, message: "카드 기본 스타일 완성!" } : { success: false, message: ".card에 border-radius, box-shadow, overflow: hidden을 확인하세요." };
        }
    },
    {
        id: 3, title: "이미지 영역 꾸미기",
        description: `<span class="mission-badge">Step 3 / 10</span>
<h3>🖼 미션: 상품 이미지 영역 스타일</h3>
<ul>
  <li><code>.card-img</code>에 <code>height: 180px</code></li>
  <li>배경 그라데이션 또는 색상 지정</li>
  <li>이미지 영역 안에 이모지나 텍스트로 상품 아이콘 표시</li>
  <li><code>display: flex</code>로 아이콘 가운데 정렬</li>
</ul>`,
        hint: ".card-img { height: 180px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; font-size: 60px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        body { font-family: sans-serif; background: #f5f5f5; padding: 40px; }
        .card { width: 260px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); overflow: hidden; background: white; }
        .card-img {
            height: 180px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 64px;
        }
        .card-body { padding: 16px; }
        .card-body h3 { font-size: 15px; margin-bottom: 8px; color: #333; }
        .price { font-size: 17px; font-weight: 700; color: #e74c3c; display: block; margin-bottom: 12px; }
        button { width: 100%; padding: 10px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-img">🎧</div>
        <div class="card-body">
            <h3>무선 이어폰 Pro</h3>
            <span class="price">89,000원</span>
            <button>🛒 장바구니</button>
        </div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasH = /card-img[^}]*height/i.test(code);
            const hasFlex = /card-img[^}]*display\s*:\s*flex/i.test(code);
            const hasBg = /card-img[^}]*background/i.test(code);
            return (hasH && hasFlex && hasBg) ? { success: true, message: "이미지 영역 완성!" } : { success: false, message: ".card-img에 height, background, display:flex를 확인하세요." };
        }
    },
    {
        id: 4, title: "가격 & 할인 뱃지",
        description: `<span class="mission-badge">Step 4 / 10</span>
<h3>💰 미션: 가격 표시 + 할인 뱃지</h3>
<ul>
  <li><code>.price</code>에 <code>font-weight: 700</code>과 강렬한 색상</li>
  <li><code>.original-price</code> — 원래 가격 취소선 (<code>text-decoration: line-through</code>)</li>
  <li><code>.badge</code> — "SALE" 뱃지 (빨간 배경, 흰 글씨, border-radius)</li>
</ul>`,
        hint: '.badge { background: #e74c3c; color: white; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; } .original-price { text-decoration: line-through; color: #aaa; font-size: 13px; }',
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        body { font-family: sans-serif; background: #f5f5f5; padding: 40px; }
        .card { width: 260px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); overflow: hidden; background: white; }
        .card-img { height: 180px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; font-size: 64px; position: relative; }
        .badge { position: absolute; top: 12px; left: 12px; background: #e74c3c; color: white; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; }
        .card-body { padding: 16px; }
        .card-body h3 { font-size: 15px; margin-bottom: 6px; color: #333; }
        .price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .price { font-size: 18px; font-weight: 700; color: #e74c3c; }
        .original-price { font-size: 13px; color: #aaa; text-decoration: line-through; }
        button { width: 100%; padding: 10px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-img">🎧 <span class="badge">SALE</span></div>
        <div class="card-body">
            <h3>무선 이어폰 Pro</h3>
            <div class="price-row">
                <span class="price">62,300원</span>
                <span class="original-price">89,000원</span>
            </div>
            <button>🛒 장바구니</button>
        </div>
    </div>
</body>
</html>`,
        validation(code) {
            const ok = /line-through/i.test(code) && code.toLowerCase().includes('badge') && /badge[^}]*background/i.test(code);
            return ok ? { success: true, message: "가격 & 뱃지 완성!" } : { success: false, message: ".badge와 text-decoration: line-through를 확인하세요." };
        }
    },
    {
        id: 5, title: "버튼 hover 효과",
        description: `<span class="mission-badge">Step 5 / 10</span>
<h3>✨ 미션: 버튼에 hover 효과 추가</h3>
<ul>
  <li>버튼에 <code>transition: all 0.3s</code></li>
  <li><code>button:hover</code>에 배경색 변경</li>
  <li><code>button:hover</code>에 <code>transform: translateY(-2px)</code></li>
  <li>버튼에 <code>cursor: pointer</code></li>
</ul>`,
        hint: "button { transition: all 0.3s; } button:hover { background: #2980b9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52,152,219,0.4); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        body { font-family: sans-serif; background: #f5f5f5; padding: 40px; }
        .card { width: 260px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); overflow: hidden; background: white; }
        .card-img { height: 180px; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; font-size: 64px; position: relative; }
        .badge { position: absolute; top: 12px; left: 12px; background: #e74c3c; color: white; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; }
        .card-body { padding: 16px; }
        .card-body h3 { font-size: 15px; margin-bottom: 6px; color: #333; }
        .price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .price { font-size: 18px; font-weight: 700; color: #e74c3c; }
        .original-price { font-size: 13px; color: #aaa; text-decoration: line-through; }
        button {
            width: 100%; padding: 10px; border: none; border-radius: 6px;
            background: #3498db; color: white; font-weight: 600;
            cursor: pointer; transition: all 0.3s;
        }
        button:hover { background: #2980b9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52,152,219,0.4); }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-img">🎧 <span class="badge">SALE</span></div>
        <div class="card-body">
            <h3>무선 이어폰 Pro</h3>
            <div class="price-row"><span class="price">62,300원</span><span class="original-price">89,000원</span></div>
            <button>🛒 장바구니</button>
        </div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasTransition = /button[^}]*transition/i.test(code);
            const hasHover = /button:hover/i.test(code);
            const hasTransform = /button:hover[^}]*transform/i.test(code);
            return (hasTransition && hasHover && hasTransform) ? { success: true, message: "버튼 hover 효과 완성!" } : { success: false, message: "button에 transition, button:hover에 transform을 확인하세요." };
        }
    },
    {
        id: 6, title: "CSS Grid 상품 목록",
        description: `<span class="mission-badge">Step 6 / 10</span>
<h3>🔲 미션: CSS Grid로 상품 목록 만들기</h3>
<ul>
  <li>카드를 3개 이상 만들기</li>
  <li><code>.card-grid</code>로 카드를 감싸기</li>
  <li><code>display: grid</code> + <code>grid-template-columns: repeat(3, 1fr)</code></li>
  <li><code>gap: 24px</code> 적용</li>
</ul>`,
        hint: ".card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f5f5f5; padding: 40px; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
        .card { border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; }
        .card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; position: relative; }
        .badge { position: absolute; top: 10px; left: 10px; background: #e74c3c; color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .card-body { padding: 14px; }
        .card-body h3 { font-size: 14px; margin-bottom: 6px; color: #333; }
        .price { font-size: 16px; font-weight: 700; color: #e74c3c; display: block; margin-bottom: 10px; }
        button { width: 100%; padding: 9px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s; }
        button:hover { background: #2980b9; transform: translateY(-2px); }
    </style>
</head>
<body>
    <div class="card-grid">
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎧<span class="badge">SALE</span></div><div class="card-body"><h3>무선 이어폰 Pro</h3><span class="price">62,300원</span><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#f093fb,#f5576c)">⌚</div><div class="card-body"><h3>스마트 워치</h3><span class="price">134,000원</span><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">📷<span class="badge">NEW</span></div><div class="card-body"><h3>미니 카메라</h3><span class="price">198,000원</span><button>🛒 장바구니</button></div></div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasGrid = /card-grid[^}]*display\s*:\s*grid/i.test(code) || /display\s*:\s*grid/i.test(code);
            const hasCols = /grid-template-columns/i.test(code);
            const hasCards = (code.match(/class="card"/g) || []).length >= 3;
            return (hasGrid && hasCols && hasCards) ? { success: true, message: "CSS Grid 상품 목록 완성!" } : { success: false, message: ".card-grid에 display:grid, grid-template-columns, 카드 3개 이상을 확인하세요." };
        }
    },
    {
        id: 7, title: "카드 hover lift 효과",
        description: `<span class="mission-badge">Step 7 / 10</span>
<h3>🚀 미션: 카드 hover 시 떠오르는 효과</h3>
<ul>
  <li><code>.card</code>에 <code>transition: transform 0.3s, box-shadow 0.3s</code></li>
  <li><code>.card:hover</code>에 <code>transform: translateY(-8px)</code></li>
  <li><code>.card:hover</code>에 box-shadow 강화</li>
</ul>`,
        hint: ".card { transition: transform 0.3s, box-shadow 0.3s; } .card:hover { transform: translateY(-8px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f0f2f5; padding: 40px; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
        .card { border-radius: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; position: relative; }
        .badge { position: absolute; top: 10px; left: 10px; background: #e74c3c; color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .card-body { padding: 14px; }
        .card-body h3 { font-size: 14px; margin-bottom: 6px; color: #333; }
        .price { font-size: 16px; font-weight: 700; color: #e74c3c; display: block; margin-bottom: 10px; }
        button { width: 100%; padding: 9px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s; }
        button:hover { background: #2980b9; }
    </style>
</head>
<body>
    <div class="card-grid">
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎧<span class="badge">SALE</span></div><div class="card-body"><h3>무선 이어폰 Pro</h3><span class="price">62,300원</span><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#f093fb,#f5576c)">⌚</div><div class="card-body"><h3>스마트 워치</h3><span class="price">134,000원</span><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">📷<span class="badge">NEW</span></div><div class="card-body"><h3>미니 카메라</h3><span class="price">198,000원</span><button>🛒 장바구니</button></div></div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasTransition = /card[^}]*transition[^}]*transform/i.test(code) || /card[^}]*transition/i.test(code);
            const hasHover = /\.card:hover[^}]*transform/i.test(code);
            return (hasTransition && hasHover) ? { success: true, message: "카드 hover 효과 완성!" } : { success: false, message: ".card에 transition, .card:hover에 transform: translateY를 확인하세요." };
        }
    },
    {
        id: 8, title: "헤더 & 카테고리 탭",
        description: `<span class="mission-badge">Step 8 / 10</span>
<h3>🗂 미션: 쇼핑몰 헤더 & 카테고리 탭</h3>
<ul>
  <li><code>header</code>에 로고와 장바구니 아이콘 배치 (flexbox)</li>
  <li>카테고리 탭 <code>nav</code> — 버튼 3개 이상</li>
  <li>첫 번째 탭에 <code>.active</code> 클래스 → 강조 색상</li>
  <li>탭 버튼 배경 없이 border-bottom 방식 스타일</li>
</ul>`,
        hint: ".tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 10px 20px; cursor: pointer; } .tab-btn.active { border-bottom-color: #3498db; color: #3498db; font-weight: 700; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f0f2f5; }
        header { background: white; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .logo { font-size: 20px; font-weight: 900; color: #2c3e50; }
        .cart-btn { background: none; border: none; font-size: 22px; cursor: pointer; }
        nav { background: white; display: flex; padding: 0 40px; border-bottom: 1px solid #eee; gap: 4px; }
        .tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 12px 20px; font-size: 14px; color: #666; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .tab-btn:hover { color: #3498db; }
        .tab-btn.active { border-bottom-color: #3498db; color: #3498db; font-weight: 700; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 32px auto; padding: 0 40px; }
        .card { border-radius: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; position: relative; }
        .badge { position: absolute; top: 10px; left: 10px; background: #e74c3c; color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .card-body { padding: 14px; }
        .card-body h3 { font-size: 14px; margin-bottom: 6px; }
        .price { font-size: 16px; font-weight: 700; color: #e74c3c; display: block; margin-bottom: 10px; }
        button.cart { width: 100%; padding: 9px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; transition: background 0.3s; }
        button.cart:hover { background: #2980b9; }
    </style>
</head>
<body>
    <header><span class="logo">🛍 ShopCSS</span><button class="cart-btn">🛒</button></header>
    <nav>
        <button class="tab-btn active">전체</button>
        <button class="tab-btn">전자기기</button>
        <button class="tab-btn">패션</button>
        <button class="tab-btn">생활용품</button>
    </nav>
    <div class="card-grid">
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎧<span class="badge">SALE</span></div><div class="card-body"><h3>무선 이어폰 Pro</h3><span class="price">62,300원</span><button class="cart">🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#f093fb,#f5576c)">⌚</div><div class="card-body"><h3>스마트 워치</h3><span class="price">134,000원</span><button class="cart">🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">📷<span class="badge">NEW</span></div><div class="card-body"><h3>미니 카메라</h3><span class="price">198,000원</span><button class="cart">🛒 장바구니</button></div></div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasHeader = code.includes('<header');
            const hasNav = code.includes('<nav');
            const hasTabs = (code.match(/tab-btn/g) || []).length >= 3;
            const hasActive = code.includes('active');
            return (hasHeader && hasNav && hasTabs && hasActive) ? { success: true, message: "헤더 & 카테고리 탭 완성!" } : { success: false, message: "header, nav, tab-btn 3개 이상, active 클래스를 확인하세요." };
        }
    },
    {
        id: 9, title: "별점 & 리뷰 수",
        description: `<span class="mission-badge">Step 9 / 10</span>
<h3>⭐ 미션: 별점 & 리뷰 수 표시</h3>
<ul>
  <li>각 카드에 <code>.stars</code> — ★★★★☆ 형태로 별점 표시</li>
  <li>별 색상 <code>color: #f5b942</code> (황금색)</li>
  <li><code>.review-count</code> — "(128)" 형태 리뷰 수 (회색)</li>
  <li>별점과 리뷰 수를 flex로 나란히 배치</li>
</ul>`,
        hint: ".stars { color: #f5b942; font-size: 13px; } .review-count { font-size: 12px; color: #999; margin-left: 4px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f0f2f5; }
        header { background: white; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .logo { font-size: 20px; font-weight: 900; color: #2c3e50; }
        nav { background: white; display: flex; padding: 0 40px; border-bottom: 1px solid #eee; }
        .tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 12px 20px; font-size: 14px; color: #666; cursor: pointer; font-family: inherit; }
        .tab-btn.active { border-bottom-color: #3498db; color: #3498db; font-weight: 700; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 32px auto; padding: 0 40px; }
        .card { border-radius: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; position: relative; }
        .badge { position: absolute; top: 10px; left: 10px; background: #e74c3c; color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .card-body { padding: 14px; }
        .card-body h3 { font-size: 14px; margin-bottom: 4px; }
        .rating { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
        .stars { color: #f5b942; font-size: 13px; }
        .review-count { font-size: 12px; color: #999; }
        .price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .price { font-size: 16px; font-weight: 700; color: #e74c3c; }
        .original-price { font-size: 12px; color: #bbb; text-decoration: line-through; }
        button { width: 100%; padding: 9px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; transition: background 0.3s; }
        button:hover { background: #2980b9; }
    </style>
</head>
<body>
    <header><span class="logo">🛍 ShopCSS</span></header>
    <nav><button class="tab-btn active">전체</button><button class="tab-btn">전자기기</button><button class="tab-btn">패션</button></nav>
    <div class="card-grid">
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎧<span class="badge">SALE</span></div><div class="card-body"><h3>무선 이어폰 Pro</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(248)</span></div><div class="price-row"><span class="price">62,300원</span><span class="original-price">89,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#f093fb,#f5576c)">⌚</div><div class="card-body"><h3>스마트 워치</h3><div class="rating"><span class="stars">★★★★★</span><span class="review-count">(512)</span></div><div class="price-row"><span class="price">134,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">📷<span class="badge">NEW</span></div><div class="card-body"><h3>미니 카메라</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(89)</span></div><div class="price-row"><span class="price">198,000원</span></div><button>🛒 장바구니</button></div></div>
    </div>
</body>
</html>`,
        validation(code) {
            const hasStars = code.includes('stars') && /stars[^}]*color/i.test(code);
            const hasReview = code.includes('review-count') || code.includes('review_count');
            return (hasStars && hasReview) ? { success: true, message: "별점 & 리뷰 완성!" } : { success: false, message: ".stars에 color, .review-count를 확인하세요." };
        }
    },
    {
        id: 10, title: "반응형 레이아웃",
        description: `<span class="mission-badge">Step 10 / 10 — 마지막!</span>
<h3>📱 최종 미션: 반응형 그리드 적용</h3>
<ul>
  <li><code>@media (max-width: 768px)</code> 구간 추가</li>
  <li>768px 이하에서 카드 <code>grid-template-columns: repeat(2, 1fr)</code></li>
  <li><code>@media (max-width: 480px)</code> 구간 추가</li>
  <li>480px 이하에서 카드 <code>grid-template-columns: 1fr</code></li>
</ul>`,
        hint: "@media (max-width: 768px) { .card-grid { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 480px) { .card-grid { grid-template-columns: 1fr; } }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"><title>쇼핑몰</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: sans-serif; background: #f0f2f5; }
        header { background: white; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .logo { font-size: 20px; font-weight: 900; color: #2c3e50; }
        nav { background: white; display: flex; padding: 0 40px; border-bottom: 1px solid #eee; }
        .tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 12px 20px; font-size: 14px; color: #666; cursor: pointer; font-family: inherit; }
        .tab-btn.active { border-bottom-color: #3498db; color: #3498db; font-weight: 700; }
        .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 960px; margin: 32px auto; padding: 0 24px; }
        .card { border-radius: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); overflow: hidden; background: white; transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
        .card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 56px; position: relative; }
        .badge { position: absolute; top: 10px; left: 10px; background: #e74c3c; color: white; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .card-body { padding: 14px; }
        .card-body h3 { font-size: 14px; margin-bottom: 4px; }
        .rating { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
        .stars { color: #f5b942; font-size: 13px; }
        .review-count { font-size: 12px; color: #999; }
        .price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
        .price { font-size: 16px; font-weight: 700; color: #e74c3c; }
        .original-price { font-size: 12px; color: #bbb; text-decoration: line-through; }
        button { width: 100%; padding: 9px; border: none; border-radius: 6px; background: #3498db; color: white; font-weight: 600; cursor: pointer; transition: background 0.3s; }
        button:hover { background: #2980b9; }
        @media (max-width: 768px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .card-grid { grid-template-columns: 1fr; } nav { padding: 0 16px; } }
    </style>
</head>
<body>
    <header><span class="logo">🛍 ShopCSS</span></header>
    <nav><button class="tab-btn active">전체</button><button class="tab-btn">전자기기</button><button class="tab-btn">패션</button></nav>
    <div class="card-grid">
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#667eea,#764ba2)">🎧<span class="badge">SALE</span></div><div class="card-body"><h3>무선 이어폰 Pro</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(248)</span></div><div class="price-row"><span class="price">62,300원</span><span class="original-price">89,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#f093fb,#f5576c)">⌚</div><div class="card-body"><h3>스마트 워치</h3><div class="rating"><span class="stars">★★★★★</span><span class="review-count">(512)</span></div><div class="price-row"><span class="price">134,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#4facfe,#00f2fe)">📷<span class="badge">NEW</span></div><div class="card-body"><h3>미니 카메라</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(89)</span></div><div class="price-row"><span class="price">198,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#43e97b,#38f9d7)">👟</div><div class="card-body"><h3>에어 스니커즈</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(334)</span></div><div class="price-row"><span class="price">78,000원</span><span class="original-price">110,000원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#fa709a,#fee140)">💄<span class="badge">BEST</span></div><div class="card-body"><h3>립스틱 세트</h3><div class="rating"><span class="stars">★★★★★</span><span class="review-count">(902)</span></div><div class="price-row"><span class="price">34,500원</span></div><button>🛒 장바구니</button></div></div>
        <div class="card"><div class="card-img" style="background:linear-gradient(135deg,#a18cd1,#fbc2eb)">🎮</div><div class="card-body"><h3>게임 컨트롤러</h3><div class="rating"><span class="stars">★★★★☆</span><span class="review-count">(167)</span></div><div class="price-row"><span class="price">52,000원</span></div><button>🛒 장바구니</button></div></div>
    </div>
</body>
</html>`,
        validation(code) {
            const has768 = /@media[^{]*768/i.test(code);
            const has480 = /@media[^{]*480/i.test(code);
            return (has768 && has480) ? { success: true, message: "🎉 쇼핑몰 UI 완성! 반응형까지 완벽합니다!" } : { success: false, message: "@media (max-width: 768px)와 @media (max-width: 480px) 두 구간을 모두 추가하세요." };
        }
    }
];


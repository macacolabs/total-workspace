// =============================================
// 날씨 앱 UI 코스
// =============================================
allCourses.weather = [
    {
        id: 1, title: "날씨 카드 HTML 구조",
        description: `<span class="mission-badge">Step 1 / 10</span>
<h3>🌤 미션: 날씨 카드 HTML 만들기</h3>
<ul>
  <li><code>.weather-card</code> div 생성</li>
  <li><code>.weather-icon</code> — 날씨 이모지 표시 영역</li>
  <li><code>.temperature</code> — 기온 표시</li>
  <li><code>.city</code> — 도시명</li>
  <li><code>.weather-desc</code> — 날씨 설명 (예: 맑음)</li>
</ul>`,
        hint: '<div class="weather-card"><div class="weather-icon">☀️</div><div class="temperature">24°C</div><p class="city">서울</p><p class="weather-desc">맑음</p></div>',
        startCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title></head>
<body>
    <!-- 날씨 카드를 작성하세요 -->
</body></html>`,
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
    </div>
</body></html>`,
        validation(code) {
            const ok = code.includes('weather-card') && code.includes('temperature') && code.includes('city') && code.includes('weather-desc');
            return ok ? { success: true, message: "날씨 카드 구조 완성!" } : { success: false, message: "weather-card, temperature, city, weather-desc를 모두 작성하세요." };
        }
    },
    {
        id: 2, title: "그라데이션 배경",
        description: `<span class="mission-badge">Step 2 / 10</span>
<h3>🌈 미션: 하늘 느낌 그라데이션 배경</h3>
<ul>
  <li><code>body</code>나 <code>.weather-card</code>에 <code>linear-gradient</code> 적용</li>
  <li>하늘색 계열 (예: #87ceeb → #4fc3f7)</li>
  <li>카드에 <code>border-radius: 20px</code>과 <code>padding: 40px</code></li>
  <li><code>text-align: center</code></li>
</ul>`,
        hint: ".weather-card { background: linear-gradient(135deg, #87ceeb, #4fc3f7); border-radius: 20px; padding: 40px; text-align: center; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:#e0f4ff; }
  .weather-card { background:linear-gradient(135deg,#87ceeb,#4fc3f7); border-radius:20px; padding:40px 60px; text-align:center; color:white; }
  .weather-icon { font-size:80px; margin-bottom:10px; }
  .temperature { font-size:60px; font-weight:700; }
  .city { font-size:20px; margin:8px 0 4px; }
  .weather-desc { font-size:14px; opacity:0.8; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
    </div>
</body></html>`,
        validation(code) {
            const ok = /linear-gradient/i.test(code) && /border-radius/i.test(code);
            return ok ? { success: true, message: "그라데이션 배경 완성!" } : { success: false, message: "linear-gradient와 border-radius를 확인하세요." };
        }
    },
    {
        id: 3, title: "온도 & 날씨 아이콘 스타일",
        description: `<span class="mission-badge">Step 3 / 10</span>
<h3>🌡 미션: 온도와 아이콘 크게 표시</h3>
<ul>
  <li><code>.weather-icon</code> <code>font-size: 80px</code> 이상</li>
  <li><code>.temperature</code> <code>font-size: 60px</code>이상, <code>font-weight: 700</code></li>
  <li>텍스트 색상 white</li>
  <li><code>text-shadow</code>로 은은한 그림자 추가</li>
</ul>`,
        hint: ".temperature { font-size:64px; font-weight:700; color:white; text-shadow: 0 2px 8px rgba(0,0,0,0.2); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:#e0f4ff; }
  .weather-card { background:linear-gradient(135deg,#87ceeb,#4fc3f7); border-radius:20px; padding:40px 60px; text-align:center; color:white; min-width:320px; }
  .weather-icon { font-size:88px; margin-bottom:8px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.15)); }
  .temperature { font-size:68px; font-weight:700; color:white; text-shadow:0 2px 12px rgba(0,0,0,0.2); line-height:1; margin-bottom:8px; }
  .city { font-size:22px; font-weight:600; margin-bottom:4px; }
  .weather-desc { font-size:15px; opacity:0.85; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음 · 습도 45%</p>
    </div>
</body></html>`,
        validation(code) {
            const hasBigTemp = /temperature[^}]*font-size\s*:\s*(6[0-9]|[7-9]\d|\d{3})/i.test(code);
            const hasShadow = /text-shadow/i.test(code);
            return (hasBigTemp && hasShadow) ? { success: true, message: "온도 스타일 완성!" } : { success: false, message: "temperature의 font-size 60px↑과 text-shadow를 확인하세요." };
        }
    },
    {
        id: 4, title: "습도 & 바람 정보",
        description: `<span class="mission-badge">Step 4 / 10</span>
<h3>💨 미션: 습도 & 바람 정보 추가</h3>
<ul>
  <li><code>.info-row</code> div로 습도, 바람, 체감온도 묶기</li>
  <li><code>display: flex</code>로 나란히 배치</li>
  <li>각 항목에 아이콘(이모지) + 수치 표시</li>
  <li>카드 하단에 구분선 추가</li>
</ul>`,
        hint: ".info-row { display:flex; justify-content:center; gap:24px; margin-top:20px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.4); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:#e0f4ff; }
  .weather-card { background:linear-gradient(135deg,#87ceeb,#4fc3f7); border-radius:20px; padding:40px; text-align:center; color:white; min-width:360px; }
  .weather-icon { font-size:80px; margin-bottom:8px; }
  .temperature { font-size:64px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.2); }
  .city { font-size:20px; font-weight:600; margin:8px 0 4px; }
  .weather-desc { font-size:14px; opacity:0.85; margin-bottom:20px; }
  .info-row { display:flex; justify-content:center; gap:24px; margin-top:16px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.4); }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .info-item .icon { font-size:20px; }
  .info-item .value { font-size:14px; font-weight:600; }
  .info-item .label { font-size:11px; opacity:0.75; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasFlex = /info-row[^}]*display\s*:\s*flex/i.test(code);
            const hasRow = code.includes('info-row');
            return (hasFlex && hasRow) ? { success: true, message: "날씨 정보 행 완성!" } : { success: false, message: ".info-row에 display:flex를 확인하세요." };
        }
    },
    {
        id: 5, title: "CSS 변수 적용",
        description: `<span class="mission-badge">Step 5 / 10</span>
<h3>🎨 미션: CSS 변수로 테마 색상 관리</h3>
<ul>
  <li><code>:root</code>에 변수 정의: <code>--sky-top</code>, <code>--sky-bottom</code></li>
  <li>그라데이션에 <code>var(--sky-top)</code>으로 변수 사용</li>
  <li><code>--text-color</code>, <code>--card-radius</code> 등도 추가</li>
</ul>`,
        hint: ":root { --sky-top: #87ceeb; --sky-bottom: #4fc3f7; --card-radius: 20px; } .weather-card { background: linear-gradient(135deg, var(--sky-top), var(--sky-bottom)); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --sky-top:#5bb8f5; --sky-bottom:#2196f3; --card-radius:24px; --text-white:rgba(255,255,255,0.9); }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#c9e8fb,#e8f4fd); }
  .weather-card { background:linear-gradient(135deg,var(--sky-top),var(--sky-bottom)); border-radius:var(--card-radius); padding:40px; text-align:center; color:var(--text-white); min-width:360px; box-shadow:0 20px 60px rgba(33,150,243,0.3); }
  .weather-icon { font-size:80px; margin-bottom:8px; }
  .temperature { font-size:64px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.2); }
  .city { font-size:20px; font-weight:600; margin:8px 0 4px; }
  .weather-desc { font-size:14px; opacity:0.85; margin-bottom:16px; }
  .info-row { display:flex; justify-content:center; gap:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.35); }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .info-item .icon { font-size:20px; }
  .info-item .value { font-size:14px; font-weight:600; }
  .info-item .label { font-size:11px; opacity:0.7; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasRoot = /:root/i.test(code);
            const hasVar = /var\(--/i.test(code);
            return (hasRoot && hasVar) ? { success: true, message: "CSS 변수 적용 완성!" } : { success: false, message: ":root에 변수를 정의하고 var()로 사용하세요." };
        }
    },
    {
        id: 6, title: "keyframes 애니메이션",
        description: `<span class="mission-badge">Step 6 / 10</span>
<h3>✨ 미션: 날씨 아이콘 애니메이션</h3>
<ul>
  <li><code>@keyframes float</code> 정의 — 위아래로 떠다니는 효과</li>
  <li><code>.weather-icon</code>에 <code>animation: float 3s ease-in-out infinite</code></li>
  <li><code>@keyframes pulse</code>로 온도 숫자 미세 맥박 효과도 추가</li>
</ul>`,
        hint: "@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} } .weather-icon { animation: float 3s ease-in-out infinite; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --sky-top:#5bb8f5; --sky-bottom:#2196f3; --card-radius:24px; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#c9e8fb,#e8f4fd); }
  .weather-card { background:linear-gradient(135deg,var(--sky-top),var(--sky-bottom)); border-radius:var(--card-radius); padding:40px; text-align:center; color:white; min-width:360px; box-shadow:0 20px 60px rgba(33,150,243,0.3); }
  .weather-icon { font-size:80px; margin-bottom:8px; animation:float 3s ease-in-out infinite; display:inline-block; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .temperature { font-size:64px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.2); animation:pulse 4s ease-in-out infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.85} }
  .city { font-size:20px; font-weight:600; margin:8px 0 4px; }
  .weather-desc { font-size:14px; opacity:0.85; margin-bottom:16px; }
  .info-row { display:flex; justify-content:center; gap:24px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.35); }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .info-item .icon { font-size:20px; }
  .info-item .value { font-size:14px; font-weight:600; }
  .info-item .label { font-size:11px; opacity:0.7; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasKf = /@keyframes/i.test(code);
            const hasAnim = /animation\s*:/i.test(code);
            return (hasKf && hasAnim) ? { success: true, message: "애니메이션 완성!" } : { success: false, message: "@keyframes와 animation 속성을 확인하세요." };
        }
    },
    {
        id: 7, title: "5일 예보 리스트",
        description: `<span class="mission-badge">Step 7 / 10</span>
<h3>📅 미션: 5일 예보 추가</h3>
<ul>
  <li><code>.forecast</code> div에 5개의 <code>.day</code> 항목</li>
  <li>각 .day: 요일 + 날씨 아이콘 + 최고/최저 기온</li>
  <li><code>display: flex</code>로 가로 배치</li>
  <li>구분선으로 카드와 분리</li>
</ul>`,
        hint: ".forecast { display:flex; justify-content:space-around; margin-top:20px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.35); } .day { text-align:center; font-size:12px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --sky-top:#5bb8f5; --sky-bottom:#2196f3; --card-radius:24px; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#c9e8fb,#e8f4fd); }
  .weather-card { background:linear-gradient(135deg,var(--sky-top),var(--sky-bottom)); border-radius:var(--card-radius); padding:32px; text-align:center; color:white; min-width:380px; box-shadow:0 20px 60px rgba(33,150,243,0.3); }
  .weather-icon { font-size:72px; margin-bottom:6px; animation:float 3s ease-in-out infinite; display:inline-block; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  .temperature { font-size:60px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.2); }
  .city { font-size:18px; font-weight:600; margin:6px 0 4px; }
  .weather-desc { font-size:13px; opacity:0.85; margin-bottom:14px; }
  .info-row { display:flex; justify-content:center; gap:20px; padding:14px 0; border-top:1px solid rgba(255,255,255,0.3); border-bottom:1px solid rgba(255,255,255,0.3); margin-bottom:14px; }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:3px; }
  .info-item .icon { font-size:18px; } .info-item .value { font-size:13px; font-weight:600; } .info-item .label { font-size:10px; opacity:0.7; }
  .forecast { display:flex; justify-content:space-around; }
  .day { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .day .dow { font-size:11px; opacity:0.8; }
  .day .d-icon { font-size:22px; }
  .day .high { font-size:13px; font-weight:700; }
  .day .low { font-size:11px; opacity:0.65; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
        <div class="forecast">
            <div class="day"><span class="dow">월</span><span class="d-icon">☀️</span><span class="high">26°</span><span class="low">14°</span></div>
            <div class="day"><span class="dow">화</span><span class="d-icon">🌤</span><span class="high">23°</span><span class="low">13°</span></div>
            <div class="day"><span class="dow">수</span><span class="d-icon">🌧</span><span class="high">18°</span><span class="low">10°</span></div>
            <div class="day"><span class="dow">목</span><span class="d-icon">⛅</span><span class="high">21°</span><span class="low">12°</span></div>
            <div class="day"><span class="dow">금</span><span class="d-icon">☀️</span><span class="high">25°</span><span class="low">15°</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasForecast = code.includes('forecast');
            const dayCount = (code.match(/class="day"/g) || []).length;
            return (hasForecast && dayCount >= 5) ? { success: true, message: "5일 예보 완성!" } : { success: false, message: ".forecast 안에 .day를 5개 이상 만드세요." };
        }
    },
    {
        id: 8, title: "Glassmorphism 효과",
        description: `<span class="mission-badge">Step 8 / 10</span>
<h3>🔮 미션: 유리 효과(Glassmorphism) 적용</h3>
<ul>
  <li><code>backdrop-filter: blur(10px)</code> 적용</li>
  <li>배경에 <code>rgba</code>로 반투명 처리</li>
  <li><code>border: 1px solid rgba(255,255,255,0.3)</code></li>
  <li>body 배경을 풍경 그라데이션으로 변경</li>
</ul>`,
        hint: ".weather-card { background: rgba(255,255,255,0.2); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.35); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --card-radius:24px; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(160deg,#1a6fa8 0%,#3ab5e6 40%,#74d0f5 70%,#b8e9ff 100%); }
  .weather-card { background:rgba(255,255,255,0.18); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.35); border-radius:var(--card-radius); padding:32px; text-align:center; color:white; min-width:380px; box-shadow:0 20px 60px rgba(0,0,0,0.15); }
  .weather-icon { font-size:72px; margin-bottom:6px; animation:float 3s ease-in-out infinite; display:inline-block; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  .temperature { font-size:60px; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.15); }
  .city { font-size:18px; font-weight:600; margin:6px 0 4px; }
  .weather-desc { font-size:13px; opacity:0.85; margin-bottom:14px; }
  .info-row { display:flex; justify-content:center; gap:20px; padding:14px 0; border-top:1px solid rgba(255,255,255,0.3); border-bottom:1px solid rgba(255,255,255,0.3); margin-bottom:14px; }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:3px; }
  .info-item .icon { font-size:18px; } .info-item .value { font-size:13px; font-weight:600; } .info-item .label { font-size:10px; opacity:0.7; }
  .forecast { display:flex; justify-content:space-around; }
  .day { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .day .dow { font-size:11px; opacity:0.8; } .day .d-icon { font-size:22px; } .day .high { font-size:13px; font-weight:700; } .day .low { font-size:11px; opacity:0.65; }
</style></head>
<body>
    <div class="weather-card">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
        <div class="forecast">
            <div class="day"><span class="dow">월</span><span class="d-icon">☀️</span><span class="high">26°</span><span class="low">14°</span></div>
            <div class="day"><span class="dow">화</span><span class="d-icon">🌤</span><span class="high">23°</span><span class="low">13°</span></div>
            <div class="day"><span class="dow">수</span><span class="d-icon">🌧</span><span class="high">18°</span><span class="low">10°</span></div>
            <div class="day"><span class="dow">목</span><span class="d-icon">⛅</span><span class="high">21°</span><span class="low">12°</span></div>
            <div class="day"><span class="dow">금</span><span class="d-icon">☀️</span><span class="high">25°</span><span class="low">15°</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasBlur = /backdrop-filter/i.test(code);
            const hasRgba = /rgba/i.test(code);
            return (hasBlur && hasRgba) ? { success: true, message: "Glassmorphism 완성!" } : { success: false, message: "backdrop-filter:blur()와 rgba 배경을 확인하세요." };
        }
    },
    {
        id: 9, title: "도시 검색 UI",
        description: `<span class="mission-badge">Step 9 / 10</span>
<h3>🔍 미션: 도시 검색 입력창 UI</h3>
<ul>
  <li>카드 상단에 <code>input[type=text]</code> 추가</li>
  <li>입력창에 <code>border-radius</code>, <code>padding</code>, 반투명 스타일</li>
  <li><code>outline:none</code>, <code>border</code> 커스텀</li>
  <li>입력창 width 100%, placeholder 텍스트 추가</li>
</ul>`,
        hint: ".search-input { width:100%; padding:10px 16px; border-radius:30px; border:1px solid rgba(255,255,255,0.5); background:rgba(255,255,255,0.25); color:white; outline:none; font-size:14px; margin-bottom:20px; }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --card-radius:24px; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(160deg,#1a6fa8,#3ab5e6,#74d0f5); }
  .weather-card { background:rgba(255,255,255,0.18); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.35); border-radius:var(--card-radius); padding:28px; text-align:center; color:white; min-width:380px; box-shadow:0 20px 60px rgba(0,0,0,0.15); }
  .search-input { width:100%; padding:10px 18px; border-radius:30px; border:1px solid rgba(255,255,255,0.5); background:rgba(255,255,255,0.2); color:white; outline:none; font-size:14px; margin-bottom:18px; font-family:inherit; }
  .search-input::placeholder { color:rgba(255,255,255,0.7); }
  .weather-icon { font-size:72px; animation:float 3s ease-in-out infinite; display:inline-block; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  .temperature { font-size:60px; font-weight:700; }
  .city { font-size:18px; font-weight:600; margin:6px 0 4px; }
  .weather-desc { font-size:13px; opacity:0.85; margin-bottom:14px; }
  .info-row { display:flex; justify-content:center; gap:20px; padding:12px 0; border-top:1px solid rgba(255,255,255,0.3); border-bottom:1px solid rgba(255,255,255,0.3); margin-bottom:14px; }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:3px; }
  .info-item .icon { font-size:16px; } .info-item .value { font-size:12px; font-weight:600; } .info-item .label { font-size:10px; opacity:0.7; }
  .forecast { display:flex; justify-content:space-around; }
  .day { display:flex; flex-direction:column; align-items:center; gap:3px; font-size:12px; }
  .day .d-icon { font-size:20px; }
</style></head>
<body>
    <div class="weather-card">
        <input type="text" class="search-input" placeholder="🔍 도시명을 입력하세요">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
        <div class="forecast">
            <div class="day"><span>월</span><span class="d-icon">☀️</span><span>26°/14°</span></div>
            <div class="day"><span>화</span><span class="d-icon">🌤</span><span>23°/13°</span></div>
            <div class="day"><span>수</span><span class="d-icon">🌧</span><span>18°/10°</span></div>
            <div class="day"><span>목</span><span class="d-icon">⛅</span><span>21°/12°</span></div>
            <div class="day"><span>금</span><span class="d-icon">☀️</span><span>25°/15°</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasInput = code.includes('<input') && /search/i.test(code);
            const hasRadius = /search[^}]*border-radius/i.test(code);
            return (hasInput && hasRadius) ? { success: true, message: "검색창 UI 완성!" } : { success: false, message: "검색 input에 border-radius 스타일을 확인하세요." };
        }
    },
    {
        id: 10, title: "마무리 & 야간 모드",
        description: `<span class="mission-badge">Step 10 / 10 — 마지막!</span>
<h3>🌙 최종 미션: 야간 모드 스타일 추가</h3>
<ul>
  <li><code>.night</code> 클래스를 weather-card에 추가</li>
  <li><code>.night</code>일 때 배경 그라데이션을 어두운 밤하늘로 변경</li>
  <li><code>--sky-top: #0d1b4b; --sky-bottom: #1a2e70</code></li>
  <li>날씨 아이콘을 🌙으로 변경, 도시에 "밤의 서울" 표시</li>
</ul>`,
        hint: ".night { --sky-top:#0d1b4b; --sky-bottom:#1a2e70; background:linear-gradient(135deg,var(--sky-top),var(--sky-bottom)); }",
        startCode: "",
        solutionCode: `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><title>날씨 앱</title>
<style>
  :root { --sky-top:#1a6fa8; --sky-bottom:#3ab5e6; --card-radius:24px; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { min-height:100vh; display:flex; align-items:center; justify-content:center; gap:40px; background:linear-gradient(160deg,#0d1b4b,#1a2e70,#2d4f9e); flex-wrap:wrap; padding:40px; }
  .weather-card { background:rgba(255,255,255,0.18); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.35); border-radius:var(--card-radius); padding:28px; text-align:center; color:white; min-width:320px; box-shadow:0 20px 60px rgba(0,0,0,0.3); }
  .weather-card.day { background:rgba(135,206,235,0.25); border-color:rgba(255,255,255,0.4); }
  .weather-card.night { background:rgba(13,27,75,0.5); border-color:rgba(100,120,200,0.4); }
  .search-input { width:100%; padding:9px 16px; border-radius:30px; border:1px solid rgba(255,255,255,0.4); background:rgba(255,255,255,0.15); color:white; outline:none; font-size:13px; margin-bottom:16px; font-family:inherit; }
  .search-input::placeholder { color:rgba(255,255,255,0.6); }
  .weather-icon { font-size:68px; animation:float 3s ease-in-out infinite; display:inline-block; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  .temperature { font-size:56px; font-weight:700; }
  .city { font-size:17px; font-weight:600; margin:6px 0 3px; }
  .weather-desc { font-size:13px; opacity:0.8; margin-bottom:12px; }
  .info-row { display:flex; justify-content:center; gap:18px; padding:12px 0; border-top:1px solid rgba(255,255,255,0.25); border-bottom:1px solid rgba(255,255,255,0.25); margin-bottom:12px; }
  .info-item { display:flex; flex-direction:column; align-items:center; gap:3px; }
  .info-item .icon { font-size:16px; } .info-item .value { font-size:12px; font-weight:600; } .info-item .label { font-size:10px; opacity:0.7; }
  .forecast { display:flex; justify-content:space-around; }
  .day-item { display:flex; flex-direction:column; align-items:center; gap:3px; font-size:11px; }
  .day-item .d-icon { font-size:18px; }
  .card-label { font-size:10px; opacity:0.6; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px; }
</style></head>
<body>
    <div class="weather-card day">
        <div class="card-label">☀ 낮 모드</div>
        <input type="text" class="search-input" placeholder="🔍 도시명">
        <div class="weather-icon">☀️</div>
        <div class="temperature">24°C</div>
        <p class="city">서울</p>
        <p class="weather-desc">맑음</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">45%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">3 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">22°C</span><span class="label">체감</span></div>
        </div>
        <div class="forecast">
            <div class="day-item"><span>월</span><span class="d-icon">☀️</span><span>26°</span></div>
            <div class="day-item"><span>화</span><span class="d-icon">🌤</span><span>23°</span></div>
            <div class="day-item"><span>수</span><span class="d-icon">🌧</span><span>18°</span></div>
            <div class="day-item"><span>목</span><span class="d-icon">⛅</span><span>21°</span></div>
            <div class="day-item"><span>금</span><span class="d-icon">☀️</span><span>25°</span></div>
        </div>
    </div>
    <div class="weather-card night">
        <div class="card-label">🌙 야간 모드</div>
        <input type="text" class="search-input" placeholder="🔍 도시명">
        <div class="weather-icon">🌙</div>
        <div class="temperature">17°C</div>
        <p class="city">밤의 서울</p>
        <p class="weather-desc">구름 조금</p>
        <div class="info-row">
            <div class="info-item"><span class="icon">💧</span><span class="value">62%</span><span class="label">습도</span></div>
            <div class="info-item"><span class="icon">💨</span><span class="value">2 m/s</span><span class="label">바람</span></div>
            <div class="info-item"><span class="icon">🌡</span><span class="value">15°C</span><span class="label">체감</span></div>
        </div>
        <div class="forecast">
            <div class="day-item"><span>월</span><span class="d-icon">🌙</span><span>14°</span></div>
            <div class="day-item"><span>화</span><span class="d-icon">⭐</span><span>13°</span></div>
            <div class="day-item"><span>수</span><span class="d-icon">🌧</span><span>10°</span></div>
            <div class="day-item"><span>목</span><span class="d-icon">🌙</span><span>12°</span></div>
            <div class="day-item"><span>금</span><span class="d-icon">⭐</span><span>15°</span></div>
        </div>
    </div>
</body></html>`,
        validation(code) {
            const hasNight = code.includes('night');
            const hasDarkBg = /night[^}]*background/i.test(code);
            return (hasNight && hasDarkBg) ? { success: true, message: "🎉 날씨 앱 완성! 낮/밤 모드까지!" } : { success: false, message: ".night 클래스와 어두운 배경 스타일을 확인하세요." };
        }
    }
];

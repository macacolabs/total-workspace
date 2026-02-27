// =============================================
// Total Workspace — app.js
// URL 파라미터로 코스 선택, 스텝별 미션 진행
// =============================================

// URL ?course=xxx 파라미터 읽기
const params = new URLSearchParams(location.search);
const courseKey = params.get('course') || 'portfolio';

// 코스 메타 정보
const courseMeta = {
    portfolio: { title: '포트폴리오 페이지 완성하기', badge: '🏆 실전 프로젝트', completeTitle: '포트폴리오 완성!', completeMsg: '10단계 모든 미션을 클리어했습니다. 수고하셨습니다!' },
    shop: { title: '쇼핑몰 상품 페이지 만들기', badge: '🛒 쇼핑몰 UI', completeTitle: '쇼핑몰 UI 완성!', completeMsg: '10단계 모든 미션을 클리어했습니다. 수고하셨습니다!' },
    weather: { title: '날씨 앱 UI 만들기', badge: '🌤️ 날씨 앱', completeTitle: '날씨 앱 완성!', completeMsg: '10단계 모든 미션을 클리어했습니다. 수고하셨습니다!' },
    blog: { title: '블로그 레이아웃 만들기', badge: '📝 블로그', completeTitle: '블로그 완성!', completeMsg: '10단계 모든 미션을 클리어했습니다. 수고하셨습니다!' },
};

const meta = courseMeta[courseKey] || courseMeta.portfolio;
const missions = (allCourses && allCourses[courseKey]) || allCourses.portfolio;

let editor;
let currentStep = 0;
const completedSteps = new Set();
const savedCodes = {};

// ===== 미리보기 업데이트 =====
function updatePreview() {
    const frame = document.getElementById('previewFrame');
    const doc = frame.contentDocument || frame.contentWindow.document;
    doc.open();
    doc.write(editor.getValue());
    doc.close();
}

// ===== 진행 바 업데이트 =====
function updateProgress() {
    const total = missions.length;
    const done = completedSteps.size;
    const pct = Math.round((done / total) * 100);
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('stepLabel').textContent = `Step ${currentStep + 1} / ${total}`;
}

// ===== 스텝 목록(사이드바) 렌더링 =====
function renderStepList() {
    const ul = document.getElementById('stepList');
    ul.innerHTML = '';
    missions.forEach((m, idx) => {
        const li = document.createElement('li');
        const isDone = completedSteps.has(idx);
        const isActive = idx === currentStep;
        if (isDone) li.classList.add('done');
        if (isActive) li.classList.add('active');

        li.innerHTML = `
      <span class="step-num">${isDone ? '✓' : (idx + 1)}</span>
      <span>${m.title}</span>
    `;
        li.addEventListener('click', () => loadStep(idx));
        ul.appendChild(li);
    });
}

// ===== 스텝 로드 =====
function loadStep(idx) {
    currentStep = idx;
    const m = missions[idx];

    document.getElementById('missionTitle').textContent = `Step ${idx + 1}. ${m.title}`;
    document.getElementById('missionContent').innerHTML = m.description;

    let code = '';
    if (savedCodes[idx] !== undefined) {
        code = savedCodes[idx];
    } else if (idx === 0) {
        code = m.startCode;
    } else {
        code = savedCodes[idx - 1] || missions[idx - 1].solutionCode;
    }
    editor.setValue(code);

    document.getElementById('hintBox').style.display = 'none';
    renderStepList();
    updateProgress();
    updatePreview();
}

// ===== DOM 준비 후 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    // 코스 메타 적용
    if (document.getElementById('courseBadge'))
        document.getElementById('courseBadge').textContent = meta.badge;
    if (document.getElementById('courseTitle'))
        document.getElementById('courseTitle').textContent = meta.title;
    document.title = `🏆 ${meta.title} — Total Workspace`;

    // CodeMirror 초기화
    editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 2,
        indentWithTabs: false,
        autoCloseTags: true,
    });
    editor.on('change', updatePreview);

    // ===== 사이드바 토글 =====
    const sidebar = document.getElementById('sidebar');
    document.getElementById('menuToggleBtn').addEventListener('click', () => sidebar.classList.toggle('closed'));
    document.getElementById('menuCloseBtn').addEventListener('click', () => sidebar.classList.add('closed'));

    // ===== 힌트 버튼 =====
    document.getElementById('hintBtn').addEventListener('click', () => {
        const hintBox = document.getElementById('hintBox');
        if (hintBox.style.display === 'none') {
            hintBox.innerHTML = '💡 ' + missions[currentStep].hint;
            hintBox.style.display = 'block';
        } else {
            hintBox.style.display = 'none';
        }
    });

    // ===== 목표 미리보기 =====
    const goalModal = document.getElementById('goalModal');
    const goalFrame = document.getElementById('goalFrame');

    document.getElementById('goalPreviewBtn').addEventListener('click', () => {
        const goalDoc = goalFrame.contentDocument || goalFrame.contentWindow.document;
        goalDoc.open();
        goalDoc.write(missions[currentStep].solutionCode);
        goalDoc.close();
        goalModal.style.display = 'flex';
    });

    document.getElementById('closeModal').addEventListener('click', () => {
        goalModal.style.display = 'none';
    });
    goalModal.addEventListener('click', (e) => {
        if (e.target === goalModal) goalModal.style.display = 'none';
    });

    // ===== 정답 보기 =====
    document.getElementById('showAnswerBtn').addEventListener('click', () => {
        if (confirm('정답 코드를 에디터에 불러오시겠습니까? 작성 중인 코드는 사라집니다.')) {
            editor.setValue(missions[currentStep].solutionCode);
        }
    });

    // ===== 완료 확인 =====
    document.getElementById('checkBtn').addEventListener('click', () => {
        const m = missions[currentStep];
        const code = editor.getValue();
        const result = m.validation(code);

        if (result.success) {
            savedCodes[currentStep] = code;
            completedSteps.add(currentStep);
            renderStepList();
            updateProgress();

            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

            const isLast = currentStep === missions.length - 1;
            if (isLast) {
                setTimeout(() => showCompleteScreen(code), 600);
            } else {
                setTimeout(() => {
                    alert(`🎉 ${result.message}\n\n다음 단계로 넘어갑니다!`);
                    loadStep(currentStep + 1);
                }, 400);
            }
        } else {
            alert('❌ 아직 조건을 충족하지 못했습니다.\n\n' + result.message);
        }
    });

    // ===== 복사 버튼 =====
    document.getElementById('copyBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(editor.getValue())
            .then(() => alert('코드가 복사되었습니다!'))
            .catch(() => alert('복사에 실패했습니다.'));
    });

    // ===== 새로고침 =====
    document.getElementById('refreshBtn').addEventListener('click', updatePreview);

    // ===== 처음부터 =====
    document.getElementById('restartBtn').addEventListener('click', () => {
        if (confirm('처음부터 다시 시작하시겠습니까? 모든 진행이 초기화됩니다.')) {
            completedSteps.clear();
            Object.keys(savedCodes).forEach(k => delete savedCodes[k]);
            document.getElementById('completeScreen').style.display = 'none';
            loadStep(0);
        }
    });

    // 초기 스텝 로드
    renderStepList();
    loadStep(0);
});

// ===== 완료 화면 =====
function showCompleteScreen(finalCode) {
    // 완료 텍스트 동적 업데이트
    const titleEl = document.getElementById('completeTitle');
    const msgEl = document.getElementById('completeMsg');
    if (titleEl) titleEl.textContent = meta.completeTitle;
    if (msgEl) msgEl.textContent = meta.completeMsg;

    const screen = document.getElementById('completeScreen');
    screen.style.display = 'flex';
    const frame = document.getElementById('completeFrame');
    const doc = frame.contentDocument || frame.contentWindow.document;
    doc.open();
    doc.write(finalCode);
    doc.close();

    let count = 0;
    const timer = setInterval(() => {
        confetti({ particleCount: 80, spread: 100, origin: { x: Math.random(), y: 0.3 } });
        count++;
        if (count >= 4) clearInterval(timer);
    }, 600);
}

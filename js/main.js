// 페이지 전환 함수
function showPage(pageId) {
    // 현재 활성화된 페이지 찾기
    const currentPage = document.querySelector('.page.active');
    
    // 새로 보여줄 페이지
    const newPage = document.getElementById(pageId);
    
    // 현재 페이지가 있다면 active 클래스 제거
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    // 새 페이지에 active 클래스 추가
    if (newPage) {
        newPage.classList.add('active');
        // 페이지 상단으로 스크롤
        window.scrollTo(0, 0);
    }

    // 네비게이션 메뉴 아이템 상태 업데이트
    updateNavigation(pageId);
}

// 네비게이션 상태 업데이트
function updateNavigation(pageId) {
    // 모든 네비게이션 아이템에서 active 클래스 제거
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 현재 페이지에 해당하는 네비게이션 아이템에 active 클래스 추가
    const activeNav = document.querySelector(`.nav-item[onclick*="${pageId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 기본 페이지 표시
    showPage('main');
});

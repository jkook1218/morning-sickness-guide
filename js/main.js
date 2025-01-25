// 페이지 전환 관리
function showPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const newPage = document.getElementById(pageId);
    
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    if (newPage) {
        newPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 네비게이션 상태 업데이트
    updateNavigation(pageId);
}

// 네비게이션 상태 업데이트
function updateNavigation(pageId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNav = document.querySelector(`.nav-item[onclick*="${pageId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
}

// 카드 확장 기능
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    const content = card.querySelector('.card-content');
    const icon = card.querySelector('.toggle-icon');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        content.classList.add('expanded');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 기본 페이지 표시
    showPage('main');
    
    // 모든 확장 가능한 카드 초기화
    document.querySelectorAll('.expandable-card').forEach(card => {
        const content = card.querySelector('.card-content');
        if (content) {
            content.style.maxHeight = '0px';
        }
    });

    // 스크롤 시 헤더 그림자 효과
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});

// 뒤로가기 지원
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    }
});

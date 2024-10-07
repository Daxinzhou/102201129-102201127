document.addEventListener('DOMContentLoaded', function() {
    const projectsTab = document.getElementById('projects-tab');
    const chatTab = document.getElementById('chat-tab');
    const personalTab = document.getElementById('personal-tab');
    const projectsPage = document.getElementById('projects-page');
    const chatPage = document.getElementById('chat-page');
    const personalPage = document.getElementById('personal-page');
    const chatFrame = document.getElementById('chat-frame');
    const startProjectBtn = document.getElementById('start-project-btn');

    projectsTab.addEventListener('click', function() {
        showPage(projectsPage);
    });

    chatTab.addEventListener('click', function() {
        showPage(chatPage);
        // Ensure the chat page is loaded when accessing the chat tab
        chatFrame.src = "chat.html";
    });

    personalTab.addEventListener('click', function() {
        showPage(personalPage);
    });

    startProjectBtn.addEventListener('click', function() {
        // 跳转到发起项目的页面
        window.location.href = 'start-project.html';
    });

    function showPage(page) {
        const pages = [projectsPage, chatPage, personalPage];
        pages.forEach(function(p) {
            p.classList.remove('active');
        });
        page.classList.add('active');
        document.querySelectorAll('.tab-button').forEach(function(btn) {
            btn.classList.remove('active');
        });
        const activeTab = document.querySelector('.tab-button#' + page.id + '-tab');
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    // Set the default active page
    showPage(projectsPage); // Assuming the default active page is the projects page
});
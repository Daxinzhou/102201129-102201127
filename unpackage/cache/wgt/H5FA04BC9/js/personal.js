document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item a');
    const contentSections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            menuItems.forEach(node => node.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 默认显示第一个部分
    showSection(menuItems[0].getAttribute('href').substring(1));
    menuItems[0].classList.add('active');
});
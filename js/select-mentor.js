document.addEventListener('DOMContentLoaded', function() {
    const backToProjectBtn = document.getElementById('back-to-project-btn');

    backToProjectBtn.addEventListener('click', function() {
        // 返回到发起项目的页面
        window.location.href = 'start-project.html';
    });

    // 为每个导师项添加点击事件，假设选择后返回项目并带有选择的导师信息
    document.querySelectorAll('.mentor-item').forEach(function(mentor) {
        mentor.addEventListener('click', function() {
            const mentorName = this.textContent.split(' - ')[0]; // 假设文本格式为 "导师名 - 专业领域"
            // 可以将选择的导师信息保存到localStorage或通过URL传递
            localStorage.setItem('selectedMentor', mentorName);
            window.location.href = 'start-project.html';
        });
    });
});
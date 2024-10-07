document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('back-btn');
    const inviteMentorBtn = document.getElementById('invite-mentor-btn');
    const submitProjectBtn = document.getElementById('submit-project');
    const selectedMentorDisplay = document.getElementById('selected-mentor');

    // 在发起项目页面显示已选择的导师
    const selectedMentor = localStorage.getItem('selectedMentor');
    if (selectedMentor) {
        selectedMentorDisplay.textContent = `已选择的导师: ${selectedMentor}`;
    } else {
        selectedMentorDisplay.textContent = '尚未选择导师';
    }

    backBtn.addEventListener('click', function() {
        // 返回主界面
        window.location.href = 'main.html';
    });

    inviteMentorBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // 跳转到选择导师的页面
        window.location.href = 'select-mentor.html';
    });

    submitProjectBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // 获取表单数据
        const projectName = document.getElementById('project-name').value;
        const projectType = document.getElementById('project-type').value;
        const projectInitiator = document.getElementById('project-initiator').value;
        const initiatorMajor = document.getElementById('initiator-major').value;
        const projectDescription = document.getElementById('project-description').value;
        const requiredProfessional = document.getElementById('required-professional').value;
        const projectAdvantage = document.getElementById('project-advantage').value;

        // 发送数据到服务器
        console.log('提交的项目信息:', {
            projectName,
            projectType,
            projectInitiator,
            initiatorMajor,
            projectDescription,
            requiredProfessional,
            projectAdvantage
        });

        // 显示提交成功信息并返回主界面
        alert('提交成功！');
        window.location.href = 'main.html';
    });
});
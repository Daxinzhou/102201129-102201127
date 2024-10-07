document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-btn');
    const saveBtn = document.getElementById('save-btn');
    const editForm = document.getElementById('edit-form');

    backButton.addEventListener('click', function() {
        // 返回个人界面
        window.location.href = 'personal.html';
    });

    saveBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // 这里可以添加表单提交逻辑
        alert('保存成功！');
        window.location.href = 'personal.html';
    });
});
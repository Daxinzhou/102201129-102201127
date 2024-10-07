document.addEventListener('DOMContentLoaded', function() {
    const teacherBtn = document.getElementById('teacher-btn');
    const studentBtn = document.getElementById('student-btn');
    const identitySelector = document.querySelector('.identity-selector');
    const loginForm = document.getElementById('login-form');
    const identityNumberInput = document.getElementById('identity-number');
    const emailInput = document.getElementById('email');
    const fieldInput = document.getElementById('field');
    const loginBtn = document.getElementById('login-btn');

    if (teacherBtn && studentBtn && loginForm && identityNumberInput && emailInput && fieldInput && loginBtn) {
        teacherBtn.addEventListener('click', function() {
            identitySelector.style.display = 'none';
            loginForm.style.display = 'flex';
            identityNumberInput.placeholder = '请输入工号';
            fieldInput.placeholder = '请输入方向';
        });

        studentBtn.addEventListener('click', function() {
            identitySelector.style.display = 'none';
            loginForm.style.display = 'flex';
            identityNumberInput.placeholder = '请输入学号';
            fieldInput.placeholder = '请输入专业';
        });

        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止表单默认提交行为
            const identityNumber = identityNumberInput.value;
            const email = emailInput.value;
            const field = fieldInput.value;

            console.log('登录信息:', { identityNumber, email, field });
            // 假设登录成功，跳转到主界面
            window.location.href = 'main.html'; // 取消注释后，替换为你的主界面文件路径
        });
    } else {
        console.error('Some DOM elements are not loaded');
    }
});
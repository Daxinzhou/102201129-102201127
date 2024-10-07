document.addEventListener('DOMContentLoaded', function() {
    const userItems = document.querySelectorAll('.user-item');

    userItems.forEach(function(userItem) {
        userItem.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            // 跳转到与该用户的专属聊天界面
            window.location.href = `chat-room.html?username=${username}`;
        });
    });
});
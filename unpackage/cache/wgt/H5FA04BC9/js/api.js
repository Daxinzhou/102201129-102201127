// c2/js/api.js
// 登录
export const login = (username, password) => {
    return fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
};

// 获取当前用户信息
export const getUserInfo = () => {
    const token = localStorage.getItem('userToken');
    return fetch('http://localhost:3000/api/user', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
};

// 更新用户信息
export const updateUserInfo = (userData) => {
    const token = localStorage.getItem('userToken');
    return fetch('http://localhost:3000/api/user/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });
};
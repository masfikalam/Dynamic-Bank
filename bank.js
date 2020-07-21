const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('main');
    loginArea.style.display = 'none';
    document.getElementById('transaction').style.display = "block";
})
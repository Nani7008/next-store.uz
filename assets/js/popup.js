

const iconUser = document.getElementById('icon-user');
const login = document.getElementById('login');
const close = document.getElementById('close')











iconUser.addEventListener('click', function() { 
login.classList.add('active-login');    
 } );
 close.addEventListener('click' , function () {
    login.classList.remove('active-login');
 })

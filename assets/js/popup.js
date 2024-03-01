// var toggleButton = document.getElementById("toggle");
// var iconUser = document.getElementById("icon-user");
// var myLogin = document.getElementById("login");



// toggleButton.addEventListener('click', function () {

//     login.classList.toggle('hide-login');
//     if (!myLogin.classList.contains('hide-login')) {
//         iconUser.innerHTML = `<i class="bx bx-user"></i>`
//     } else {
//         iconUser.innerHTML = `<i class="bx bx-user"></i>`
//     }
// });

const iconUser = document.getElementById('icon-user');
const login = document.getElementById('login');
iconUser.addEventListener('click', function() { 
login.classList.add('active-login');    
 } );

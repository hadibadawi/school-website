// Bootstrap + CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@popperjs/core'
import '@fortawesome/fontawesome-free/js/all.js';
// Sass
import'../scss/main.scss';
import '../scss/main2.scss';

// jQuery
import $ from 'jquery';


import '@fortawesome/fontawesome-free/css/all.min.css';

$(document).ready(function () {
  console.log('jQuery شغّال ✅');
});


function showLogin(e) {
  e.preventDefault();
  document
    .getElementById("register-section")
    .classList.add("hidden");

  document
    .getElementById("login-section")
    .classList.remove("hidden");
}

function showRegister(e) {
  e.preventDefault();
  document
    .getElementById("login-section")
    .classList.add("hidden");

  document
    .getElementById("register-section")
    .classList.remove("hidden");
}

window.showLogin = showLogin;
window.showRegister = showRegister;

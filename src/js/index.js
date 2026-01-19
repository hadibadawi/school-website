import * as bootstrap from 'bootstrap'; 
window.bootstrap = bootstrap;

import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
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

$(document).ready(function () {
    
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNavDropdown',
        offset: 110 // زيادة الـ Offset لضمان التفعيل عند وصول القسم للأعلى تماماً
    });

    // 2. تحديث الحالة فوراً عند النقر على الرابط
    $('.navbar-nav .nav-link').on('click', function() {
        // إزالة الكلاس من الجميع وإضافته للعنصر المضغوط
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');

        // إغلاق قائمة الموبايل تلقائياً بعد النقر (اختياري)
        $('.navbar-collapse').collapse('hide');
    });

    // 3. كود إضافي: إصلاح مشكلة عدم تحديث الحالة في بعض الأحيان عند الـ Scroll اليدوي السريع
    $(window).on('activate.bs.scrollspy', function () {
        console.log('تم تغيير القسم النشط!');
    });
});
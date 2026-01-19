import * as bootstrap from 'bootstrap'; 
window.bootstrap = bootstrap; // جعل المتغير متاحاً لـ jQuery والـ Plugins

// استيراد التنسيقات والمكتبات 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '../scss/main2.scss';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';

$(document).ready(function () {
  console.log('jQuery شغّال ✅');
});
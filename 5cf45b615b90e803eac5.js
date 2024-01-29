window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';


document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))



var buttons = document.querySelectorAll('.add-to-cart-btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('أضيف المنتج الى عربة الشراء');
    });
});
document.querySelectorAll('.size-option input[type="radio"]').forEach(item=>{
    item.addEventListener('change', ()=>{
        document.querySelectorAll('.size-option').forEach(i=>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});
document.querySelectorAll('.size-option input[type="radio"]').forEach(item=>{
    item.addEventListener('change', ()=>{
        document.querySelectorAll('.size-option').forEach(i=>{
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();


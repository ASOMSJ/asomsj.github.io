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
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});

//حساب سعر اجمالي المنتج
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$";

        calculateTotalPrice()


    })
})

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()

        calculateTotalPrice()

    })
})

function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value;
        const totalPriceForProduct = pricePerUnite * quantity;
        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
}

const citiesByCountry={
        sa:['الرياض','جدة'],
        eg:['القاهرة','الاسكندرية'],
        jo:['عمان','الزرقاء'],
        sy:['دمشق','حلب','حماه']
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change',()=>{
        const country=item.value
        const cities=citiesByCountry[country]
        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())
    })
})
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();


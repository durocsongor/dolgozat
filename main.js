document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const cardNumber = document.getElementById('card-number');
    const cardholder = document.getElementById('cardholder');
    const expiryMonth = document.getElementById('expiry-month');
    const expiryYear = document.getElementById('expiry-year');
    const cvv = document.getElementById('cvv');

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * days));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : '';
    }

    function loadFormData() {
        cardNumber.value = getCookie('cardNumber') || '';
        cardholder.value = getCookie('cardholder') || '';
        expiryMonth.value = getCookie('expiryMonth') || '';
        expiryYear.value = getCookie('expiryYear') || '';
        cvv.value = getCookie('cvv') || '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        setCookie('cardNumber', cardNumber.value, 3);
        setCookie('cardholder', cardholder.value, 3);
        setCookie('expiryMonth', expiryMonth.value, 3);
        setCookie('expiryYear', expiryYear.value, 3);
        setCookie('cvv', cvv.value, 3);
        alert('Adatok elmentve a cookie-ba!');
    });

    loadFormData();
});

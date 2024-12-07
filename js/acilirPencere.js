// script.js
document.addEventListener('DOMContentLoaded', function () {
    var closeModalButtons = document.getElementsByClassName('close');
    var links = document.querySelectorAll('.openModal'); // Belirli class'a sahip a etiketleri

    // Belirli class'a sahip a etiketlerine tıklama olayını bağlama
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Linkin normal çalışmasını engelle
            var modalId = link.getAttribute('data-modal'); // Modal ID'yi al
            var modal = document.getElementById(modalId); // Modal'ı seç
            modal.style.display = 'block'; // Modal göster
        });
    });

    // Kapanınca
    Array.from(closeModalButtons).forEach(function (button) {
        button.addEventListener('click', function () {
            var modal = button.closest('.modal'); // En yakın modal'ı seç
            modal.style.display = 'none'; // Modal gizle
        });
    });

    // Pencere dışında tıklanınca kapanır
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none'; // Modal gizle
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('myLink');
    var popup = document.getElementById('popup');
    var isPopupOpen = false;

    link.addEventListener('mouseover', function () {
        if (!isPopupOpen) {
            popup.style.display = 'block'; // Popup göster
        }
    });

    link.addEventListener('mouseout', function () {
        if (!isPopupOpen) {
            popup.style.display = 'none'; // Popup gizle
        }
    });

    link.addEventListener('click', function (event) {
        event.preventDefault(); // Linkin normal çalışmasını engelle
        isPopupOpen = !isPopupOpen;
        if (isPopupOpen) {
            popup.style.display = 'block'; // Popup göster
        } else {
            popup.style.display = 'none'; // Popup gizle
        }
    });

    window.addEventListener('click', function (event) {
        if (!popup.contains(event.target) && event.target !== link) {
            popup.style.display = 'none'; // Popup gizle
            isPopupOpen = false;
        }
    });
});

  const toTopButton = document.getElementById("toTopButton");

    // Sayfa kaydırıldığında butonu göster/gizle
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { // 300px'den fazla kaydırılırsa görünür yap
        toTopButton.style.display = "flex";
      } else {
        toTopButton.style.display = "none";
      }
    });

    // Butona tıklandığında en üste kaydır
    toTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Yumuşak bir şekilde kaydır
      });
    });

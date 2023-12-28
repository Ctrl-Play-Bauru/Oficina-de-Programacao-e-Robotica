document.addEventListener("DOMContentLoaded", function () {
    var mainContentItems = document.querySelectorAll('.container .item');
    mainContentItems.forEach(function (item) {
        item.classList.add('animated');
    });

    var platforms = document.querySelectorAll('.fundoPlatforma img, footer .icones');
    platforms.forEach(function (platform) {
        platform.classList.add('animated');
    });

    var banner = document.querySelector('.banner table');
    banner.classList.add('animated');
});

document.getElementById("cadastroBtn").addEventListener("click", function() {
    window.location.href = "php/principal.php";
});

const quadrados = document.querySelectorAll('.quadrado');

quadrados.forEach(quadrado => {
    quadrado.addEventListener('mouseover', () => {
        quadrado.querySelector('.imgBannerProjeto').style.transform = 'scale(1)';
        quadrado.querySelector('.texto-overlay').style.display = 'block';
    });

    quadrado.addEventListener('mouseout', () => {
        quadrado.querySelector('.imgBannerProjeto').style.transform = 'scale(1.2)';
        quadrado.querySelector('.texto-overlay').style.display = 'none';
    });
});
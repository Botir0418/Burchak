$(document).ready(function () {
    $("button.bars").click(function () {
        $(".item-right").addClass("nav-mobile");
    });

    $(".item-right .pro").click(function () {
        $(".item-right").removeClass("nav-mobile");
    });
});

let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide((slideIndex += n));
}

function currentSlide(n) {
    showSlide((slideIndex = n));
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlide(slideIndex);

function pushSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let texts = document.getElementsByClassName('text-slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {slides[i].style.display = 'none'; texts[i].style.display = 'none'}

    slides[slideIndex - 1].style.display = "block";
    texts[slideIndex - 1].style.display = 'flex';
}
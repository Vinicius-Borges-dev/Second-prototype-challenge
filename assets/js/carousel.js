const carouselImages = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev-btn');
const NextBtn = document.getElementById('next-btn');

let index = 0;
const PrevItem = () =>{
    index--;
    if (index < 0) {
        index = carouselImages.length - 1;
    }
    carouselImages.forEach((image) => {
        image.classList.remove('active');
    })
    carouselImages[index].classList.add('active');
}

const nextItem = () =>{
    index++;
    if (index > carouselImages.length - 1) {
        index = 0;
    }
    carouselImages.forEach((image) => {
        image.classList.remove('active');
    })
    carouselImages[index].classList.add('active');
}

prevBtn.addEventListener('click', ()=> PrevItem());
NextBtn.addEventListener('click', ()=> nextItem());
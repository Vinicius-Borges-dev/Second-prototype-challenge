let images = document.querySelectorAll('.images');

window.addEventListener('DOMContentLoaded', () => {

    const blur = (value) =>{

    }

    const focus = (value) =>{

    }
    
    images.forEach(image =>{
        image.style.opacity = '1';
        image.addEventListener('mouseenter', blur());
        image.addEventListener('mouseleave', focus);
    })
    


})


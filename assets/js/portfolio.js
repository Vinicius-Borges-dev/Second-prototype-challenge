let images = document.querySelectorAll('.image');

function focusImage(value) {
    images.forEach((img, index) => {
        if (value == index) {
            img.classList.remove('blur-image')
            img.classList.add('focus-image')
        } else {
            img.classList.remove('focus-image')
            img.classList.add('blur-image')
        }
    })
}

function unFocusImage() {
    images.forEach((img) => {
        img.classList.remove('focus-image')
        img.classList.remove('blur-image')
    })
}


images.forEach((image, index) => {
    image.style.opacity = '1';
    image.addEventListener('mouseover', () => {
        focusImage(index)
    });
    image.addEventListener('mouseout', () => {
        unFocusImage()
    });
})



window.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.getElementById('btn-menu');
    let sideBar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
        if (sideBar.style.display === 'none' || sideBar.classList.contains('hide')) {
            sideBar.style.display = 'block';
            sideBar.classList.remove('hide');
            sideBar.classList.add('show');

            if (window.outerWidth <= 320) {
                menuBtn.style.transform = 'translate(250px)'
                menuBtn.style.transition = 'transform 0.3s ease-in'
            } else {
                menuBtn.style.transform = 'translate(320px)'
                menuBtn.style.transition = 'transform 0.3s ease-in'
            }

        } else {
            sideBar.classList.remove('show');
            sideBar.classList.add('hide');
            sideBar.addEventListener('transitionend', () => {
                sideBar.style.display = 'none';
            })

            menuBtn.style.transform = 'translate(0px)'
            menuBtn.style.transition = 'transform 0.3s 0.6s ease-in'
        }
    })
})
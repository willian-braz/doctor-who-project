const carouselBtn = document.querySelectorAll('.btn');
const imageList = document.querySelectorAll('.img');

carouselBtn.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        desactiveSelectedBtn();

        selectCarouselBtn(btn);

        hideActiveBackgroundImage();

        showBackgroundImage(indice);
    })
})

function desactiveSelectedBtn() {
    const selectedBtn = document.querySelector('.selected');
    selectedBtn.classList.remove('selected');
}

function selectCarouselBtn(btn) {
    btn.classList.add('selected');
}

function hideActiveBackgroundImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function showBackgroundImage(indice) {
    imageList[indice].classList.add('active');
}
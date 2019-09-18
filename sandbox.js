const ctaButton = document.querySelector('button');
const closeBtn = document.querySelector('.popup-close');
const popupWrapper = document.querySelector('.popup-wrapper');


//cta button click
ctaButton.addEventListener('click', () => {
    popupWrapper.style.display = "block";
})


//close button click
closeBtn.addEventListener('click', () => {
    popupWrapper.style.display = "none";
})



//wrapper area click
popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = "none";
})
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn')
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide() {
    if(counter === 5){
        counter = -1
    }
    counter++;
    console.log(counter)
    container.style.background = `url(Img/img_${counter}.jpg`
}

function prevSlide(){
    if(counter === 0){
        counter = 6
    }
    console.log(counter)
    counter--;
    container.style.background = `url(Img/img_${counter}.jpg`
}
new WOW().init();


const first = document.getElementById('first'),
    modal = document.getElementById('modal'),
    ru = document.getElementById('ru'),
    langModal = document.getElementById('lang-modal')


first.addEventListener('click', () => {
    modal.classList.toggle('active')
})

ru.addEventListener('click', () => {
    langModal.classList.toggle('active')
})

// main slide

var images = document.querySelectorAll('.picture')
var li = document.getElementsByClassName('list')

for (let i = 0; i < li.length; i++) {

    li[i].onclick = function () {

        for (let s = 0; s < li.length; s++) {
           
            li[s].classList.remove('active-li');
            images[s].classList.remove('active');
            console.log(li[s], 'ikinshi');
        } 
        this.classList.add('active-li');
        var dataSlide = this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
    }

}

// cards slide

var cards = document.querySelectorAll('.cards__card');

document.querySelector('.right').onclick = right;
document.querySelector('.left').onclick = left;

var counter = 0;

function right() {
    cards[counter].classList.remove('active');
    counter++;
    if (cards.length == counter) {
        counter = 0;
    }
    cards[counter].classList.add('active');
    clearTimeout(timer);
    autoplay()

}

function left() {
    cards[counter].classList.remove('active');


    counter--;
    if (counter < 0) {
        counter = cards.length - 1;
    }
    cards[counter].classList.add('active');
    clearTimeout(timer);
    autoplay()
}


for(var i = 0; i < li.length; i++){
    li[i].onclick = function(){
        for(var j = 0; j < li.length; j++){
            li[j].classList.remove('active-li');
            images[j].classList.remove('active')
        }
        this.classList.add('active-li');
        var dataSlide = this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
        counter = dataSlide;
    }
}


var timer;
function autoplay() {
    timer = setTimeout(right, 2000)
}

autoplay()

// slider-two
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.arrow');
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
       carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
})

let isDragging = false;

const dragStart = () => {
    let isDragging; 
    isDragging = true
}

const dragging = (e) => {
    if(!isDragging)return;
    carousel.scrollLeft = e.pageX
}

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)


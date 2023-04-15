const octodex = document.querySelector('.octodex');
const pipe = document.querySelector('.whale');
const btnStart = document.querySelector('#start');
const btnRestart = document.querySelector('#restart');

let jogar = false;


if(jogar == false){

    octodex.style.animation = 'none'
    pipe.style.animation = 'none';
    pipe.style.right = '5%';

}

function inicio(){
    jogar = true;
    btnStart.style.visibility = 'hidden';
    octodex.style.animation = 'jump 500ms ease-out';
    pipe.style.animation = 'whale-animation 1.5s infinite linear';
    
}

const jump = () => {
    octodex.classList.add('jump');

    setTimeout(() => {
        octodex.classList.remove('jump');
    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const octodexPosition = +window.getComputedStyle(octodex).bottom.replace('px', '');
    
    if(pipePosition <= 135 && pipePosition > 0 && octodexPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        octodex.style.animation = 'none';
        octodex.style.bottom = `${octodexPosition}px`;

        octodex.src = './images/game-over.png';
        octodex.style.width = '120px'

        btnRestart.style.visibility = 'initial';

        clearInterval(loop);
    }

},10);


document.addEventListener('keydown', jump);
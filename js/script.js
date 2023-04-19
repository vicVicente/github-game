const octodex = document.querySelector('.octodex');
const pipe = document.querySelector('.whale');
const btnStart = document.querySelector('#start');
const btnRestart = document.querySelector('#restart');

let jogar = false;


if(jogar == false){

    pipe.style.animation = 'none';
    pipe.style.right = '5%';

}

function inicio(){

    jogar = true;
    btnStart.style.visibility = 'hidden';
    pipe.style.animation = 'whale-animation 1.5s infinite linear';
    comeca();
    
}

function restart(){

    jogar = true;

    octodex.src = './images/octodex.gif'
    btnRestart.style.visibility = 'hidden';
    octodex.style.animation = jump;
    octodex.style.bottom = '0';
    octodex.style.width = '100px';

    pipe.style.animation = 'whale-animation 1.5s infinite linear';
    pipe.style.left= null;
    
    comeca();

}

const jump = () => {

    octodex.classList.add('jump');
    setTimeout(() => {
        octodex.classList.remove('jump');
    },500)
}

function comeca(){
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const octodexPosition = +window.getComputedStyle(octodex).bottom.replace('px', '');
        
        if(pipePosition <= 135 && pipePosition > 0 && octodexPosition < 80){
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            octodex.style.animation = null;
            octodex.style.bottom = `${octodexPosition}px`;
    
            octodex.src = './images/game-over.png';
            octodex.style.width = '120px'
    
            btnRestart.style.visibility = 'initial';
    
            clearInterval(loop);
        }
    
    },10);
}



document.addEventListener('keydown', jump);

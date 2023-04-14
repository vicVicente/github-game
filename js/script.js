const octodex = document.querySelector('.octodex');
const pipe = document.querySelector('.whale');

const jump = () => {
    octodex.classList.add('jump');

    setTimeout(() => {
        octodex.classList.remove('jump');
    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const octodexPosition = +window.getComputedStyle(octodex).bottom.replace('px', '');

    console.log(octodexPosition);
    
    if(pipePosition <= 135 && pipePosition > 0 && octodexPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        octodex.style.animation = 'none';
        octodex.style.bottom = `${octodexPosition}px`;

        octodex.src = './images/game-over.png';
        octodex.style.width = '120px'

        clearInterval(loop);
    }

},10)


document.addEventListener('keydown', jump);


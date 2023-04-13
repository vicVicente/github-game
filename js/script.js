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
    
    if(pipePosition <= 134){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

    }

},10)


document.addEventListener('keydown', jump);


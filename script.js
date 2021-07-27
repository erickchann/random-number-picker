const text = document.getElementById('number');

let min = parseInt(prompt('Input Min Number'));
let max = parseInt(prompt('Input Max Number'));

function scramble() {
    let randAnimation = setInterval(() => {
        let rand = Math.ceil((Math.random() * (max - min)) + min);

        text.innerHTML = rand;
    }, 50);

    setTimeout(() => {
        clearInterval(randAnimation);
    }, 1500);
}
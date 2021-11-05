const lampada = document.getElementById('lampada');
const interrupitor = document.getElementById('interrupitor')


function lampOn () {
    lampada.src = 'imgs/ligada.jpg';
}

function lampOff () {
    lampada.src = 'imgs/desligada.jpg';
}

function lampBroken () {
    lampada.src = 'imgs/quebrada.jpg'
}
    lampada.addEventListener ('mouseover', lampOn);
    lampada.addEventListener ('mouseleave', lampOff);
    lampada.addEventListener ('dbclick', lampBroken);
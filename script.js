const lampada = document.getElementById('lampada');
const interrupitor = document.getElementById('interrupitor')

function lampOn () {
    lampada.src = 'imgs/ligada.jpg';
}

function lampOff () {
    if(lampOn ()){
    lampada.src = 'imgs/desligada.jpg';
    }
}

    interrupitor.addEventListener ('click', lampOff);
    interrupitor.addEventListener ('click', lampOn);

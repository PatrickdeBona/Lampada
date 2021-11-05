const lampada = document.getElementById('lampada');
const interrupitor = document.getElementById('interrupitor')

function isLampBroken () {
    return lampada.src.indexOf ('quebrada') > -1;
}


function lampOn () {
    if( !isLampBroken ())
    lampada.src = 'imgs/ligada.jpg';
}

function lampOff () {
    if( !isLampBroken ())
    lampada.src = 'imgs/desligada.jpg';
}

function lampBroken () {
    lampada.src = 'imgs/quebrada.jpg';
}
    lampada.addEventListener ('mouseover', lampOn);
    lampada.addEventListener ('mouseleave', lampOff);
    lampada.addEventListener ('dblclick', lampBroken);
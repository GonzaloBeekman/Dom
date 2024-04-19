function eliminar() {
    let puntero = document.getElementById('enlace1')
    puntero.removeAttribute('href')
    puntero = document.getElementById('enlace2')
    puntero.removeAttribute('href')
}

function Empezar() {
    let puntero = document.getElementById('enlace1')
    puntero.setAttribute('href', 'https://www.youtube.com')
    puntero = document.getElementById('enlace2')
    puntero.setAttribute('href', 'https://classroom.google.com/u/0/h?hl=es')
}


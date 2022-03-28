//Varijable
let colorCode = document.querySelector('.color-code');
let colorBtn  = document.querySelector('.color-button');


//Funkcije
function showColor(){
    let color = "#" + Math.random().toString(16).substring(2, 8)
    colorCode.textContent = color;
    document.body.style.background = color;
}
showColor()
//Event listeneri
colorBtn.addEventListener('click',showColor)
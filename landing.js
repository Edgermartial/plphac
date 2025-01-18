document.addEventListener('DOMcontentLoaded', (event) => {
    const text = "welcome";
    let index = 0;
    const welcomeElement = document.getElementsByClassName("welcome")[0];
    function letterByLetter() {
    if (index < text.length) {
        welcomeElement.textContent += text.charAt(index);
        index++;
        setTimeout(letterByLetter, 500);
    }
}
window.onload = letterByLetter;
})

const images = [
    'hac1.jpg',
    'hac2.jpg'

];
let currentIndex=0;
function changeBackground(){
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex=(currentIndex+1) % images.length
}
setInterval(changeBackground, 5000);
window.onload = changeBackground;
// PAINTING
document.addEventListener('mousemove', function(e){
    const main = document.querySelector('main');
    const bottom = document.createElement('span');
    bottom.style.left= -75 + e.clientX + "px";
    bottom.style.top= -75 + e.clientY + "px";
    main.appendChild(bottom);
});
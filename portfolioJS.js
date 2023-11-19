// PAINTING
document.addEventListener('mousemove', function(e){
    const main = document.querySelector('main');
    const bottom = document.createElement('span');
    const top = document.querySelector('.top');
    bottom.style.left= -75 + e.offsetX+'px';
    bottom.style.top= -75 + e.offsetY+'px';
    main.appendChild(bottom);

});
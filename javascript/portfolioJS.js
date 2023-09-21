// PAITING
document.addEventListener('mousemove', function(e){
    const body = document.querySelector('body');
    const bottom = document.createElement('span');
    bottom.style.left= -75 + e.offsetX+'px';
    bottom.style.top= -75 + e.offsetY+'px';
    body.appendChild(bottom);
});





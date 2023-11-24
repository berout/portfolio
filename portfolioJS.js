// PAINTING
document.addEventListener('mousemove', function(e){
    const main = document.querySelector('main');
    const bottom = document.createElement('span');
    bottom.style.left= -75 + e.clientX + "px";
    bottom.style.top= -75 + e.clientY + "px";
    main.appendChild(bottom);
});
document.addEventListener('touchmove', function(e){
    const main = document.querySelector('main');
    const bottom = document.createElement('span');
    let touch = e.touches[0];
    bottom.style.left= touch.clientX + "px";
    bottom.style.top= touch.clientY + "px";
    main.appendChild(bottom);
});
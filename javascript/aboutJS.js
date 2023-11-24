// EYES WIDE OPEN
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
};


window.addEventListener('deviceorientation', function(e){
    const x = e.beta;
    const y = e.gamma;
    const z = e.alpha;
    document.getElementsByClassName('.layer').style.transform = `translateX(${x}px) translateY(${y}px) translateY(${z}px)`;
    })


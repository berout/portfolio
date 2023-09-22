// EYES WIDE OPEN

// function parallax(e){
//     if (window.matchMedia("(max-width: 830px)").matches){
//         document.addEventListener("deviceorientation", parallax);
//         this.querySelectorAll('.layer').forEach(layer =>{
//             const x = e.beta;
//             const y = e.gamma;
//             const z = e.alpha;
//             layer.style.transform = `translateX(-${x}px%) translateY(-${y}px%) translateZ(-${z}px%)`});
//     } else{
//         document.addEventListener("mousemove", parallax);
//         this.querySelectorAll('.layer').forEach(layer =>{
//             const speed = layer.getAttribute('data-speed');
//             const x = (window.innerWidth - e.pageX * speed)/100;
//             const y = (window.innerHeight - e.pageY * speed)/100;
//             layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });
//     };
// };




document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
};

document.addEventListener("deviceorientation", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const x = e.beta;
        const y = e.gamma;
        const z = e.alpha;
        layer.style.transform = `translateX(-${x}px%) translateY(-${y}px%) translateZ(-${z}px%)`;
    })
};



ScrollReveal().reveal(".logo",  {interval:300, opacity:0.2, scale: 1.2});

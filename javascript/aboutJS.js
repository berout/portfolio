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

let sensor = new Gyroscope();
let x, y, z;
sensor.start()
this.querySelectorAll('.layer').forEach(layer =>{
    sensor.onreading = () =>{
        x = sensor.x * 100;
        y = sensor.y * 100;
        z = sensor.z * -33;
        layer.style.left = (layer.offsetLeft + x) + "px";
        layer.style.top = (layer.offsetTop - y) + "px";
        layer.style.bottom = (layer.offsetBottom + z) + "px";
    }



})

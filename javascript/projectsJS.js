// window.addEventListener("scroll", reveal);
// function reveal(){
//     let reveals = document.querySelectorAll('.card');
//     for(var i=0; i<reveal.length; i++){
//         let windowheight = window.innerHeight;
//         let revealtop = reveals[i].getBoundingClientRect().top;
//         let revealpoint = 1000;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }
    
//     }
// }




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');

        }
        });
    });

    const hiddenElements = document.querySelectorAll('.card');
    hiddenElements.forEach((el)=> observer.observe(el));

    


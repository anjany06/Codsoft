const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


let sections = document.querySelectorAll('section');
window.onscroll = () =>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top>=offset && top < offset + height ){
      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  })
}

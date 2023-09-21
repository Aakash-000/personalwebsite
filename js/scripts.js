
document.addEventListener("DOMContentLoaded",()=>{
    let navbar = document.querySelector('.navbar')
    let wrapper = document.querySelector('.wrapper')
    var reveals = document.querySelectorAll(".reveal");
      
    wrapper.addEventListener("scroll",()=>{
    if(wrapper.scrollTop > 40){
        navbar.classList.add("navbar-after-scroll")
    }else{
        navbar.classList.remove("navbar-after-scroll")
    }

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }

    })
})
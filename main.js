
// menu click function


const menu = document.getElementById("menu");
const nav = document.querySelector(".navbar");



menu.addEventListener("click", () => {
    
      menu.classList.toggle('fa-times');
      nav.classList.toggle("act");


})


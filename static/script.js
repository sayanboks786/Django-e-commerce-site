const header=document.querySelector(".header");

window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",this.window.scrollY>0);
  
})

let menu = document.querySelector('#menu_icon');
let navmenu = document.querySelector('.header');

const toggleNavbar = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("active");
  
};
// const toggleNavbarClose = () => {
//   menu.classList.toggle("bx-x");
//   navmenu.classList.toggle("close");
  
// };
navmenu.addEventListener('click', () => toggleNavbar());

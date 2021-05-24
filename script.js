const logo = document.querySelector('.logo');
const cover = document.querySelector('.cover');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const iconBurgerBtn = document.querySelector('.icon-burger');
const menuLinks = document.querySelectorAll('.nav__list-item-link ');
const sidebarMenu = document.querySelector('.nav');
let iconBurgerBtnFlag = false;

iconBurgerBtn.addEventListener('click', () => {
  if(!iconBurgerBtnFlag){
    cover.classList.add('open');
    iconBurgerBtn.classList.add('open');
    sidebarMenu.classList.add('open');
    logo.classList.add('open');
    iconBurgerBtnFlag = true;
  } else {
    cover.classList.remove('open');
    iconBurgerBtn.classList.remove('open');
    sidebarMenu.classList.remove('open');
    logo.classList.remove('open');
    iconBurgerBtnFlag = false;
  }
})

const changeActiveMenu = (e) => {
  let scrollDistance = window.scrollY;

  sections.forEach((section, index) => {
    if((section.offsetTop - header.offsetHeight) <= scrollDistance){
      menuLinks.forEach((link) => {
        link.classList.remove('active');
      })
      
      menuLinks[index].classList.add('active');
    }
  })
}

document.addEventListener('scroll', changeActiveMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', changeActiveMenu);
})
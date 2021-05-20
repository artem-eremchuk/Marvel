const logo = document.querySelector('.logo');
const cover = document.querySelector('.cover');
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

menuLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    menuLinks.forEach(link => link.classList.remove('active'))
    el.classList.add('active');
  })
})
const logo = document.querySelector('.logo');
const iconBurgerBtn = document.querySelector('.icon-burger');
const mobileMenuWrapper = document.querySelector('.mobile-menu__wrapper');
const mobileMenu = document.querySelector('.mobile-menu');
let iconBurgerBtnFlag = false;

iconBurgerBtn.addEventListener('click', () => {
  if(!iconBurgerBtnFlag){
    mobileMenuWrapper.style.display = 'block';
    iconBurgerBtn.classList.add('open');
    logo.classList.add('open');
    mobileMenu.classList.add('open');
    iconBurgerBtnFlag = true;
  } else {
    mobileMenuWrapper.style.display = 'none';
    iconBurgerBtn.classList.remove('open');
    logo.classList.remove('open');
    mobileMenu.classList.remove('open');
    iconBurgerBtnFlag = false;
  }
})
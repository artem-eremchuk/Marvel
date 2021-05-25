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

// Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide__item');
const totalSlides = slides.length;
const slideLeftArrow = document.querySelector('.left-arrow');
const slideRightAroow = document.querySelector('.right-arrow');
const phones = document.querySelectorAll('.phones')
const verticalPhone = document.querySelector('.vertical-phone__img');
const horizontalPhone = document.querySelector('.horizontal-phone__img');
const verticalPhoneDisplay = document.querySelector('.vertical-phone__display');
const horizontalPhoneDisplay = document.querySelector('.horizontal-phone__display');
let slidePosition = 0;

const updateSlidePosition = () => {
  for (let slide of slides){
    slide.classList.remove('slide__item_visible');
    slide.classList.add('slide__item_hidden');
  }

  slides[slidePosition].classList.add('slide__item_visible');
}

const moveToNextSlide = () => {
  if(slidePosition === totalSlides - 1){
    slidePosition = 0;
    slider.classList.remove('change-slide');
    slideLeftArrow.classList.remove('change-slide');
    slideRightAroow.classList.remove('change-slide');
  } else {
    slidePosition++;
    slider.classList.add('change-slide');
    slideLeftArrow.classList.add('change-slide');
    slideRightAroow.classList.add('change-slide');
  }

  updateSlidePosition();
}

const moveToPrevSlide = () => {
  if(slidePosition === 0){
    slidePosition = totalSlides - 1;
    slider.classList.add('change-slide');
    slideLeftArrow.classList.add('change-slide');
    slideRightAroow.classList.add('change-slide');
  } else {
    slidePosition--;
    slider.classList.remove('change-slide');
    slideLeftArrow.classList.remove('change-slide');
    slideRightAroow.classList.remove('change-slide');
  }

  updateSlidePosition();
}

const updateVerticalDisplay = () => {
  if(verticalPhoneDisplay.classList.contains('displays')){
    verticalPhoneDisplay.classList.remove('displays');
  } else {
    verticalPhoneDisplay.classList.add('displays');
  }
}

const updateHorizontalDisplay = () => {
  if(horizontalPhoneDisplay.classList.contains('displays')){
    horizontalPhoneDisplay.classList.remove('displays');
  } else {
    horizontalPhoneDisplay.classList.add('displays');
  }
}

slideRightAroow.addEventListener('click', moveToNextSlide);
slideLeftArrow.addEventListener('click', moveToPrevSlide);
verticalPhone.addEventListener('click', updateVerticalDisplay);
horizontalPhone.addEventListener('click', updateHorizontalDisplay);

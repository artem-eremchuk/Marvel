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
const verticalPhone = document.querySelector('.vertical-phone__img');
const horizontalPhone = document.querySelector('.horizontal-phone__img');
const verticalPhoneDisplay = document.querySelector('.vertical-phone__display');
const horizontalPhoneDisplay = document.querySelector('.horizontal-phone__display');

const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderContainer = document.querySelector('.slides__container');
const slideLeftArrow = document.querySelector('.left-arrow');
const slideRightAroow = document.querySelector('.right-arrow');
let direction = -1;

slideRightAroow.addEventListener('click', () => {
  if(direction === 1){
    sliderContainer.prepend(sliderContainer.lastElementChild);
    sliderWrapper.style.justifyContent = 'flex-start';
    direction = -1;
  } 

  sliderContainer.style.transform = 'translate(-50%)';
  slider.classList.toggle('change-slide');
  slideRightAroow.classList.toggle('change-slide');
  slideLeftArrow.classList.toggle('change-slide');
});

slideLeftArrow.addEventListener('click', () => {
  if (direction === -1) {
    direction = 1;
    sliderContainer.appendChild(sliderContainer.firstElementChild);
  }

  sliderWrapper.style.justifyContent = 'flex-end';
  sliderContainer.style.transform = 'translate(50%)';
  slider.classList.toggle('change-slide');
  slideRightAroow.classList.toggle('change-slide');
  slideLeftArrow.classList.toggle('change-slide');
});


sliderContainer.addEventListener('transitionend', () => {
  if(direction === 1){
    sliderContainer.prepend(sliderContainer.lastElementChild);
  } else {
    sliderContainer.appendChild(sliderContainer.firstElementChild);
  }

  sliderContainer.style.transition = 'none';
  sliderContainer.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderContainer.style.transition = '1s';
    
  })
}, false);

const updateVerticalDisplay = (e) => {
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

verticalPhone.addEventListener('click', updateVerticalDisplay);
horizontalPhone.addEventListener('click', updateHorizontalDisplay);



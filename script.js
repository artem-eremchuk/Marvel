// ========== header ==========
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

// ========== slider ==========
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

slideRightAroow.addEventListener('click', (e) => {
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

// ========== portfolio ==========
const portfolioButtons = document.querySelectorAll('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__img-block-img');
let IDs = [];

portfolioButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const classFromButton = button.classList[1];

    portfolioImages.forEach((img) => {
      let numberInDataset = +img.getAttribute(`${classFromButton}`);
      img.src = `./assets/img/portfolio-${numberInDataset}.svg`;
      img.classList.remove('portfolio__img-block-img_border');
      img.id = numberInDataset;
    });

    portfolioButtons.forEach((button) => {
      button.classList.remove('active-button'); 
    })

    if(!button.classList.contains('active-button')){
      button.classList.add('active-button');
    }

    portfolioImages.forEach(img => {
      if (IDs.indexOf(+img.id) !== -1){
        img.classList.add('portfolio__img-block-img_border');
      }
    });
  });
})

function showBorderForImg(){
  this.classList.toggle('portfolio__img-block-img_border');

  if (IDs.indexOf(+this.id) === -1)  {
    IDs.push(+this.id)
  } else {
    IDs.forEach((id, index) => {
      if(+this.id === id){
        IDs.splice(index, 1);
      }
    })
  } 
}

portfolioImages.forEach((img) => {
  img.addEventListener('click', showBorderForImg);
})

// form 
const form = document.getElementById('get-quote-form');
const formBtn = document.querySelector('.form-block__btn');
const modalWindow = document.querySelector('.modal-window');
const formInputs = document.querySelectorAll('.form-block__input');
const modalWindowBtn = document.querySelector('.modal-window__btn');
const modalWindowTheme = document.querySelector('.modal-window__content-theme');
const modalWindowDescription = document.querySelector('.modal-window__content-description')

form.addEventListener('submit', event => {
  event.preventDefault();
})

formBtn.addEventListener('click', (event) => {
  const nameRegex = /^([A-Z][a-z\-\']{1,50})|([А-ЯЁIЇҐЄЂЃЀЅЍЈЉЊЋЌЎ][а-яёіїґєђѓѐѕѝјљњћќў\-\']{1,50})$/;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkedName = (nameRegex.test(form.name.value)) ? true : false;
  const checkedEmail = (emailRegex.test(form.email.value)) ? true : false;
  const inputSubjectValue = form.subject.value;
  const inputDescriptionValue = form.description.value;

  if(checkedName && checkedEmail){
    modalWindow.style.display = 'block';
    modalWindowTheme.innerText = 
    (inputSubjectValue) ? `Theme: ${inputSubjectValue}` : 'No subject';
    modalWindowDescription.innerText = 
    (inputDescriptionValue) ? `Description: ${inputDescriptionValue}` : 'No description';
  } else {
    formInputs.forEach(input => {
      let timeID;
      if(input.required){
        timeID = setInterval(() => {
          input.classList.toggle('not-correct');
        }, 250);

        setTimeout(() => { 
          clearInterval(timeID); 
        }, 1000);
      }
    });
  }
})

modalWindowBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  formInputs.forEach(input => {
    input.value = '';
  })
  modalWindow.style.display = 'none';
})

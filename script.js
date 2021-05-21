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

// Смена активной ссылки при скроллинге
const changeActiveLinkWhenScrolling = () => {
  let scrollDistance = window.scrollY;

  sections.forEach((section, index) => {
    if((section.offsetTop - header.clientHeight) <= scrollDistance){
      menuLinks.forEach((link) => {
        if(link.classList.contains('active')){
          link.classList.remove('active');
        }
      })

      menuLinks[index].classList.add('active');
    }
  });
}

window.addEventListener('scroll', changeActiveLinkWhenScrolling)

// Плавный скроллинг при клике
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    window.addEventListener('scroll', changeActiveLinkWhenScrolling);

    event.preventDefault();

    const blockID = event.target.getAttribute('href').slice(1);
  
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth", 
      block: "start"
    })
  })
})

// Смена активной ссылки по клику
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {

    // Отменяю смену активной ссылки при скроллинге
    window.removeEventListener('scroll', changeActiveLinkWhenScrolling);

    event.preventDefault();

    menuLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  })
})

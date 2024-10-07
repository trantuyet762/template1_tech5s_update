const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')
const overlay = document.getElementById('menu-overlay');
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');
//change bg tabline
const btnTab = document.querySelectorAll('#btn_tabline .button');

btnTab.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
       
        btnTab.forEach((btn) => btn.classList.remove('active-cmt'));

       
        tabItem.classList.add('active-cmt');
    });
});

// event menu
document.addEventListener('click', (e)=>{
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('top-menu-expanded')
        topMenu.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
        document.body.classList.toggle('menu-expanded')
    }
    else{
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
            overlay.classList.add('hidden')
            document.body.classList.remove('menu-expanded')
        }
    }
})

// show hidden text-content
const toggleIcons = document.querySelectorAll('.toggle-icon');
const toggleContents = document.querySelectorAll('.toggle-content');

toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const content = toggleContents[index];
        const svgPath = icon.querySelector('path');

        if (content.style.display === 'none') {
            content.style.display = 'block';  
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z');  
        } else {
            content.style.display = 'none';  
            svgPath.setAttribute('d', 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z');  
        }
    });
});

//slider img
let currentSlide = 0;
  const swiperEl = document.querySelector('.swiper-container-cmt');
  swiperEl.initialize();
  const btnSlider = document.querySelectorAll('.btn_slider');
  const swiper = document.querySelector('.mySwiper');

  function showSlide(index) {
    currentSlide = index;
    swiper.swiper.slideTo(currentSlide, 500);
    updateButtons();
  }

  function updateButtons() {
    btnSlider.forEach((button, i) => {
      button.classList.toggle('active', i === currentSlide);
    });
  }

  swiper.addEventListener('slidechange', () => {
    currentSlide = swiper.swiper.realIndex;
    updateButtons();
  });
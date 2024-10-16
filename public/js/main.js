 
 ///shadow cmt
 
 function toggleShadowCom(element) {
    const slides = document.querySelectorAll('.swiper-slide-cmt');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

   
    element.classList.add('active');
}


var swiper_info = new Swiper(".info_doctor_swiper", {
  
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 32, 

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
 
  },
  breakpoints: {
    
    350: {
        slidesPerView: 1, 
        slidesPerGroup: 1, 
    },
    
    768: {
        slidesPerView: 2, 
        slidesPerGroup: 1, 
    },
    
    1024: {
        slidesPerView: 2, 
        slidesPerGroup: 1, 
    },

     1280: {
        slidesPerView: 3, 
        slidesPerGroup: 1, 
    },
    1920: {
        slidesPerView: 4, 
        slidesPerGroup: 1,
    },
},
  });



const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')
const overlay = document.getElementById('menu-overlay');
const phoneIcon = document.getElementById('phone-icon');
const phoneNumber = document.getElementById('phone-number');
//slider img

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




////
var swiper_cus_img_container  = new Swiper(".customer_img_vacxin_swiperTab", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".customer_img_vacxin_swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".info_doctor_next",
      prevEl: ".info_doctor_prev",
    },
    thumbs: {
      swiper: swiper_cus_img_container,
    },
  });
  //// swiper table
  var swiper_table = new Swiper(".swiper-container-img", {
    spaceBetween: 30,
    effect: "fade",
    grabCursor: true, 
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swiper cmt

  var swiper_cmt = new Swiper(".swiper-container-cmt", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    
        350: {
            slidesPerView: 1, 
            slidesPerGroup: 1, 
        },
        
        640: {
            slidesPerView: 2, 
            slidesPerGroup: 1, 
        },
       
    },

  });

 ////
 
var cus_test_swiper = new Swiper(".cus_test_swiper_container", {
  
  slidesPerView: 3,
    freeMode: true,
    spaceBetween: 23,
  navigation: {
    nextEl: ".cus_test_img_next",
    prevEl: ".cus_test_img_prev",
  },
  breakpoints: {
    
    350: {
        slidesPerView: 1, 
        slidesPerGroup: 1, 
    },
    
    1024: {
        slidesPerView: 2, 
        slidesPerGroup: 1, 
    },
    1536: {
      slidesPerView: 3, 
        slidesPerGroup: 1, 
    }
   
},
 
});

////offres vacxin swiper

var swiper_offers_vacxin = new Swiper(".swiper_offers_vacxin_container", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".offers_vacxin_next",
    prevEl: ".offers_vacxin_prev",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // }
 
});
///video

var videoButtons = document.getElementsByClassName('videoBtn');

for (var i = 0; i < videoButtons.length; i++) {
    videoButtons[i].onclick = function(event) {
        event.preventDefault(); 
        document.getElementById('videoModal').style.display = 'flex';
        document.getElementById('videoFrame').src = 'https://youtu.be/T0sHaz4H9MQ?si=00Tt5dqp07ERRQQA';
    }
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoFrame').src = ''; 
}

window.onclick = function(event) {
    if (event.target === document.getElementById('videoModal')) {
        document.getElementById('videoModal').style.display = 'none';
        document.getElementById('videoFrame').src = ''; 
    }
}
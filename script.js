

const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        620:{
            slidesPerView: 1,
        },
        1240:{
            slidesPerView: 2,
        },
    }
});


// mobile navigation
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const mobile = document.querySelector('.mobile');


open.addEventListener('click', function() {
    open.style.display = 'none' 
    close.style.display = 'inline-block' 
    mobile.style.marginRight = '8.2rem' 
})

close.addEventListener('click', function() {
    close.style.display = 'none' 
    open.style.display = 'inline-block' 
    mobile.style.marginRight = '-20rem' 

})

// scroll event

window.addEventListener('scroll', function(){
    this.document.querySelector('nav').classList.toggle('scroll', window.scrollY > 10)
})

// home portfolio script

//  buttons
const categories = [
    { 
        button: document.getElementById('all'), 
        active: document.getElementById('all_active') 
    },
    { 
        button: document.getElementById('3d'), 
        active: document.getElementById('3d_active') 
    },
    { 
        button: document.getElementById('da'), 
        active: document.getElementById('da_active') 
    },
    { 
        button: document.getElementById('gd'), 
        active: document.getElementById('gd_active') 
    },
    { 
        button: document.getElementById('wd'), 
        active: document.getElementById('wd_active') 
    }
];

// Function to handle click events for category buttons
function handleCategoryClick(clickedIndex) {
    categories.forEach((category, index) => {
        if (index === clickedIndex) {
            category.active.classList.remove('port-none');
            category.button.classList.add('port-active');
        } else {
            category.active.classList.add('port-none');
            category.button.classList.remove('port-active');
        }
    });
}

// Adding click event listeners to each category button
categories.forEach((category, index) => {
    category.button.addEventListener('click', () => {
        handleCategoryClick(index);
    });
});


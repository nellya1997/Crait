// подключение селекта

let element = document.querySelector('.js-choice');
let choices = new Choices(element, {
    searchEnabled: false,
    // shouldSort: false,
    itemSelectText: '',
});

// бургер меню

let burger = document.querySelector('.burger');

let header = document.querySelector('.header');

burger.addEventListener('click',
function() {
    header.classList.toggle('active');
  }
)



let swiper = new Swiper('.js-swiper-superskid', {
    // modules: [ Navigation, Pagination ],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // slidesPerView: auto,
      // loop: true,
});

// подключение свайпера в секции товара SALE

let swiperSaleProduct = document.querySelectorAll('.js-sale-product');

swiperSaleProduct.forEach(function (product){
    let swipers = new Swiper(product, {
      effect: 'fade',

      fadeEffect: {
        crossFade: true
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
});


// подключение свайпера коллекции товара в секции SALE

let swiperSaleCollection = document.querySelectorAll('.js-sale-collection');

swiperSaleCollection.forEach(function (collection){
    let swipers = new Swiper(collection, {
      navigation: {
              nextEl: '.swiper-button-next--sale',
              prevEl: '.swiper-button-prev--sale',
            },
            speed: 1000,
    })
    });

// табы в секции SALE

document.addEventListener('DOMContentLoaded', () => {
  let tabs = document.querySelector('.js-wrapper-tabs');
  let tabsBtn = document.querySelectorAll('.js-tabs');
  let tabsContent = document.querySelectorAll('.js-tabs-content');

  if (tabs) {
      tabs.addEventListener('click', (e) => {
          if (e.target.classList.contains('js-tabs')) {
              let tabsPath = e.target.dataset.tabsPath;
              tabsHandler(tabsPath);
          }
      });
  }

  let tabsHandler = (path) => {
      tabsBtn.forEach(el => {el.classList.remove('active')});
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('active');


      tabsContent.forEach(el => {el.classList.remove('active')});
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
  };
});

// 
// подключение свайпера коллекции товара в секции advertisement

let swiperadvertisement = new Swiper('.js-advertisement-swiper', {
  slidesPerView: 3,
});



// подключение свайпера в секции product-day

let swiperProductDay = new Swiper('.js-swiper-product-day', {
  // slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next-product-day',
      prevEl: '.swiper-button-prev--product-day',
    },
});
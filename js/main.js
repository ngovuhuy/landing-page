// -------------------------------HOME PAGE---------------------------
let menuMobile = document.querySelector('.menu-mobile-icon');
let menuMobileLink = document.querySelector('.mobile-link');
let content = document.querySelector('.content ');
let closeMenu = document.querySelector('.closeMenu');
let homeBg = document.querySelector('.home-bg');
let productItem = document.querySelector('.product-list');


menuMobile.addEventListener('click', () => {
  if (!window.location.href.includes('about.html') && !window.location.href.includes('contact.html')) {
    content.classList.add('d-none');
  }
  menuMobileLink.classList.add('d-block');
  closeMenu.classList.add('d-block');
  menuMobile.classList.add('d-none');
})
closeMenu.addEventListener('click', () => {
  if (!window.location.href.includes('about.html') && !window.location.href.includes('contact.html')) {
    content.classList.remove('d-none');
  }

  menuMobileLink.classList.remove('d-block');
  closeMenu.classList.remove('d-block');
  menuMobile.classList.remove('d-none');
})
let searchIcon = document.querySelector('.search-icon');
let searchInput = document.querySelector('.search-text')
let formSearch = document.querySelector('.search-form');

let listMenu = document.querySelector('.menu');
let website = document.querySelectorAll('.menu li a')
searchIcon.addEventListener('click', () => {
  listMenu.classList.add('d-none');
  searchIcon.classList.add('d-none');
  formSearch.classList.add('d-block');
})
let searchIcon2 = document.querySelector('.search-icon2');
let searchInput2 = document.querySelector('.search-text2')
let formSearch2 = document.querySelector('.search-form2');

searchIcon2.addEventListener('click', () => {

  searchIcon2.classList.add('d-none');
  formSearch2.classList.add('d-block');
})
window.addEventListener('click', function (e) {
  if (!document.querySelector('.search-icon').contains(e.target) && !document.querySelector('.search-text').contains(e.target) && !document.querySelector('.search-icon2').contains(e.target) && !document.querySelector('.search-text2').contains(e.target) ) {
    listMenu.classList.remove('d-none');
    searchIcon.classList.remove('d-none');
    formSearch.classList.remove('d-block'); 
    searchIcon2.classList.remove('d-none');
    formSearch2.classList.remove('d-block');
  }
});

// ------------------------CAROUSEL----------------------------

let carouselList = document.querySelectorAll('.dot');
let selectedIndex = 0;

carouselList.forEach((item, index) => {
  item.addEventListener('click', () => {
    selectedIndex = index;
    let urlBackground = pickBackground(selectedIndex);
    changeBackground(urlBackground);
    carouselList[selectedIndex].classList.add('selected');
  })
})

let body = document.querySelector('body');
function changeBackground(urlBackground) {
  document.querySelector('.selected')?.classList.remove('selected');
  homeBg.style.opacity = 0;
  homeBg.style.backgroundImage = 'none';
  homeBg.style.backgroundImage = urlBackground;
  homeBg.style.opacity = 1;

}
function pickBackground(index) {
  if (index == 0) {
    return "url('./image/background-1.jpg')";
  } else if (index == 1) {
    return "url('./image/background-2.jpg')";
  } else {
    return "url('./image/background-3.jpg')";
  }
}
function autoChange() {
  setInterval(() => {
    if (window.location.href.includes('index.html')) {
      selectedIndex++;
      if (selectedIndex > 2) {
        selectedIndex = 0;
      }
      let urlBackground = pickBackground(selectedIndex);
      changeBackground(urlBackground);
      carouselList[selectedIndex].classList.add('selected');
    }
  },
    4000);
}
autoChange();

//------------------------------ PRODUCT PAGE ------------------------------------
let cansList = [{
  name: 'bery', urlBg: "url('./image/bg-blue.png')", mobile: './image/bery.png', detailImg: './image/berry-detail.png', urlBigCans: './image/bluebery.png', color: '#212C68', title: 'Fresh blueberry juice', price: '70.000VND/1 cans', content: "<b>Uses</b>: Helps strengthen bones, helps lower blood pressure, Control diabetes, prevent cardiovascular disease, Improve mental health, ....<br> <b>Ingredients</b>: Pure Vietnamese water, concentrated vietnamese water, acidity regulator (330, 33ii, Vitamin C)."
}, {
  name: 'kiwi', mobile: './image/kiwi.png', urlBg: "url('./image/kiwi-bg.png')", detailImg: './image/kiwi-detail.png', urlBigCans: './image/Kiwibig.png', color: '#3A6425', price: '20.000VND/1 cans', title: 'Fresh Kiwi Juice', content: "<b>Uses</b>: Helps strengthen bones, helps lower blood pressure, Control diabetes, prevent cardiovascular disease, Improve mental health, ....<br> <b>Ingredients</b>: Pure Vietnamese water, concentrated vietnamese water, acidity regulator (330, 33ii, Vitamin C)."
},
{
  name: 'melon', mobile: './image/melon.png', urlBg: "url('./image/water-melon-bg.png')", detailImg: './image/melon-detail.png', urlBigCans: './image/Melonbig.png', color: '#7E383B', price: '20.000VND/1 cans', title: 'Fresh Melon Juice', content: "<b>Uses</b>: Helps strengthen bones, helps lower blood pressure, Control diabetes, prevent cardiovascular disease, Improve mental health, ....<br> <b>Ingredients</b>: Pure Vietnamese water, concentrated vietnamese water, acidity regulator (330, 33ii, Vitamin C)."
}
  , {
  name: 'lime', mobile: './image/lime.png', urlBg: "url('./image/lime-bg.png')", detailImg: './image/lime-detail.png', urlBigCans: './image/Limebig.png', color: '#3C4A2E', price: '20.000VND/1 cans', title: 'Fresh Lime Juice', content: "<b>Uses</b>: Helps strengthen bones, helps lower blood pressure, Control diabetes, prevent cardiovascular disease, Improve mental health, ....<br> <b>Ingredients</b>: Pure Vietnamese water, concentrated vietnamese water, acidity regulator (330, 33ii, Vitamin C)."
},
{
  name: 'orange', mobile: './image/orange.png', urlBg: "url('../image/orange-bg.png')", detailImg: 'image/orange-details.png', urlBigCans: 'image/Orangebig.png', color: '#865030', price: '20.000VND/1 cans', title: 'Fresh Orange Juice', content: "<b>Uses</b>:Supplement vitamin C,dispell all feellings of faituge and stress immediately<br> <b>Ingredients</b>: Orange juice atomized orange juice concentrate, acditict regulatero (330, 33ill, Vitamin C)."
}
]
let bigCans = document.querySelector('.big-cans img')
let cansItems = document.querySelectorAll('.cans-item')
let selectedFruit = cansList[0];
let amount = document.querySelector('.middle');
let bigCansMobile = document.querySelector('.mobile-cans-show img')
// amount.textContent='1';
cansItems.forEach((item) => {
  item.addEventListener('click', () => {
    let fruitType = item.getAttribute("data-fruit-type");
    selectedFruit = cansList.find(fruit => fruit.name == fruitType)
    console.log(selectedFruit)
    productItem.style.backgroundImage = selectedFruit.urlBg;
    productItem.style.backgroundColor = selectedFruit.color
    bigCans.src = selectedFruit.urlBigCans;
    bigCansMobile.src = selectedFruit.mobile;
  })
})

let price = document.querySelector('.price');
let wrap = document.querySelector('.wrap');
let detail = document.querySelector('.product-detail-img');
function setupDetailPage() {
  let content = document.createElement('div');
  content.className = 'content text-left px-90'
  content.innerHTML = `<p class="title font-size-34 text-white inter-font weight-bold-700">${selectedFruit.title}</p><div clas="star"><img src="image/Star.png" alt="" class="mt-20"><img src="image/Star.png" alt=""><img src="image/Star.png" alt=""><img src="image/Star.png" alt=""><img src="image/Star.png" alt=""></div> <small class="description interlight-font font-size-20 text-white inter-font d-inline-block mt-20">${selectedFruit.content}</small>`
  wrap.insertBefore(content, detail)
  amount.textContent = '1';
}
let orderButton = document.querySelector('.order');
let productList = document.querySelector('.product-list');
let productDetail = document.querySelector('.product-detail');
let productDetailMobile = document.querySelector('.product-detail-mobile img');
orderButton.addEventListener('click', () => {
  productList.classList.add('d-none');
  productDetail.classList.add('d-block');
  productDetailMobile.src=selectedFruit.detailImg
  
  setupDetailPage();
 
  let detailImg = document.querySelector('.product-detail-img img');
  productDetail.style.backgroundImage = selectedFruit.urlBg;
  productDetail.style.backgroundColor = selectedFruit.color
  detailImg.src = selectedFruit.detailImg
  price.textContent = selectedFruit.price
})
let backButton = document.querySelector('.back');
backButton.addEventListener('click', () => {
  productList.classList.remove('d-none');
  productDetail.classList.remove('d-block');
  checkout.classList.remove('d-block');
  wrap.removeChild(document.querySelector('.content.text-left.px-90'))

})

let plus = document.querySelector('.right');
let minus = document.querySelector('.left');
plus.addEventListener('click', () => {

  let quantity = parseInt(amount.textContent);
  let totalPrice = parseInt(selectedFruit.price);
  quantity++;
  amount.textContent = quantity;
  price.textContent = quantity * totalPrice + '.000VND/1 cans';
})
minus.addEventListener('click', () => {
  let quantity = parseInt(amount.textContent);
  let totalPrice = parseInt(selectedFruit.price);

  if (quantity == 1) {
    return;
  }
  quantity--;
  amount.textContent = quantity;
  price.textContent = quantity * totalPrice + '.000VND/1 cans';
})
let cart = document.querySelector('.cart');
let checkout = document.querySelector('.checkout');
let close = document.querySelector('.close');
let plus2 = document.querySelector('.right2');
let minus2 = document.querySelector('.left2');
let middle2 = document.querySelector('.middle2');
let priceCart = document.querySelector('.priceCart');
cart.addEventListener('click', () => {
  let totalText = document.querySelector('.totalText');
  let totalPrice = document.querySelector('.totalPrice');
  checkout.classList.add('d-block');
  let cartContent = document.querySelector('.cart-content img');
  let title = document.querySelector('.cart-content p');
  totalText.textContent=selectedFruit.title
  cartContent.src=selectedFruit.mobile
 
  title.textContent=selectedFruit.title
  priceCart.textContent=price.textContent
  // totalText.textContent=selectedFruit.title
  middle2.textContent=parseInt(amount.textContent);
})
close.addEventListener('click', () => {
  checkout.classList.remove('d-block');
})
let quantity = parseInt(amount.textContent);

let totalPrice = document.querySelector('.totalPrice');
plus2.addEventListener('click', () => {
  let totalPrice = parseInt(selectedFruit.price);
  quantity++;
  console.log(quantity)
  middle2.textContent = quantity;
  priceCart.textContent = quantity * totalPrice + '.000VND/1 cans';
})
minus2.addEventListener('click', () => {

  let totalPrice = parseInt(selectedFruit.price);
  if (quantity == 1) {
    return;
  }
  quantity--;
  middle2.textContent = quantity;
  priceCart.textContent = quantity * totalPrice + '.000VND/1 cans';
})


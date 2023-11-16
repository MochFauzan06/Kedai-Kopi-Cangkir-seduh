// toggle (yang tadi ada jadi gak ada, yang tadi gak ada yadi ada) class active
const navbarnav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarnav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active search
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

// ketika menu search diklik
document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");

  //biar search kursor menulis langsung aktif
  searchbox.focus();
  // biar diklik kemana mana gak lari2
  e.preventDefault();
};


// toggle class active shopping cart
const shoppingcart = document.querySelector(".shopping-cart");

// ketika menu shopping cart diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingcart.classList.toggle("active");

  // biar diklik kemana mana gak lari2
  e.preventDefault();
};


// klik diluar sidebar menghilangkan nav nya
const hamburger = document.querySelector("#hamburger-menu");
const search = document.querySelector("#search-button");
const sc = document.querySelector('#shopping-cart-button') 
// maksude sc artinya (shopping-cart)


document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
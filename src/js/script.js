const hamburger = document.querySelector(".hamburg"),
      menu = document.querySelector(".menu"),
      closeBtn = document.querySelector(".menu__close"),
      link = document.querySelector(".menu__items_link");

hamburger.addEventListener("click", function () {
    menu.classList.add("active");
})
closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
})
link.addEventListener("click", function () {
    menu.classList.remove("active");
})
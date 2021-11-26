// const listItems = [...document.querySelectorAll(".menu__list-item")];
const menuList = document.querySelector(".menu__list");
const burgerBtn = document.querySelector(".burger-btn");
const hideBtn = document.querySelector(".hide-btn");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("burger-btn")) {
    console.log("burger click");
    burgerBtn.classList.toggle("burger-btn--hidden");
    hideBtn.classList.toggle("hide-btn--hidden");
    menuList.classList.toggle("menu__list--hidden");
  } else if (
    !e.target.closest(".menu__list") &&
    !menuList.classList.contains("menu__list--hidden")
  ) {
    burgerBtn.classList.toggle("burger-btn--hidden");
    hideBtn.classList.toggle("hide-btn--hidden");
    menuList.classList.toggle("menu__list--hidden");
  }
});

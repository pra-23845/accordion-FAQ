"use strict";
const accordionItems = document.querySelectorAll(".accordion__item");
console.log(accordionItems);

accordionItems.forEach((item) => {
  const questions = item.querySelector(".accordion__question");

  const imgMinus = item.querySelector(".accordion__logo-minus");
  const imgPlus = item.querySelector(".accordion__logo-plus");

  questions.addEventListener("click", () => {
    for (let i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});

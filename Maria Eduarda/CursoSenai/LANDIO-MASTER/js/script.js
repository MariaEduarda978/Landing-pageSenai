'use strict'

 /**
  * navbar variables
  */
 const navToggleBtn = document.querySelector("[data-nav-Toggle-btn]")
 const header = document.querySelector("[data-header}")

 navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("active");
})
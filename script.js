const btnShareEL = document.querySelector(".btn-share");
const bottomContainerEl = document.querySelector(".bottom-container");

btnShareEL.addEventListener("click", function () {
  bottomContainerEl.classList.toggle("open");
});

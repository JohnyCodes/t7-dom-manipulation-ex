//Write your own code here
//DON'T touch any other files!
const allBr = document.querySelectorAll("br");
allBr.forEach((brEl) => {
  brEl.remove();
});

const allSections = document.querySelectorAll("section");
allSections.forEach((secEl) => {
  secEl.classList.add("filled");
  secEl.previousElementSibling.remove();
});

// const allSections = document.querySelectorAll("section");
// allSections.forEach((secEl) => {
//   secEl.classList.add("filled");
// });

// const allDivs = document.querySelectorAll("div");
// console.log(allDivs);
// // allDivs.forEach((divEl) => {
// //   divEl.remove();
// // });

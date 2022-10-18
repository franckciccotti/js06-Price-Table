const checkBox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const bas = document.querySelector(".basic");
const pro = document.querySelector(".prof");
const mas = document.querySelector(".master");

slider.addEventListener("click", () => {
  if (!checkBox.checked) {
    [bas.textContent, pro.textContent, mas.textContent] = [
      "120",
      "240",
      "360",
    ];
  } else {
    [bas.textContent, pro.textContent, mas.textContent] = [
      "9.99",
      "19.99",
      "29.99",
    ];
  }
});

// pour js, par défaut elle est checked
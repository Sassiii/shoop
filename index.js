console.log("testttttt");

const btnsPlus = document.querySelectorAll(".btn-plus");
const btnsMinus = document.querySelectorAll(".btn-moins");
const btnsRemove = document.getElementsByClassName("btn-delete");
const like = document.getElementsByClassName("fas");
const qtes = document.querySelectorAll(".quantity");

for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML < 100) {
      btnsPlus[i].previousElementSibling.innerHTML =
        +btnsPlus[i].previousElementSibling.innerHTML + 1;
    } else {
      alert("100 is the maximum quntity");
    }
  });
}

// -----------------------------------------------------------------------------------------------------
for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    btnsMinus[i].childNodes[1].style.fill = "red!important";
    if (btnsMinus[i].nextElementSibling.innerHTML > 0) {
      btnsMinus[i].nextElementSibling.innerHTML--;
    }
  });
}
// -----------------------------------------------------------------------------------------------------
// remove
for (let i = 0; i < btnsRemove.length; i++) {
  btnsRemove[i].addEventListener("click", function () {
    btnsRemove[i].parentElement.parentElement.remove();
  });
}
// -----------------------------------------------------------------------------------------------------
// like button

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    like[i].classList.toggle("btn-like");
  });
}
// -------------------------------------------------------------
// prix $

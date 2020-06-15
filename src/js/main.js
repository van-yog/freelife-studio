"use strict";

// Toggle button with social contacts Telegram/Viber/Messenger
let social = document.querySelector("#social-btn__toggle");

social.addEventListener("click", () => {
  let socialNetworks = document.querySelectorAll(".social-btn__a");

  socialNetworks.forEach((elem, i) => {
    if (!elem.classList.contains("social-btn__show")) {
      elem.classList.add("social-btn__show");
      setTimeout(() => {
        let right = 90 + 60 * i + "px";
        elem.style.right = right;
      }, 20);
    } else {
      elem.style.right = "30px";
      setTimeout(() => {
        elem.classList.remove("social-btn__show");
      }, 500);
    }
  });
});

// Change text

let words = ["сайты", "лендинги", "рекламные кампании"],
  currentStep = 0,
  textEl = document.querySelector(".create__change-text"),
  oldWord = "";

setTimeout(changeWord, 1500);

function changeWord() {
  oldWord = textEl.innerHTML;

  // check if there is a word atm or not
  if (oldWord.length < 1) {
    if (currentStep !== words.length - 1) {
      currentStep++;
    } else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 1400);
  }
}

function deleteWord() {
  let WordLength = oldWord.length,
    currentWord = textEl.innerHTML,
    currentLength = currentWord.length;

  // The word is deleted so, start adding in the new one
  if (currentLength < 1) {
    changeWord();

    return;
  }

  // Remove a charachter
  textEl.innerHTML = currentWord.substring(0, currentLength - 1);

  setTimeout(deleteWord, 200);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
    currentLength = currentWord.length,
    nextWord = words[currentStep],
    nextWordLength = nextWord.length;

  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }

  if (nextWord === "рекламные кампании") {
    console.log("company");
    textEl.classList.add("create__slogan-company");
  } else {
    console.log("no-company");
    textEl.classList.remove("create__slogan-company");
  }
  // add a charachter
  textEl.innerHTML = nextWord.substring(0, currentLength + 1);

  setTimeout(addNextWord, 200);
}

// Кнопка Наши Услуги

let create__btn = document.querySelector(".create__btn");

create__btn.addEventListener("click", () => {
  let element = document.querySelector(".decision");
  element.scrollIntoView({ behavior: "smooth" });
});

// Чтобы крутились колесики

window.addEventListener("scroll", startAndDel);

function startAndDel() {
  // console.log(window.scrollY);

  if (window.scrollY >= 630) {
    console.log("Мы стартуем анимацию");

    let imgProperty = document.querySelectorAll(".decision-img__property");
    imgProperty.forEach((elem, i) => {
      setTimeout(() => {
        elem.classList.add("rotate__animation");
      }, i * 1000);
    });

    let imgBg = document.querySelectorAll(".decision-img__bg");
    imgBg.forEach((elem, i) => {
      setTimeout(() => {
        elem.classList.add("rotate-zoom__animation");
      }, i * 1000);
    });

    let imgBgDark = document.querySelectorAll(".decision-img__bg-dark");
    imgBgDark.forEach((elem, i) => {
      setTimeout(() => {
        elem.classList.add("rotate-zoom__animation-bg");
      }, i * 1000);
    });

    // Удалить прослушку события
    window.removeEventListener("scroll", startAndDel);
  }
}

let info = document.querySelector(".contact__info");
info.addEventListener("mouseover", () => {
  let popUp = document.querySelector(".contact__info-pop-up");
  popUp.style = "opacity:1;";
});

info.addEventListener("mouseout", () => {
  let popUp = document.querySelector(".contact__info-pop-up");
  popUp.style = "opacity:0;";
});

"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

/* ✅ YES BUTTON */
yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay! I Love You!! 💗";
  changeImage("yes");

  createConfetti();
  startHearts();

  // Hide buttons ONLY on mobile
  if (window.matchMedia("(max-width: 768px)").matches) {
    btnContainer.classList.add("hide-mobile");
  }
});

/* ❌ NO BUTTON */
noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();

    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  if (yesButtonSize < 2) {
    yesButtonSize *= 1.2;
    yesBtn.style.transform = `scale(${yesButtonSize})`;
  }
}

function shrinkNoButton() {
  noButtonSize *= 0.9;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Are you sure? 🥺",
    "Nan please 🥹",
    "Don't do this to me 😭",
    "You're breaking my heart 💔",
    "I'm gonna cry... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/cJhzOTWcYCoAAAAj/%E5%BF%AB%E4%B9%90-%E8%B7%B3%E8%88%9E.gif"
      : tontonGifs[image];
}

/* 💖 HEARTS */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 400);
}

/* 🎉 CONFETTI */
function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 1.5 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

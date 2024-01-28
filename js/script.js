"use strict";

const gallerySwiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2.1,
    },
  },
});

const feedbackSwiper = new Swiper(".feedbacks-swiper", {
  grabCursor: true,
  speed: 600,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
});

//! TIMER
const timerBlock = document.querySelectorAll(".timer-flexbox");
const daysBlock = document.querySelectorAll(".js-days");
const hoursBlock = document.querySelectorAll(".js-hours");
const minutesBlock = document.querySelectorAll(".js-minutes");
// const secondsBlock = document.querySelectorAll(".js-seconds")

let date = new Date("June 01 2024 00:00:00");

const counts = () => {
  let now = new Date();
  let gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  // let seconds = Math.floor(gap / 1000) % 60;

  // seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  if (gap < 0) {
    timerBlock.forEach((t) => {
      t.textContent = "Время вышло :(";
    });
    return;
  }

  daysBlock.forEach((d) => {
    d.textContent = days;
  });

  hoursBlock.forEach((h) => {
    h.textContent = hours;
  });

  minutesBlock.forEach((m) => {
    m.textContent = minutes;
  });

  // secondsBlock.forEach((s) => {
  //   s.textContent = seconds;
  // })
};

setInterval(counts, 1000);

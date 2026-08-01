"use strict";

const quotes = [
  {
    text: "Where there is life, there is hope.",
    author: "Stephen Hawking"
  },
  {
    text: "However difficult life may seem, there is always something you can do, and succeed at.",
    author: "Stephen Hawking"
  },
  {
    text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Jane Goodall"
  },
  {
    text: "Never be limited by other people’s limited imaginations.",
    author: "Mae Jemison"
  },
  {
    text: "I don’t have a feeling of inferiority. Never had. I’m as good as anybody, but no better.",
    author: "Katherine Johnson"
  },
  {
    text: "We had to find a way and we did.",
    author: "Margaret Hamilton"
  },
  {
    text: "Nothing is too wonderful to be true, if it be consistent with the laws of nature.",
    author: "Michael Faraday"
  },
  {
    text: "Optimism is the faith that leads to achievement; nothing can be done without hope.",
    author: "Helen Keller"
  },
  {
    text: "Never bend your head. Always hold it high. Look the world straight in the face.",
    author: "Helen Keller"
  },
  {
    text: "All adventures, especially into new territory, are scary.",
    author: "Sally Ride"
  },
  {
    text: "You are the only person who is exactly like you, so in a way you’ve already won in this world.",
    author: "Fred Rogers"
  },
  {
    text: "It is important to first love yourself.",
    author: "Maya Angelou"
  },
  {
    text: "I worked hard, persevered, and eventually made it to where I am despite many obstacles along the way.",
    author: "Bekah Sosland Siegfriedt"
  },
  {
    text: "Dream and never give up.",
    author: "Adriana Ocampo"
  },
  {
    text: "No matter what challenges you face, keep pushing forward and don’t give up.",
    author: "Veronica Pruneda"
  },
  {
    text: "I know I should work hard, keep learning and asking questions, and above all never give up on life.",
    author: "Judy Ballance"
  },
  {
    text: "Caring for myself is not self-indulgence, it is self-preservation.",
    author: "Audre Lorde"
  },
  {
    text: "Weakness, fear and hopelessness died. Strength, power and courage was born.",
    author: "Malala Yousafzai"
  },
  {
    text: "Even if the walls are tall, our hopes rise higher.",
    author: "Pashtana"
  },
  {
    text: "Please know that you are not alone.",
    author: "Aazosh"
  },
  {
    text: "Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie"
  },
  {
    text: "Believe in yourself and seek out those that believe in you and support you.",
    author: "Sharon Williams"
  },
  {
    text: "Believe in yourself, and trust that if you put in the work, the results will follow.",
    author: "Dado Banatao"
  },
  {
    text: "You belong here.",
    author: "Kristala Prather"
  },
  {
    text: "Don’t let anybody tell you that you can’t do something.",
    author: "Katie Bouman"
  },
  {
    text: "If you need help, please ask. Everybody, and I mean everybody, needs help sometimes.",
    author: "L. Rafael Reif"
  }
];

const bumiPhotos = [
  "./bumi-1.png",
  "./bumi-2.png",
  "./bumi-3.jpeg",
  "./bumi-4.jpeg",
  "./bumi-5.jpeg",
  "./bumi-6.jpeg"
];

const bumiButton = document.querySelector("#bumi-button");
const bumiImage = document.querySelector(".bumi-frame img");
const bubble = document.querySelector("#speech-bubble");
const messageText = document.querySelector("#message-text");
const messageAuthor = document.querySelector("#message-author");

let previousQuote = "";
let photoIndex = 0;

function pickQuote() {
  let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  while (nextQuote.text === previousQuote) {
    nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  previousQuote = nextQuote.text;
  return nextQuote;
}

function bumiSupport() {
  const quote = pickQuote();
  messageText.textContent = quote.text;
  messageAuthor.textContent = `— ${quote.author}`;

  photoIndex = (photoIndex + 1) % bumiPhotos.length;
  bumiImage.src = bumiPhotos[photoIndex];
  bumiImage.alt = `Bumi photo ${photoIndex + 1} of ${bumiPhotos.length}`;
  bumiImage.classList.remove("is-changing");

  bumiButton.classList.remove("is-boinging");
  bubble.classList.remove("is-talking");
  void bumiButton.offsetWidth;
  bumiImage.classList.add("is-changing");
  bumiButton.classList.add("is-boinging");
  bubble.classList.add("is-talking");
}

bumiButton.addEventListener("click", bumiSupport);
bumiPhotos.slice(1).forEach((photo) => {
  const preload = new Image();
  preload.src = photo;
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

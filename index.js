const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
  title:
    "Jovem Dionisio - ACORDA PEDRINHO",
  artist: "Jovem Dionisio",
  cover: "imagens/pedrinho.jpg",
  file: "sRockstar.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src = "Acorda Pedrinho.mp3";


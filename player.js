window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),

    data: {
        title:
            "Post Malone - Rockstarft. 21 Savage",
        artist: "Post Malone",
        cover: "imagens/rockstar.jpg",
        file: "Rockstar.mp3"
    },

    start() {
        this.cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = "Rockstar.mp3";
    }
}

player.start();
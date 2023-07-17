let gintamaImages = [
    "https://e0.pxfuel.com/wallpapers/190/497/desktop-wallpaper-gintama-anime-gintama.jpg",
    "https://cdn.wallpapersafari.com/73/84/gY7m9a.png",
    "https://mcdn.wallpapersafari.com/medium/90/75/v8oMVK.jpg",
    "https://mcdn.wallpapersafari.com/medium/99/35/JyONoB.jpg",
    "https://mcdn.wallpapersafari.com/medium/88/41/JXwxho.jpg",
    "https://mcdn.wallpapersafari.com/medium/95/4/wIhCA8.jpg",
    "https://mcdn.wallpapersafari.com/medium/27/53/uKHTzD.jpg",
    "https://mcdn.wallpapersafari.com/medium/7/39/v2l4RQ.jpg",
    "https://mcdn.wallpapersafari.com/medium/54/85/7H38Bz.jpg",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * gintamaImages.length);
    imgs[i].src = gintamaImages[randomImg];
}

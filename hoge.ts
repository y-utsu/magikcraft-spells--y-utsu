const magik = magikcraft.io;

function hoge(placeName) {
    const there = magik.memento.getItem(placeName);
    if (there) {
        magik.ianuae(there);
    }
}
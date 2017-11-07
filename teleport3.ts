const magik = magikcraft.io;

function teleport3(placeName) {
    const there = magik.memento.getItem(placeName);
    if (there) {
        magik.ianuae(there);
    }
}
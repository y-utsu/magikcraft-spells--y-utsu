const magik = magikcraft.io;

function teleport(placeName) {
    const there = magik.memento.getItem(placeName);
    if (there) {
        magik.ianuae(there);
    }
}
const magik = magikcraft.io;

function tel(placeName) {
    const there = magik.memento.getItem(placeName);
    if (there) {
        magik.ianuae(there);
    }
}
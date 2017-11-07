const magik = magikcraft.io;

function savePortal(placeName) {
    const here = magik.hic();
    magik.memento.setItem(placeName,here);
}
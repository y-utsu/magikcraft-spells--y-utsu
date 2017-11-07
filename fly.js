const magik = magikcraft.io;

function fly(duration = -1) {
    if (duration == -1) {
        magik.volare();
        magik.dixit("undefined");
    } else {
        magik.volare(duration);
        magik.dixit(duration);
    }
}
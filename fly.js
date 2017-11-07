const magik = magikcraft.io;

function fly(duration = undefined) {
    if (duration == undefined) {
        magik.volare();
        magik.dixit("undefined");
    } else {
        magik.volare(duration);
        magik.dixit(duration);
    }
}
const magik = magikcraft.io;

function fly(seconds = -1) {
    if (seconds == -1) {
        magik.volare();
        magik.dixit("undefined");
    } else {
        // 10秒だと duration が大体 200
        magik.volare(seconds*20);
        magik.dixit(seconds*20);
    }
}
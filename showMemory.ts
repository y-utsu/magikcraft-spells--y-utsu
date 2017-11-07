const magik = magikcraft.io;

function showMemory() {
     const thing = magik.exmemento();
     for (var key in thing) {
         magik.dixit(thing[key]);
     }
}
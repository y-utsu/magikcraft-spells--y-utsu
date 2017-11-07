const magik = magikcraft.io;

function showMemory() {
     const memory = magik.exmemento();
     for (var key in memory) {
        magik.dixit(key);
        magik.dixit(memory[key]);
     }
}
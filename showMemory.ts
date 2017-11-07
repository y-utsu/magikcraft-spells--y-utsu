const magik = magikcraft.io;

function showMemory() {
     const memory = magik.exmemento();
     var count = 0;
     for (var key in memory) {
        magik.dixit(count + "");
        magik.dixit(key);
        magik.dixit(memory[key]);
        count++;
     }
}
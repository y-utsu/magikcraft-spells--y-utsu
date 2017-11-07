const magik = magikcraft.io;

function saveExmemento() {
	
    const memory = magik.exmemento();
    memory["a"] = "AAA";
    memory["b"] = "BBB";
    memory["c"] = "CCC";
    magik.dixit(memory);
}

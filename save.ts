const magik = magikcraft.io;

function save() {
	
    magik.memento.setItem("a","AA");
    const item = magik.memento.getItem("a");
    magik.dixit(item);
}

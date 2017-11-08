const magik = magikcraft.io;

function light() {
    magik.dixit("light");
    var counter = 10;
    var lit = 
        function (){
            magik.dixit("counter:"+counter);
            magik.noxvida();
            if (0 < counter){
                magik.setTimeout(lit, 10000);
            }
            counter--;
        };
    lit();
}


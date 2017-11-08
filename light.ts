const magik = magikcraft.io;

function light() {
    var counter = 3;
    var lit = 
        function (){
            magik.dixit("counter:"+counter);
            magik.noxvida();
            if (0 <= counter){
                setTimeout(lit, 10000);
            }
            counter--;
        };
    lit;
}


var cartaJugador = Math.floor(Math.random() * 12) + 1; 
var cartaBanca  = Math.floor(Math.random() * 12) + 1; 
var puntuacion = 0;

function inicia(a,b) {
   
    x = document.getElementById("cartaJugador").innerHTML = `La carta del jugador es ${a} `;
    y = document.getElementById("cartaBanca").innerHTML = `La carta de la banca es ? `;
    z = document.getElementById("puntuacion").innerHTML = `La puntuacion del usuario es ${b}`;
   

}

inicia(cartaJugador, puntuacion);

function juegoMenor(a,b,c) {
    
    if (a<b) {
        c = c + 1;
        document.getElementById("puntuacion").innerHTML = `La puntuacion del usuario es ${c}`;
       

    }else{
        c = c - 1 
        document.getElementById("puntuacion").innerHTML = `La puntuacion del usuario es ${c}`;
       
    }
  

}


function juegoMayor(a,b,c) {
      
    if (a>b) {
        c = c + 1;
        document.getElementById("puntuacion").innerHTML = `La puntuacion del usuario es ${c}`;
       
    }else{
        c = c - 1 
        document.getElementById("puntuacion").innerHTML = `La puntuacion del usuario es ${c}`;
      
    }
    

}

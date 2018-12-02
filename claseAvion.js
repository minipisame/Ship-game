// Array donde guardaremos todos los objetos del juego
var asteroides = [];
var puntos = [];
var disparos = [];
var contadorp = 0;
var contadora = 0;
var puntuacion = 0;
var existe = true;
// Clase avion que es nuestro personaje principal en este juego 
class Avion {
	constructor(posx,posy,ancho,alto){
		this.posx= posx;
		this.posy = posy;
		this.ancho = ancho;
		this.alto = alto;
		this.avion= document.createElementNS("http://www.w3.org/2000/svg","rect");
		this.avion.setAttribute("x",this.posx);
		this.avion.setAttribute("y",this.posy);
		this.avion.setAttribute("width",this.ancho);
		this.avion.setAttribute("height",this.alto);
		this.avion.setAttribute("id","av");
		document.getElementById("svg").appendChild(this.avion);
		  this.moviendoDerecha = false;
        this.moviendoArriba = false;
        this.moviendoIzquierda = false;
        this.moviendoAbajo = false;
        this.puedeDisparar = true;

}


dibuja(){
				this.avion.setAttribute("x",this.posx);
		this.avion.setAttribute("y",this.posy);
	}

 mover(direccion){
        switch(direccion){
            case "abajo":
	if(avion.posy >= 550){
	}
	else{
	avion.posy = avion.posy + 5;
}

                break;
            case "arriba":
            	if(avion.posy <= 0){
	}
	else{
	avion.posy = avion.posy - 5;
}
                break;
            case "izquierda":
              if(avion.posx <= 0){
	}
	else{
	avion.posx = avion.posx -5
}
                break;
            case "derecha":
              	if(avion.posx >= 550){
	}
	else{


	avion.posx = avion.posx +5
}
                break;
        }
        avion.dibuja();
    }


	
}
// Clase disparo para eliminar objetos Asteroide

class disparo{
	constructor(posx,posy,vx,vy,radio){
		this.posx = posx;
		this.posy = posy;
		this.vx = vx;
		this.vy =vy;
		this.radio = radio;
		this.disparo= document.createElementNS("http://www.w3.org/2000/svg","circle");
		this.disparo.setAttribute("cx",this.posx);
		this.disparo.setAttribute("cy",this.posy);
		this.disparo.setAttribute("r",this.radio);
		this.disparo.setAttribute("x",this.vx);
		this.disparo.setAttribute("y",this.vy);
		this.disparo.setAttribute("fill","black");
		document.getElementById("svg").appendChild(this.disparo);
	}
	dibuja(){

		this.disparo.setAttribute("cy",this.posy);

	}
	mover(x){ 
		
		
		
			this.posy = this.posy - this.vy;
		
		

if(this.posy <= -10){
	disparos.splice(x, 1);
	document.getElementById("svg").removeChild(this.disparo);

}
	 

}


	}

// Clase punto que genera un objeto punto que serviran para conseguir puntos en el juego
class punto {
	constructor(posx,posy,vx,vy,radio){
		this.posx = posx;
		this.posy = posy;
		this.vx = vx;
		this.vy =vy;
		this.radio = radio;
		this.punto= document.createElementNS("http://www.w3.org/2000/svg","circle");
		this.punto.setAttribute("cx",this.posx);
		this.punto.setAttribute("cy",this.posy);
		this.punto.setAttribute("r",this.radio);
		this.punto.setAttribute("x",this.vx);
		this.punto.setAttribute("y",this.vy);
		this.punto.setAttribute("fill","red");
		document.getElementById("svg").appendChild(this.punto);
	}

	dibuja(){
				this.punto.setAttribute("cx",this.posx);
		this.punto.setAttribute("cy",this.posy);
	}
	// Funcion para mover los puntos a traves de la pantalla
 mover(){
 	
	this.posy = this.posy + this.vy;

	
	
}
// Funcion que detecta el impacto del avion con un punto para recolectarlo
collisionAP(x){
	


		if((avion.posy <= this.posy && avion.posy+50 >= this.posy) && (avion.posx+50 >= this.posx && avion.posx <= this.posx) ){
			puntos.splice(x, 1);
			document.getElementById("svg").removeChild(this.punto);
			puntuacion++;
			


}
}



}
// Clase asteroide 
class asteroide{
	constructor(posx,posy,vx,vy,radio){
		this.posx = posx;
		this.posy = posy;
		this.vx = vx;
		this.vy =vy;
		this.radio = radio;
		this.asteroide= document.createElementNS("http://www.w3.org/2000/svg","circle");
		this.asteroide.setAttribute("cx",this.posx);
		this.asteroide.setAttribute("cy",this.posy);
		this.asteroide.setAttribute("r",this.radio);
		this.asteroide.setAttribute("x",this.vx);
		this.asteroide.setAttribute("y",this.vy);
		this.asteroide.setAttribute("fill","grey");
		document.getElementById("svg").appendChild(this.asteroide);
	}
		dibuja(){
				this.asteroide.setAttribute("cx",this.posx);
		this.asteroide.setAttribute("cy",this.posy);
	}
	// Funcion para mover los puntos a traves de la pantalla
 mover(x){

	this.posy = this.posy + this.vy;
	if(this.posy >= 600){
	asteroides.splice(x, 1);
	document.getElementById("svg").removeChild(this.asteroide);
}
}

collisionAA(){
// Funcion que detecta el impacto de un asteroide con el avion 

	

		if((avion.posy <= this.posy && avion.posy+50 >= this.posy) && (avion.posx+50 >= this.posx && avion.posx <= this.posx) ){
			document.getElementById("svg").removeChild(avion.avion);
			existe = false;
			terminarJuego();



						}
				}


}

// Funcion para crear un punto 
function addPunto(){
	
	if(contadorp == 50){


	var p = new punto(Math.random() * (585),10,3,3,10);
	puntos.push(p);
	contadorp = 0;
}
else{
	contadorp++;
}

}
// Funcion para crear un objeto Asteroide 
function addAsteroide(){
	 
 if (contadora == 30){
var a = new asteroide(Math.random() * (585),10,4,4,15);
	asteroides.push(a);
	contadora = 0;
 }
	else{
		contadora++;
	}
}

function crearDisparo(objeto){
	 a = new  disparo(avion.posx+25,avion.posy-30,1,6,10);
	disparos.push(a);
}





function mover(objeto){
	 if(objeto.keyCode == 87){
            avion.moviendoArriba = true;
        }
        if(objeto.keyCode == 83 ){
            avion.moviendoAbajo = true;
        }
        if(objeto.keyCode == 65){
            avion.moviendoIzquierda = true;
        }
        if(objeto.keyCode == 68 ){
            avion.moviendoDerecha = true;
        }
        if(objeto.keyCode == 81 && avion.puedeDisparar){
         crearDisparo();
            avion.puedeDisparar = false;
        }
}

	function dejarDeMover(objeto){
    
	 if(objeto.keyCode == 87){
            avion.moviendoArriba = false;
        }
        if(objeto.keyCode == 83 ){
            avion.moviendoAbajo = false;
        }
        if(objeto.keyCode == 65){
            avion.moviendoIzquierda = false;
        }
        if(objeto.keyCode == 68 ){
            avion.moviendoDerecha = false;
        }
           if(objeto.keyCode == 81){
            avion.puedeDisparar = true;
        }
}
    
	




//Collision disparo con meteorito
function collisionDA(disparo,meteorito){

if(Object.keys(disparos).length === 0){

}
else{
var dx = disparo.posx - meteorito.posx;
var dy = disparo.posy - meteorito.posy;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < disparo.radio + meteorito.radio) {
    return true;
}

   return false;

}
}
	
//Funcion para comenzar el juego y que genere los objetos de este
function IniciarJuego(){

	
	f = setInterval(bucle,50);

}
function terminarJuego(){
	/*	p = document.createElement("p");
		texto = document.createTextNode(puntuacion);
		p.appendChild(texto);
			fin= document.createElementNS("http://www.w3.org/2000/svg","rect");
			fin.appendChild(p)
		fin.setAttribute("x","250");
		fin.setAttribute("y","250");
		fin.setAttribute("width","50");
		fin.setAttribute("height","50");
		fin.setAttribute("fill","white");
		document.getElementById("svg").appendChild(fin);*/
	

	clearInterval(f);
}
function reiniciarJuego(){
	var elementos = document.querySelectorAll("circle");
	for(var i = 0 ; i< elementos.length;i++){
		document.getElementById("svg").removeChild(elementos[i]);
	}

		for(var i =0;i<asteroides.length;i++){
			asteroides.shift();

		}
			for(var i =0;i<puntos.length;i++){
				puntos.shift();
		}
			for(var i =0;i<disparos.length;i++){
				disparos.shift();
		}
		if(existe == true){
			document.getElementById("svg").removeChild(avion.avion);
		}
		avion = new  Avion(250,550,50,50);
			clearInterval(f);
			puntuacion = 0;
		IniciarJuego();

}
function bucle() {
	 if(avion.moviendoAbajo){
                avion.mover("abajo");
            }
            if(avion.moviendoArriba){
                avion.mover("arriba");
            }
            if(avion.moviendoDerecha){
                avion.mover("derecha");
            }
            if(avion.moviendoIzquierda){
                avion.mover("izquierda");
            }
            
	addPunto();
	addAsteroide();
	

	for(var i =0;i<disparos.length;i++){
		for(var j =0;j<asteroides.length;j++){
			if(collisionDA(disparos[i],asteroides[j])){
				document.getElementById("svg").removeChild(disparos[i].disparo);
				document.getElementById("svg").removeChild(asteroides[j].asteroide);
					disparos.splice(i,1);
				asteroides.splice(j,1);
			}
		}
		if(Object.keys(disparos).length === 0){
}
else{
		disparos[i].mover(i);
		disparos[i].dibuja();
	}
	}

	for(var i =0;i<asteroides.length;i++){
		asteroides[i].collisionAA();
		asteroides[i].mover(i);
		asteroides[i].dibuja();

	}
		for(var i =0;i<puntos.length;i++){
		puntos[i].collisionAP(i);
		if(Object.keys(puntos).length !== 0){
			puntos[i].mover();
		puntos[i].dibuja();
}
		

	}
		document.getElementById("marcador").innerHTML = puntuacion;
}
document.getElementById("marcador").setAttribute('border','solid 1px red');
window.onkeydown = mover;
window.onkeyup = dejarDeMover;
var avion = new Avion(250,550,50,50);
// Array donde guardaremos todos los objetos del juego
var asteroides = [];
var puntos = [];
var disparos = [];
var contadorp = 0;
var contadora = 0;
var muevebarra = false;
var puntuacion = 0;
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

}


dibuja(){
				this.avion.setAttribute("x",this.posx);
		this.avion.setAttribute("y",this.posy);
	}

	mueve(){


	
}
// Clase disparo para eliminar objetos Asteroide
}
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
	


		if(avion.posy <= this.posy && (avion.posx+50 >= this.posx && avion.posx <= this.posx) ){
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
 mover(){

	this.posy = this.posy + this.vy;
}

collisionAA(){
// Funcion que detecta el impacto de un asteroide con el avion 

	

		if(avion.posy <= this.posy && (avion.posx+50 >= this.posx && avion.posx <= this.posx) ){
			document.getElementById("svg").removeChild(avion.avion);
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







 // funcion que detecta el impacto entre un disparo generado por el avion y un asteroide
function impactoAD(){
	


	var asteroide = document.getElementsByClassName("a");
	var disparo = document.getElementsByClassName("disparo")
	for(var i =0; i < asteroide.length ; i++){
		for(var x=0; x<disparo.length;x++){
		var posDy =  parseInt(disparo[x].getAttribute("cy",this.posy));
		var posDx =  parseInt(disparo[x].getAttribute("cx",this.posx));
		var posyI =  parseInt(asteroide[i].getAttribute("cy",this.posy));
		var posyx =  parseInt(asteroide[i].getAttribute("cx",this.posx));
		if(posDy == posyI && posDx == posyx ){
			document.getElementById("svg").removeChild(disparo[x]);
			document.getElementById("svg").removeChild(asteroide[i]);
		}
}

}
}







function crearDisparo(objeto){
	if(objeto.keyCode == 81  ){
		var avion = document.getElementById("av")
	var posyI =  parseInt(avion.getAttribute("y"));
	var posyx =  parseInt(avion.getAttribute("x"));
	  new disparo(posyx+25,posyI-30,1,1,10);
	
	disparar();
}

}





	
	





	function mover(objeto){
	
	if(objeto.keyCode == 81  ){
	
	 a =  new disparo(avion.posx+25,avion.posy-30,1,6,10);
	 disparos.push(a);
}
if(objeto.keyCode == 87  ){
	if(avion.posy <= 0){
	}
	else{
	avion.posy = avion.posy - 10;
}
}
 	if(objeto.keyCode == 83 ){	
	if(avion.posy >= 550){
	}
	else{
	avion.posy = avion.posy + 10;
}
}

if(objeto.keyCode == 65  ){

	if(avion.posx <= 0){
	}
	else{
	avion.posx = avion.posx -10
}
}
if(objeto.keyCode == 68  ){
	if(avion.posx >= 550){
	}
	else{


	avion.posx = avion.posx +10
}
}




}
//Funcion para comenzar el juego y que genere los objetos de este
function IniciarJuego(){

	
	a = setInterval(bucle,50);

}
function terminarJuego(){
		p = document.createElement("p");
		texto = document.createTextNode(puntuacion);
		p.appendChild(texto);
			fin= document.createElementNS("http://www.w3.org/2000/svg","rect");
			fin.appendChild(p)
		fin.setAttribute("x","250");
		fin.setAttribute("y","250");
		fin.setAttribute("width","50");
		fin.setAttribute("height","50");
		fin.setAttribute("fill","white");
		document.getElementById("svg").appendChild(fin);

	clearInterval(a);
}
function bucle() {
	addPunto();
	addAsteroide();
	

	for(var i =0;i<disparos.length;i++){
		disparos[i].mover(i);
		disparos[i].dibuja();
	}
	avion.dibuja();

	for(var i =0;i<asteroides.length;i++){
		asteroides[i].collisionAA();
		asteroides[i].mover();
		asteroides[i].dibuja();

	}
		for(var i =0;i<puntos.length;i++){
		puntos[i].collisionAP(i);
		puntos[i].mover();
		puntos[i].dibuja();

	}
}
window.onkeydown = mover;

var avion = new Avion(250,550,50,50);
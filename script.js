//Variables y Tipos de Datos

let nombre ="And";

let saludo="Hola "+nombre;

console.log(saludo);


//Funciones

function areaTriangulo(){
    let base=4;
    let altura=3;
    console.log("Area Triangulo es: "+((base*altura)/2));
}
areaTriangulo();

function area(){
    let base=14;
    let altura=17;
    console.log("Area Triangulo es: "+((base*altura)/2))
}
area();

function areaCirculo(){
    let radio=6;
    let area=Math.PI*Math.pow(radio,2);
    console.log("Area Circulo es: "+area);
}
areaCirculo();

//Condicionales

function verificarNum(numero){
if(numero>0){
    console.log("El numero "+numero+" es positivo");
}
else{
    console.log("El numero "+numero+" es negativo")
}

}
verificarNum(10);
verificarNum(-1);

//Bucles

for(let i=1;i<=10;i++){
    console.log(i);
}

//boton
const boton=document.querySelector("#mi-boton")
boton.textContent="nuevo texto";

//fondo

const elemento=document.getElementById("elemento");

elemento.addEventListener("click",function(){
elemento.style.backgroundColor='yellow';
});
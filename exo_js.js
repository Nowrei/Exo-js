//exo 1

var x =5;
console.log(x);

//exo2

var a = 5;
var b = 4;

console.log( a + b);
console.log( a - b);
console.log( a * b);
console.log( a / b);

//exo3

var x= "petite peruche";

console.log(x)

//exo4

var a = "coucou";
var b = "petite peruche";

console.log( a+ " " +b);

//exo5

var a = 20;
var b = 30;
console.log ("a est égal à 20");
console.log ("b est égal à 30");
var c = a;
var a = b;
var b = c;

console.log( a, b);

//exo6

var a = 20;
var b = 30;

if (a > b){
   console.log(" La variable a est plus grande que b");
}

else if (b > a){
   console.log(" La variable b est plus grande que a");
}

else{
   console.log("Les variables sont égales: a b");
}

//exo7

var a = 40 ;
var b = 30 ;

function comparaison ( a, b){

   if (a > b){
       console.log(" La variable a est plus grande que b");
   }
   
   else if (b > a){
       console.log(" La variable b est plus grande que a");
   }
   
   else{
       console.log("Les variables sont égales: a b");
   }
}
comparaison ( a, b);

//exo8

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

 console.log(getRandomInt(100));

//exo9

for (i = 0; i < 10; i++) {
   console.log(getRandomInt(100));
}

//exo10
console.log("exo10");
var nombrealeatoire = getRandomInt(100);

while( nombrealeatoire < 90){
   nombrealeatoire = getRandomInt(100);
   console.log(nombrealeatoire);
}
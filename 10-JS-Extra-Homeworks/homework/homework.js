// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz=[]
  for (let key in objeto) {
    matriz.push([key,objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto ={}
  for (i=0;i<string.length;i++){
    var letra = string[i];
    var acumulador = 0;
    for (j=0;j<string.length;j++){
      if(letra === string[j]) {
        acumulador++;
      }
    };
    objeto[letra] = acumulador
  };
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = '';
  var mayusculas = '';
  for (i=0;i<s.length;i++){
    if (s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i]
    }
    else {
      minusculas = minusculas + s[i]
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer 
  //de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var frase = '';
  for (i=0; i<str.length ;i++){
    if (str[i]!==' '){
      palabra = palabra + str[i]
      console.log(palabra)
    }
    else {
      for (j=palabra.length-1; j>-1; j--){
        frase = frase + palabra[j]
        console.log(frase)
      }
      palabra = '';
      frase = frase + str[i]
      console.log(frase)
    }
  }
  for (j=palabra.length-1; j>-1; j--){
    frase = frase + palabra[j]
    console.log(frase)
  }
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var stringDadoVuelta = '';
  var stringDeNumero = numero.toString();
  for (i=stringDeNumero.length-1;i >-1; i--){
    stringDadoVuelta = stringDadoVuelta + stringDeNumero[i]
  } 
  if (stringDadoVuelta == numero) {
    return 'Es capicua'}
    else{
      return 'No es capicua'
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  var palabra = ''
  for (i=0; i<cadena.length; i++){
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
      palabra = palabra + cadena[i]
    }
  }
  return palabra;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


//

let contador = 0;

while (contador < 10) {
    console.log("contador", contador);
    //no se olviden de alterar el contador en cada vuelta
    contador++;
}

//Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces

const imprimirDiezveces = (palabra) => {
    let contador = 0;

    while (contador <10 ) {
        console.log(palabra)
        contador++;
    }
};

imprimirDiezveces("Hola Armando")

//Escribir un programa que pregunte al usuario su edad y muestre
// por pantalla todos los años que ha cumplido (desde 1 hasta su edd)

//Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

const imprimirlatabladeMultiplicar = (numero) => {
    let contador =0;

    while (contador <= 10) {
        console.log(numero*contador);
        contador++;
    }
};

console.log("table 1");
imprimirlatabladeMultiplicar(1);
console.log("table 1");
imprimirlatabladeMultiplicar(2);
console.log("table 1");
imprimirlatabladeMultiplicar(3);
console.log("table 1");
imprimirlatabladeMultiplicar(4);

//Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla
//todos los numeros impares desde 1 hasta ese numero separados por comas.
//TODO: 10
//! Resultado: 1,3,5,7,9


const hallarNumerosImpares = (numero) => {
    if (numero <= 0) {
      // termina el programa y retorna ese mensaje
      return "Solo numeros positivos";
    }
  
    let contador = 0;
  
    let resultado = "";
    while (contador <= numero) {
      if (contador % 2 !== 0) {
        //* resultado = resultado + contador.toString() + ", "
        resultado += `${contador}, `;
      }
      contador++;
    }
  
    return resultado;
  };
  
  console.log("Numeros impares", hallarNumerosImpares(10));
  
  // const imprimirNumerosImpares = (numero) => {
  //   let contador = 0;
  //   while (contador <= numero) {
  //     if (contador % 2 !== 0) {
  //       console.log(contador);
  //     }
  //     contador++;
  //   }
  // };
  // imprimirNumerosImpares(4);


//* Escribir un programa que pida al usuario un número entero y
//* muestre por pantalla si es un número primo o no.
//? 1 => 1
//? 2 => 1, 2
//? 3 => 1, 3
//? 4 => 1, 2, 4
//? 5 => 1, 6
//? 6 => 1, 2, 3, 6
//? 7 => 1, 7

const hallarNumeroPrimo = (numero) => {
    //? como sabeos si un numero es entero
    if (numero % 1 !== 0) {
      return "El numero es un decimal";
    }
  
    if (numero === 1) {
      return "No es un numero primo";
    }
  
    let contador = 0;
    let contadorDeDivisores = 0;
  
    while (contador <= numero) {
      if (numero % contador === 0) {
        contadorDeDivisores++;
      }
      contador++;
    }
    //* que estoy guardando en la variable contadorDeDivisores
    return contadorDeDivisores === 2
      ? "Si es un numero primo"
      : "No es un numero primo";
  };
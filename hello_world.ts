//hola mundo

console.log("Hola TypeScript");

//VARIABLES
var myString = "Esto es una cadena de texto"
//myString = 5 Error, no se puede cambiar el tipo de variable
console.log(myString)

let myString2  = "Esto es otra cadena de texto"
myString2 ="Aquí cambio el valor de la cadena de texto"
myString2 ="6"
console.log(myString2)
console.log(typeof myString2)

//Numeros
let myNumber  = 7
myNumber = myNumber +  4
console.log(myNumber)
console.log(typeof myNumber)
// Se pueden operar con ellos en tiempo de ejecucion 
console.log(myNumber -1)//Esto no significa que la variable 
//haya cambiado ya que no ha sido asignada anteriormente 
console.log(myNumber)// no cambia, sigue siendo 11


//Se pueden juntar cadenas de texto 
console.log(myString + " "+myNumber)
console.log(myString2 + myNumber)

// Se pueden mezclar decimales con enteros 
let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(myNumber + myNumber2)

//BOOLEANOS
let myBool = false
myBool = true
 console.log(myBool)
console.log(typeof myBool)

//VARIABLES MAL VISTAS

let myUndefined 
//myUndefined = "myUndefined" Error
console.log(myUndefined)

//CONSTANTES

const myConst = "Mi proiedad constante"
//myConst = "Otro valor" Error
console.log(myConst)



//CONTROLES DE FLUJO
myNumber = 10
myString ="Hola"

if(myNumber == 10 && myString == "Hola"){
    console.log("El valor es 10")
}else if (myNumber == 11 || myString == "Hola"){
    console.log("El valor es 11")
}else{
    console.log("El valor no es 10")
}


//Funciones 

function myFunction(): string{
    return "Mi funcion"
}

console.log(myFunction())

//funcion que cree una suma 
//le vamos a pasar dos numeros
function myFunction2(firstNumber: number, secondNumber: number): number{
    return firstNumber+ secondNumber
}

console.log(myFunction2(3, 10))

//LISTAS
//List
let myList: Array<string> = ["Fuera","de","casa"]
console.log(myList)

//Set 
let mySet: Set<string> = new Set(["Fuera","de","casa"])
mySet.add("joder")
console.log(mySet)

//Map 
let myMap: Map<string, number> = new Map ([["desi", 20], ["Laura", 42] ,["Juan", 23]])
myMap.set("imbecil", 70)//añadir
console.log(myMap)
console.log(myMap.get("desi"))
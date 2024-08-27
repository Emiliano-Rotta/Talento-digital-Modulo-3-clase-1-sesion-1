//Tipo de datos.

// Numbers

// var numero = 158
// var numeroDos = 15.25
// var noEsUnNumero = NaN


//String

// var string = "hola Mundo"
// var otroString = 'otro string'

//Booleanos

// var verdadero = true
// var falso = false

// var fecha = new Date()

//array    
// var array = ["perros", 5, [],{}]

//objetos
// var objetos = {nombre: "Emiliano", apellido: "Rotta"}

//Actividad: Quiero un alert que diga. Emiliano tiene 5 perros

// alert(objetos.nombre + " tiene "+ array[1] + " " + array[0] )

// Diferencia entre Concatenacion e interpolacion
//concatenar:
// alert(objetos.nombre + " tiene " + array[1] + " " + array[0] )
//interpolacion
// alert(`${objetos.nombre} tiene ${array[1]} ${array[0]}`)


//variables.. var let const

//var y let pueden cambiar
//const no puede

// const nombre = "Brandon"
// console.log(nombre)
// nombre = "David"
// console.log(nombre)


// Diferencias entre var y let
// const variable = () => {
//     if(true){
//         var varVariable = "Esto es var"
//         let letVariable = "Esto es let"
//     }
//     console.log(varVariable)
//     console.log(letVariable)
// }
// variable()

// var variableVar = undefined

// console.log(variableVar)
// console.log(variableLet)

// var variableVar = "esto es var"
// let variableLet = "esto es let"

//Convertir variables

//convertir de string a numero
// let num = parseInt("123")
//convertir de string a numero decimal
// let num = parseFloat("123.23")
//convertir de string a numero entero o decimal
// let num = Number("123.2")
//convertir de string a numero con Unary plus
// let num = +"123"

//convertir de numero a string 
// let str = String(123)

//Fecha a un numero 
// let fecha = new Date()
// let num = fecha.getTime()

//Booleano a numero
// let num = Number(true) //1
// let num = Number(false) //0

//Numero a Booleano
// let num = Boolean(1) //cualquier numero que no sea cero es true
// let num = Boolean(0) //0
// console.log(num)
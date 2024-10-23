

//1.1 Nivel I
// a)
const add = (a, b) => a + b;

// b)  **101 porque sino solo hasta 99.
const randomNumber =  () =>  Math.floor(Math.random() * 101)

//c) clase person con una propiedad name i la funcion greet que imprime Hola y el nombre

class person {
  constructor (name)
  { 
    this.name = name;
  }

  greet = () => console.log( "Hello" + " " + (this.name))

}

const girl= new person ('Carla');


//Nivel 2

// a) arrow function and loop 
const numbers = [1, 2, 3, 4, 5];

const printNumbers = () => {
  for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

}
// en console = directamente printNumbers()


//Nive 3 setTimout
setTimeout(() => {console.log('Hola')}, '3000')




//1.2 Operador ternari


  //nivel 1

        // a)
      const potConduir = (edat) => edat >= 18 ? 'Pot Conduir' : 'No pot Conduir'; 

      // const MartaEdat = 20;  -> potConduir(MartaEdat) -> 'Puede conducir'
      // const MarioEdat= 15   >  potConduir(MarioEdat ) -> 'No puede conducir'

    // b)
 
const BiggerNumber= (num1, num2) = num1 > num2 ? " el valor num1 > num2" : "el valor num2 > num1"



//nivel 2

  const value = (num) => Math.sign(num) === 1? 'Positive' : Math.sign(num) === 0? 'Zero' : 'Negative'
  
  const MaxValue = (num1, num2, num3) => 
    Math.max(num1, num2, num3) === num1 ? num1 : Math.max(num1, num2, num3) === num2 ? num2 : num3

//nivel 3 ejercicio 4

// un ternario dentro de un bucle for para imprimir si el numero es par o impar

const numeritos= [1, 2, 3, 4,5 ,6, 7, 8, 9, 10]
const ParoImpar = (nums) => {
  for  (let i = 0 ; i < nums.length; i++) {
    nums[i] % 2 === 0 ? console.log(nums[i] + ' es par') : console.log(nums[i] + ' es impar')
  }
}

ParoImpar(numeritos)

// Exercici 1.3 Callbacks

 // 1.3.1 Procesar =un nombre una funció de callback.
 const callback = (num) => console.log(num * 2)

 const processar = (num, callback) => {
  callback(num)
 }
 processar(2, callback)
 


 //1.3.2 calculadora tres parámetros, dos nums y callback

 const sum = (num1, num2) => console.log(num1 + num2)
 const calculadora = (num1, num2, operation) => {
  operation(num1, num2)
 }
  calculadora(2, 3, sum)


// 1.3.3  esperar y saludar
 const saludo = (nombre) => console.log( "Hola" + " " + nombre)

  const esperarisaludar = (nom, callback) => { 
    setTimeout( () => callback(nom), 2000)  }
    
  esperarisaludar( "Maria", saludo)


  //1.3.4 processarElements ( [], callback2)
  
  const dividir = (num) => console.log(num / 2)
  const procesarElements = (array,callback) => {
    for (let i= 0 ; i < array.length; i++) {
      callback(array[i])
    }
  } 
  procesarElements([2, 4, 6, 8], dividir)



  //1.3.5 cadena de letras, funcion que las 

 
  const procesarCadena = (cadenadeletras, callback) => {
    for (let i = 0 ; i < cadenadeletras.length; i++)  {
      cadenadeletras[i].UpperCase()
    }
    callback(cadenadeletras)
  }
  
  // Exercici 1.4: Rest & Spread operators

  //1.4.1

  const aves = [gallina, avestruz, paloma]
  const mamiferos = [vaca, cerdo, caballo]

  const animales = [...aves, ...mamiferos]

  
  //1.4.2
  const sumando = (...nums) => {
    nums.reduce((total,currVal) => total+ currVal)

  }

  //1.4.3

  const gallina = { numPatas: 2, tipo: 'ave'} 

  const avestruz ={...gallina, habitat: "salvaje" }
  
  //1.4.4 Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

  const productos = ['poma', 'brocoli', 'banana', 'pollo', 'pavo']

  const  {fruta, verdura, ...otros } = productos

  //1.4.5 Spread en funciones

 const premios = ['vino', 'cena', 'fisioterapia']

 const tresprimerospremios =(a,b,c) => {
    console.log('Los premios son', a, b, c)
 }

  tresprimerospremios(...premios)

  //1.4.6 Spread en objetos fusion

  const gato = {nombre: 'Miau', edad: 3}
  const perro = {patas: 'cinco', ojos: 2}

  const fusion = { ...gato, ...perro}

// 1.5 ARRAYS TRANSFORMATION

//1.5.1 MAP

const numbe = [1,2,3,4]

const alquadrado = numbe.map( (num) =>  (num * num) )

// const alquadrado = numbe.map( num =>  num * num )

// const alquadrado = numbe.map( funct(num)  { return num * num })


//1.5.2 FILTER
const numsparsinpars = [1,2,3,4,5,6,7,8,9,10]

const numsparts =  numsparsinpars.filter( num => num%2 ===0)

//1.5.3. FIND

const randonnums = [1, 10 , 8, 11]

const lookingfor = randonnums.find( num => num > 10)


// 1.5.4

const ages = [13, 7, 8, 21]

const funcsum = nums.reduce( (total, currVal) => total + currVal)

// esto da resultado suma de las edades.
funcsum(...ages) 



//1.5.5 

alturas= [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]


const operations = alturas
  .filter( num => num >= 10)
   .map( num => num*2 )
   .reduce( (totalValue, currentValue) => (currentValue + totalValue))  
   console.log( operations)


   //1.5.6 Every //some

   dias = [11, 12, 13, 14]

  const vacaciones = dias.every( num => num > 10)

  const vacaciones2 = dias.some( num => num > 10)


  //1.6  ARRAY LOOPS

  //1.6.1 forEach

  let noms = ['Anna', 'Bernat', 'Clara']

  noms.forEach( nom => console.log(nom))


  for ( let nom of noms ) {
    console.log(nom)
  }

  // 1.6.2 for of con arrays 
  for ( let nom of noms ) {
    console.log(nom)
  }
  // esto es lo mismo que  
  // for ( let i=0, i < noms.length; i++) 
    // { console.log(noms[i])}  


  //1.6.3 filter

  let numeros = [1, 2, 3, 4, 5, 6]
  const justpars = numeros.filter( num => num % 2 === 0)
  justparts // [2, 4, 6]


  //1.6.4  for in 

  let obj = { 
    nom: 'Ona', 
    edat: 25,
     ciutat: 'Barcelona'
    }

    for (let key in obj){
      console.log(key, obj[key]) 
    }


  // 1.6.5  for of + break 
   let nums = [1, 2, 3, 4, 5, 6]

   for  ( let num of nums) {
    console.log(num)
    if (num === 5 ) {
    break 
    }
  }

  // 1.6.6 for of con indice

  let nombres = ['Anna', 'Bernat', 'Clara']

  for ( nombre of nombres) {
    console.log(nombres.indexOf(nombre), nombre)
  }

  // Exercici 1.7: Promises & Async/Await


  //1.7.1
  const mipromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
       resolve('Hola mundo')
    }, 2000)
    })
 
   //1.7.2   
   mipromesa.then(
   (mensaje) => console.log(mensaje)
   )

   //1.7.3
   const input = 'Hola'
   const promesados = new Promise ( (resolve, reject) => {
    setTimeout(()=> {
      if (input === 'Hola') {
        resolve()
      } else {
        reject()
      }
    }, 2000)
   })


   promesados
    .then( (val) => console.log(val))
    .catch( (err) => console.log(err))


//xercici 4
async function printMessage() {
  const result = await mipromesa;
  console.log(result);
}


  

  




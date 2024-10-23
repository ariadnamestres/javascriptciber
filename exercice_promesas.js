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


//exercici 4
// async function printMessage() {
//   const result = await mipromesa;
//   console.log(result);
// }

// exercici 5

async function printMessage() {
  try{
    const result = await mipromesa
    console.log(result)
  } catch (error) {
    console.error ('Error', error)
}
}

async function multiPromise() {
  const prom1 = new Promise((resolve) => {
      setTimeout(() => {
          resolve('Hola mundo después de 2 segundos');
      }, 2000);
  });

  const prom2 = new Promise((resolve) => {
      setTimeout(() => {
          resolve('Hola mundo después de 3 segundos');
      }, 3000);
  });

  const results = await Promise.all([prom1, prom2]);
  console.log(results);
}

multiPromise();
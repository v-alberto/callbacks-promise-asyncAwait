const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}

  console.log('Before')
  doSomething()
  console.log('After')

  // before
  // after
  // después de 3s se ejecuta el doSomething



/* ----- con esto se mostrará por consola en orden
  const lol = async() =>{
    console.log('Before')
    await doSomething()
    console.log('After')
  } 
  
  lol()
  // before
  // después de 3s se ejecuta el doSomething
  // after
  */


  const anotherFunction = async () => {
    try {
      const something = await doSomethingAsync()
      console.log(something)
    } catch (error) {
      console.error(error)
    }
  }
  console.log('Before 1')
  anotherFunction()
  console.log('After 1')
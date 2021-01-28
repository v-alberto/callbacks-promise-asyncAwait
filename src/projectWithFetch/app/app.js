const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

const imgPokemon = document.getElementById('imgPokemon')
const imgPokemon2= document.getElementById('imgPokemon2')
const imgPokemon3= document.getElementById('imgPokemon3')
const imgPokemon4= document.getElementById('imgPokemon4')
const imgPokemon5= document.getElementById('imgPokemon5')
const imgPokemon6= document.getElementById('imgPokemon6')
const imgPokemon7= document.getElementById('imgPokemon7')
const imgPokemon8= document.getElementById('imgPokemon8')
const imgPokemon9= document.getElementById('imgPokemon9')
const imgPokemon10= document.getElementById('imgPokemon10')

const namePokemon = document.getElementById('namePokemon')
const namePokemon2 = document.getElementById('namePokemon2')
const namePokemon3 = document.getElementById('namePokemon3')
const namePokemon4 = document.getElementById('namePokemon4')
const namePokemon5 = document.getElementById('namePokemon5')
const namePokemon6 = document.getElementById('namePokemon6')
const namePokemon7 = document.getElementById('namePokemon7')
const namePokemon8 = document.getElementById('namePokemon8')
const namePokemon9 = document.getElementById('namePokemon9')
const namePokemon10 = document.getElementById('namePokemon10')
// const idPokemon = document.getElementById('idPokemon').value


const renderImages = image =>{
  imgPokemon.setAttribute('src', image)
}
const renderImages2 = image2 =>{
  imgPokemon2.setAttribute('src', image2)
}
const renderImages3 = image3 =>{
  imgPokemon3.setAttribute('src', image3)
}
const renderImages4 = image4 =>{
  imgPokemon4.setAttribute('src', image4)
}
const renderImages5 = image5 =>{
  imgPokemon5.setAttribute('src', image5)
}
const renderImages6 = image6 =>{
  imgPokemon6.setAttribute('src', image6)
}
const renderImages7 = image7 =>{
  imgPokemon7.setAttribute('src', image7)
}
const renderImages8 = image8 =>{
  imgPokemon8.setAttribute('src', image8)
}
const renderImages9 = image9 =>{
  imgPokemon9.setAttribute('src', image9)
}
const renderImages10 = image10 =>{
  imgPokemon10.setAttribute('src', image10)
}
const fetchData = async () => {
  const id = Math.ceil(Math.random() * 150)
  const id2 = Math.ceil(Math.random() * 150)
  const id3 = Math.ceil(Math.random() * 150)
  const id4 = Math.ceil(Math.random() * 150)
  const id5 = Math.ceil(Math.random() * 150)
  const id6 = Math.ceil(Math.random() * 150)
  const id7 = Math.ceil(Math.random() * 150)
  const id8 = Math.ceil(Math.random() * 150)
  const id9 = Math.ceil(Math.random() * 150)
  const id10 = Math.ceil(Math.random() * 150)
  try {
    
    let res = await fetch(`${API_URL}${id}`)
    let data = await res.json()
    renderImages(data.sprites.other.dream_world.front_default)
    namePokemon.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id} <br> Ataque: ${data.stats[1].base_stat}`
      
    
    let res2 = await fetch(`${API_URL}${id2}`)
    let data2 = await res2.json()
    renderImages2(data2.sprites.other.dream_world.front_default)
    namePokemon2.innerHTML = `Nombre: ${data2.forms[0].name} <br> ID: ${id2} <br> Ataque: ${data.stats[1].base_stat}`
        
    
        fetch(`${API_URL}${id3}`)
      .then(response => response.json())
      .then(data => {
          renderImages3(data.sprites.other.dream_world.front_default)
          
          namePokemon3.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id3}  <br> Ataque: ${data.stats[1].base_stat}`
    
        })
    
          fetch(`${API_URL}${id4}`)
      .then(response => response.json())
      .then(data => {
          renderImages4(data.sprites.other.dream_world.front_default)
          namePokemon4.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id4} <br> Ataque: ${data.stats[1].base_stat}`
      })
    
          fetch(`${API_URL}${id5}`)
      .then(response => response.json())
      .then(data => {
          renderImages5(data.sprites.other.dream_world.front_default)
          namePokemon5.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id5} <br> Ataque: ${data.stats[1].base_stat}`
        })
    
    
          fetch(`${API_URL}${id6}`)
      .then(response => response.json())
      .then(data => {
          renderImages6(data.sprites.other.dream_world.front_default)
          namePokemon6.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id6} <br> Ataque: ${data.stats[1].base_stat}`
        })
    
    
          fetch(`${API_URL}${id7}`)
      .then(response => response.json())
      .then(data => {
          renderImages7(data.sprites.other.dream_world.front_default)
          namePokemon7.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id7} <br> Ataque: ${data.stats[1].base_stat}`
        })
    
    
          fetch(`${API_URL}${id8}`)
      .then(response => response.json())
      .then(data => {
          renderImages8(data.sprites.other.dream_world.front_default)
          namePokemon8.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id8} <br> Ataque: ${data.stats[1].base_stat}`
        })
    
    
          fetch(`${API_URL}${id9}`)
      .then(response => response.json())
      .then(data => {
          renderImages9(data.sprites.other.dream_world.front_default)
          namePokemon9.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id9} <br> Ataque: ${data.stats[1].base_stat}`
        })
    
    
          fetch(`${API_URL}${id10}`)
      .then(response => response.json())
      .then(data => {
          renderImages10(data.sprites.other.dream_world.front_default)
          namePokemon10.innerHTML = `Nombre: ${data.forms[0].name} <br> ID: ${id10} <br> Ataque: ${data.stats[1].base_stat}`
      
        })
  } catch(error){
    console.error(error)
  }
}

fetchData()
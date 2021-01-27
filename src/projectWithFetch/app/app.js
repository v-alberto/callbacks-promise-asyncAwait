
// const id = Math.ceil(Math.random() * 898)

function getPokemon (){
  const pokemon = document.getElementById('pokemon')
  const nombrePokemon = document.getElementById('nombrePokemon')
  const idPokemon = document.getElementById('id').value


  const renderPokemon = (image) => {
    pokemon.setAttribute('src', image)
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  .then(response => response.json())
  .then(data => {
    renderPokemon(data.sprites.front_default)
    nombrePokemon.innerHTML = `Nombre del Pokemon: ${data.forms[0].name}`
  })
}

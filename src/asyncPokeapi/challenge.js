const fetchData = require('../utils/fetchData')
const API = 'https://pokeapi.co/api/v2/pokemon/'
const NUM_POKEMON = 1
const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api)
    const pokemon = await fetchData(`${API}${NUM_POKEMON}`)

    console.log(pokemon.abilities[0].ability.name)
    console.log(pokemon.forms[0].name)
    console.log(pokemon.game_indices[2].version.name)
    
  } catch (error) {
    console.error(error)
  }
}



console.log('Before')
anotherFunction(API)
console.log('After')


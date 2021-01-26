const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(API)
    const origin = await fetchData(data.results[0].origin.url)


    console.log(data.info.count)
    console.log(data.results[0].name)
    console.log(origin.dimension)
  } catch (error) {
    console.error(error)
  }
}



console.log('Before')
anotherFunction(API)
console.log('After')


import axios from 'axios'
import fs from 'fs'
import path  from 'path'

downloadCountryFlags()
async function downloadCountryFlags() {
	const countries = getCountries()
	await downloadFlags(countries)
	console.log('Your flags are ready')
}

function getCountries() {
    const data = fs.readFileSync('./data/newCountries.json')
    const countries = JSON.parse(data)
    const orderedCountries = countries.sort((a, b) => b.population - a.population)
    const topPopulation = orderedCountries.slice(0, 5)
    return topPopulation
}

async function downloadFlags(countries) {
  await Promise.all(
    countries.map(async country => {  
      try {
        const localFilePath = path.join('./flags', `${country.name.common}.png`)
        const url = country.flags.png
        const response = await axios.get(url, { responseType: 'arraybuffer' })
    
        if (response.headers['content-type'].startsWith('image')) {
          const imageBuffer = Buffer.from(response.data, 'binary')
          fs.writeFileSync(localFilePath, imageBuffer)
        } else {
          console.error('The URL did not point to an image.')
        }
      } catch (error) {
        console.error('Error downloading image:', error.message)
      }
    })
  )
}
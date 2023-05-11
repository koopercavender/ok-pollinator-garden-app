const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const plants = {
    'American Beautyberry': {
        'LatinName': 'Callicarpa americana',
        'bloomPeriod': 'summer',
        'bloomColor': 'purple',
        'image': ''
    },
    'Aromatic Aster': {
        'LatinName': 'Symphyotrichum oblongifolium',
        'bloomPeriod': 'fall',
        'bloomColor': 'white',
        'image': ''
    },
    'Autumn Sage': {
        'LatinName': 'Salvia gregii',
        'bloomPeriod': 'fall',
        'bloomColor': 'white',
        'image': 'red'
    },
    'Basket Flower': {
        'LatinName': 'Centaurea americana',
        'bloomPeriod': 'summer',
        'bloomColor': 'white',
        'image': ''
    },
    'Beard Tongue': {
        'LatinName': 'Penstemon digitalis',
        'bloomPeriod': 'spring',
        'bloomColor': 'white',
        'image': ''
    },
    'Big Bluestem': {
        'LatinName': 'Andropogon gerardii',
        'bloomPeriod': 'fall',
        'bloomColor': 'purple',
        'image': ''
    },
    'Black Eyed Susan': {
        'LatinName': 'Rudbeckia hirta',
        'bloomPeriod': 'summer',
        'bloomColor': 'yellow',
        'image': ''
    },
    'Blackberry': {
        'LatinName': 'Rubus spp.',
        'bloomPeriod': 'summer',
        'bloomColor': 'white',
        'image': ''
    },
    'Blazing Star': {
        'LatinName': 'Liatris squarrosa',
        'bloomPeriod': 'fall',
        'bloomColor': 'white',
        'image': ''
    },
    'Blue False Indigo': {
        'LatinName': 'Baptisia australis',
        'bloomPeriod': 'spring',
        'bloomColor': 'purple',
        'image': ''
    },
    'Blue Grama': {
        'LatinName': 'Bouteloua gracilis',
        'bloomPeriod': 'summer',
        'bloomColor': 'green',
        'image': ''
    },
    'yarrow': {
        'LatinName': 'Achillea millefolium',
        'bloomPeriod': 'spring',
        'bloomColor': 'white',
        'image': ''
    },

    'yarrow': {
        'LatinName': 'Achillea millefolium',
        'bloomPeriod': 'spring',
        'bloomColor': 'white',
        'image': ''
    },
    'Common Milkweed': {
        'LatinName': 'Asclepias syriaca',
        'bloomPeriod': 'summer',
        'bloomColor': 'pink',
        'image': ''
    },
    'Swamp Milkweed': {
        'LatinName': 'Asclepias incarnata',
        'bloomPeriod': 'fall',
        'bloomColor': 'pink',
        'image': ''
    },
    'Joe Pye Weed': {
        'LatinName': 'Eutrochium purpureum',
        'bloomPeriod': 'summer',
        'bloomColor': 'pink',
        'image': ''
    },
    'sunflower': {
        'LatinName': 'Helianthus annuus',
        'bloomPeriod': 'fall',
        'bloomColor': 'Yellow',
        'image': ''

    },
    'Turks Cap': {
        'LatinName': 'Malvaviscus arboreus',
        'bloomPeriod': 'summer',
        'bloomColor': 'red',
        'image': ''
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:plantName', (request,response) => {
    const plantsName = request.params.plantName.toLowerCase()
    if(plants[plantsName]){
       response.json(plants[plantsName]) 
    } else {
        response.json(plants['Not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})

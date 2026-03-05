import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/activities/:city', async (req, res) => {
    const { city } = req.params

    const url = `${process.env.API_URL}?q=${city}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`

    const response = await fetch(url)

    if (!response.ok) {
        return res.status(404).json({erro: 'City not found...'})
    }

    const data = await response.json()

    const temperature = data.main.temp
    const mainWeather = data.weather[0].main

    let recomendation = ""
    let category = ""

    if (mainWeather == 'Rain') {
        recomendation = "It's a perfect day to go to a museum, or watch a TV series while eating popcorn, Oh and don't forget your umbrella."
        category = "indoor"
    } else if (temperature <= 16) {
        recomendation = "It's a freezing day! It's perfect to start reading a book and make some coffee."
        category = "indoor"
    } else if (temperature <= 25) {
        recomendation = "This weather is perfect for going to the park or having a picnic with someone. Go outside and enjoy the day!"
        category = "outdoor"
    } else if (temperature < 30) {
        recomendation = "It's getting warm! Perfect for outdoor activities, but bring water and sunscreen."
        category = "outdoor"
    } else {
        recomendation = "It's so hot! Now its time to go to the beach or a pool and chill with your friends, Oh and stay hydrated!"
        category = "outdoor"
    }

    res.json({
        local: data.name,
        country: data.sys.country,
        current_weather: {
            temperature: `${temperature}°C`,
            Max: data.main.temp_max,
            Min: data.main.temp_min,
            description: data.weather[0].description
        },
        ideas: {
            recomendation,
            category
        }
    })
})

app.listen(3333, () => console.log('Server On!'))
# AtmosLogic 🌤️
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

This API checks the current weather conditions and recommends suitable activities for the user. The recommendations are personalized based on temperature and weather status helping to better plan activities according to the weather.

## Technologies

- Node.js
- Express
- OpenWeather API

## Endpoints

### GET /activities/:city

Returns the current weather and activity recommendations.

### Example Request

GET /activities/Madrid

```
{
	"local": "Madrid",
	"country": "ES",
	"current_weather": {
		"temperature": "6.27°C",
		"Max": 7.18,
		"Min": 5.56,
		"description": "algumas nuvens"
	},
	"ideas": {
		"recomendation": "It's a freezing day! It's perfect to start reading a book and make some coffee.",
		"category": "indoor"
	}
}
```
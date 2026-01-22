# AtmosLogic 🌤️
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

This API checks the current weather conditions and recommends suitable activities based on temperature, weather status, and time of day.

## Technologies

- Node.js
- Express
- OpenWeather

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
		"temperature": "6.53°C",
		"Max": 7.68,
		"Min": 5.56,
		"description": "algumas nuvens"
	},
	"ideas": {
		"recomendation": "It's a freezing day!, its perfect to starting read a book and making some coffee",
		"category": "indoor"
	}
}
```
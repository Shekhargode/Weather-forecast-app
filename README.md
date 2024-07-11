# Weather Forecast App

This Weather Forecast application allows users to get real-time weather information for any city. The app fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features
- **Real-time Weather Data**: Displays current temperature, humidity, and wind speed.
- **City Search**: Users can search for weather information by entering a city name.
- **Weather Icons**: Shows weather icons based on the current weather conditions (e.g., clouds, clear, rain, etc.).
- **Error Handling**: Displays an error message if the city is not found.

## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Styling of the application.
- **JavaScript**: Fetching data from the API and updating the DOM.
- **OpenWeatherMap API**: Provides weather data.

## How to Use
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    ```
2. Open the `index.html` file in your web browser.
3. Enter a city name in the search input and click the search button.
4. View the weather details for the entered city.

## Screenshots

![image](https://github.com/Shekhargode/Weather-forecast-app/assets/96515282/1da8b430-75b0-40bb-b3c9-e0701fc7ac44)

## API Key
Replace the `apiKey` variable in the `script.js` file with your own OpenWeatherMap API key:
```javascript
const apiKey = "YOUR_API_KEY";

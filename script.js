async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherBox = document.getElementById("weatherInfo");

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "2d0797a858fcd173bcf0575ecb25a9e5"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            weatherBox.style.display = "block"; // Show the weather box
            weatherBox.innerHTML = `
                <h2>🌍 ${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: <strong>${data.main.temp}°C</strong></p>
                <p>☁️ Weather: <strong>${data.weather[0].description}</strong></p>
                <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
                <p>🌬️ Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
            `;
        } else {
            weatherBox.style.display = "block";
            weatherBox.innerHTML = `<p style="color: yellow;">City not found!</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherBox.style.display = "block";
        weatherBox.innerHTML = `<p style="color: red;">Error fetching data.</p>`;
    }
}

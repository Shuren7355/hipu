        async function getWeather() {
            const cityInput = document.getElementById('cityInput');
            const cityName = document.getElementById('cityName');
            const temperature = document.getElementById('temperature');
            const description = document.getElementById('description');
            const humidity = document.getElementById('humidity');
            const windSpeed = document.getElementById('windSpeed');
            const sunrise = document.getElementById('sunrise');
            const sunset = document.getElementById('sunset');
            const weatherIcon = document.getElementById('weatherIcon');
            const rainSound = document.getElementById('rainSound');
            const thunderSound = document.getElementById('thunderSound');
            const weatherVideo = document.getElementById('weatherVideo');

            const city = cityInput.value;
            const apiKey = '9f2e1f455e003246d00a9c41b725bbc8'; // Replace with your actual API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                cityName.innerText = data.name;
                temperature.innerText = `Temperature: ${data.main.temp}°C`;
                description.innerText = `Description: ${data.weather[0].description}`;
                humidity.innerText = `Humidity: ${data.main.humidity}%`;
                windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
                sunrise.innerText = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
                sunset.innerText = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;

                // Display additional weather details
                displayAdditionalDetails(data);

                weatherIcon.innerHTML = `<path d="${getWeatherIconPath(data.weather[0].icon)}" />`;

                // Play sound effects based on weather conditions
                playSoundEffects(data.weather[0].main);

                // Change background video based on weather conditions
                changeBackgroundVideo(data.weather[0].main);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                cityName.innerText = 'City not found';
                temperature.innerText = '';
                description.innerText = '';
                humidity.innerText = '';
                windSpeed.innerText = '';
                sunrise.innerText = '';
                sunset.innerText = '';
                clearAdditionalDetails();
                weatherIcon.innerHTML = '';
            }
        }

        function displayAdditionalDetails(data) {
            // Display additional weather details here
            // Example: const additionalInfo = document.getElementById('additionalInfo');
            //          additionalInfo.innerText = `Visibility: ${data.visibility} meters`;
        }

        function clearAdditionalDetails() {
            // Clear additional weather details here
            // Example: const additionalInfo = document.getElementById('additionalInfo');
            //          additionalInfo.innerText = '';
        }

        function getWeatherIconPath(iconCode) {
            // Add logic to map icon codes to SVG paths
            // You can find the SVG paths for different weather conditions on the OpenWeatherMap website
            // Example: https://openweathermap.org/weather-conditions
            return '';
        }

        function playSoundEffects(weatherCondition) {
            // Adjust sound effects based on your preferences
            if (weatherCondition === 'Rain' || weatherCondition === 'Drizzle') {
                document.getElementById('rainSound').play();
            } else if (weatherCondition === 'Thunderstorm') {
                document.getElementById('thunderSound').play();
            }
        }

        function changeBackgroundVideo(weatherCondition) {
            const weatherVideo = document.getElementById('weatherVideo');
            let videoSource = '';

            // Replace these placeholders with your actual video URLs
            switch (weatherCondition) {
                case 'Clear':
                    videoSource = 'https://assets.mixkit.co/videos/download/mixkit-clouds-travel-along-the-blue-sky-in-the-presence-of-50136-medium.mp4';
                    break;
                case 'Rain':
                    videoSource = 'https://motionbgs.com/dl/hd/3182';
                    break;
                case 'Thunderstorm':
                    videoSource = 'https://assets.mixkit.co/videos/download/mixkit-lightning-in-the-night-sky-25081-medium.mp4';
                    break;
                case 'winter':
                    videoSource = 'https://assets.mixkit.co/videos/download/mixkit-swiss-alps-snow-background-time-lapse-4283-4k.mp4';
                    break;
                // Add more cases for different weather conditions
                default:
                    // Default to clear day video
                    videoSource = 'https://assets.mixkit.co/videos/download/mixkit-clouds-travel-along-the-blue-sky-in-the-presence-of-50136-medium.mp4';
            }

            weatherVideo.src = videoSource;

            // Reload the video to apply the new source
            weatherVideo.load();
        }
        function changeBackgroundVideo(weatherCondition, sunriseTimestamp, sunsetTimestamp) {
    const weatherVideo = document.getElementById('weatherVideo');
    let videoSource = '';

    const currentTime = new Date().getTime() / 1000; // Convert to seconds

    if (currentTime >= sunriseTimestamp && currentTime < sunsetTimestamp) {
        // Daytime
        switch (weatherCondition) {
            case 'Clear':
                videoSource = 'https://assets.mixkit.co/videos/download/mixkit-clouds-travel-along-the-blue-sky-in-the-presence-of-50136-medium.mp4'; // Replace with actual daytime clear video URL
                break;
            case 'Rain':
                videoSource = 'https://motionbgs.com/dl/hd/3182'; // Replace with actual daytime rain video URL
                break;
            // Add more cases for different daytime weather conditions
            default:
                videoSource = 'https://assets.mixkit.co/videos/download/mixkit-sun-rays-over-forest-treetops-515.mp4';
        }
    } else {
        // Nighttime
        switch (weatherCondition) {
            case 'Clear':
                videoSource = 'https://assets.mixkit.co/videos/download/mixkit-milky-way-seen-at-night-4148-medium.mp4'; // Replace with actual nighttime clear video URL
                break;
            case 'Rain':
                videoSource = 'https://assets.mixkit.co/videos/download/mixkit-milky-way-seen-at-night-4148.mp4'; // Replace with actual nighttime rain video URL
                break;
            // Add more cases for different nighttime weather conditions
            default:
                videoSource = 'https://assets.mixkit.co/videos/download/mixkit-milky-way-seen-at-night-4148.mp4';
        }
    }

    weatherVideo.src = videoSource;
    weatherVideo.load();
}

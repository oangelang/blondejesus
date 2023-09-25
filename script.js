// Array containing your specific text options
const textArray = [
    'SEND ITTTTTT',
    'wowwe',
    'LOL',
    'Wanker!',
    'yoyoyo!',
    'Amaze balls',
    'innit?',
    'truetruetruetrue',
    'Senioritas?',
    'Angela is the GOAT',
    'Im a little fragile right now',
    'Coke whatevs',
    'Saweet!',
    'Did you like and subscribe?',
];

// Function to generate random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Function to fetch wind data from OpenWeather API
async function fetchWindData() {
    const apiKey = '98a0078877d9f69b70fd98e90c7aa8df'; // Replace with your API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Doha&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const windSpeed = data.wind.speed;
         // Convert wind speed from m/s to knots
        const windSpeedInKnots = windSpeed * 1.94384;
        return windSpeedInKnots.toFixed(2); // Round to two decimal places
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Main function to display text and wind speed
async function displayData() {
    const windSpeed = await fetchWindData();
    let text = 'Today, Blonde Jesus says... ' + textArray[getRandomIndex(textArray.length)];
    
    if (windSpeed !== null) {
        text += `<br><br>The wind speed today is ${windSpeed} knots.`;
    }

    document.getElementById('randomText').innerHTML = text;
}

// Run the displayData function
displayData();

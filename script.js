// Array containing your specific text options
const textArray = [
    'send it',
    'wow',
    'lol',
    'wanker',
    'truetruetruetrue',
    'Senioritas?',
    'Angela is the GOAT',
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
        return windSpeed;
    } catch (error) {
        console.error("Error fetching wind data:", error);
        return null;
    }
}

// Main function to display random text and wind data
async function displayData() {
    const windSpeed = await fetchWindData();
    
    let text = 'Today, Blonde Jesus thinks... ' + textArray[getRandomIndex(textArray.length)];

    if (windSpeed !== null) {
        text += `<br><br>The wind speed today is ${windSpeed} m/s.`;
    }
    
    document.getElementById('randomText').innerHTML = text;
}

// Call the function to display data
displayData();

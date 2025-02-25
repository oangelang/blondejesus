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

// Function to animate an image bouncing around the screen
function animateImage() {
    const img = document.createElement('img');
    img.src = 'image.png'; // Use the uploaded image
    img.style.position = 'absolute';
    img.style.width = '100px'; // Adjust size as needed
    img.style.height = '100px';
    document.body.appendChild(img);
    
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let dx = 2;
    let dy = 2;

    function move() {
        x += dx;
        y += dy;
        
        if (x <= 0 || x + 100 >= window.innerWidth) {
            dx = -dx;
        }
        if (y <= 0 || y + 100 >= window.innerHeight) {
            dy = -dy;
        }

        img.style.left = x + 'px';
        img.style.top = y + 'px';
        requestAnimationFrame(move);
    }

    move();
}

// Start animation when the page loads
window.onload = function() {
    animateImage();
    startRainEffect();
};

// Function to create a rain effect of falling images
function startRainEffect() {
    setInterval(() => {
        const img = document.createElement('img');
        img.src = 'james falling.png'; // Use the uploaded image
        img.style.position = 'absolute';
        img.style.width = '150px'; // Adjust size as needed
        img.style.height = '150px';
        img.style.left = Math.random() * window.innerWidth + 'px';
        img.style.top = '-50px'; // Start above the screen
        document.body.appendChild(img);

        let fallSpeed = 2 + Math.random() * 3; // Random fall speed

        function fall() {
            let topPos = parseFloat(img.style.top);
            if (topPos < window.innerHeight) {
                img.style.top = topPos + fallSpeed + 'px';
                requestAnimationFrame(fall);
            } else {
                img.remove(); // Remove the image when it reaches the bottom
            }
        }
        fall();
    }, 300); // Create a new falling image every 300ms
}

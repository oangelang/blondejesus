// Array containing your specific text options
const textArray = [
    'SEND ITTTTTT',
    'WOWWWW',
    'LOL',
    'Wanker',
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

// Insert random text into HTML
document.getElementById('randomText').innerHTML = textArray[getRandomIndex(textArray.length)];

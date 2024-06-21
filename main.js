let minedCoins = 0.0001;  // Initial amount of mined coins
let miningInterval;
const totalCoins = 1000;
const miningDuration = 3600000; // 1 hour in milliseconds
const incrementAmount = totalCoins / miningDuration * 10; // Increment amount every 10 milliseconds

function startMining() {
    document.getElementById('start-button').style.visibility = 'hidden'; // Hide start button
    document.getElementById('start-button').style.opacity = '0';
    
    function incrementCoins() {
        if (minedCoins >= totalCoins) {
            clearInterval(miningInterval);
            document.getElementById('start-button').style.visibility = 'visible';
            document.getElementById('start-button').style.opacity = '1';
            return;
        }
        minedCoins += incrementAmount;
        document.getElementById('coin-amount').innerText = minedCoins.toFixed(4); // Display up to 4 decimal places
    }
    
    miningInterval = setInterval(incrementCoins, 10); // Increment coins every 10 milliseconds
}

function navigateTo(page) {
    window.location.href = `${page}.html`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Load logo dynamically
    const logoElement = document.getElementById('logo');
    logoElement.style.backgroundImage = 'url("logo.png")';
    logoElement.style.backgroundSize = 'contain';
    logoElement.style.backgroundRepeat = 'no-repeat';
    logoElement.style.backgroundPosition = 'center';
    
    // Add click event to logo to start mining
    logoElement.addEventListener('click', startMining);
});

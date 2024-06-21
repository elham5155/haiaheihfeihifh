let minedCoins = 0;

function startMining() {
    document.getElementById('logo').classList.add('mining');
    document.getElementById('start-button').style.visibility = 'hidden'; // مخفی کردن دکمه شروع
    document.getElementById('start-button').style.opacity = '0';
    setTimeout(() => {
        minedCoins += 1000;
        document.getElementById('coin-amount').innerText = minedCoins;
        document.getElementById('logo').classList.remove('mining');
        document.getElementById('start-button').style.visibility = 'visible';
        document.getElementById('start-button').style.opacity = '1';
    }, 3600000); // 1 hour
}

function navigateTo(page) {
    window.location.href = `${page}.html`;
}

document.getElementById('logo').addEventListener('click', startMining);

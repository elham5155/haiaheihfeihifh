// scripts.js
document.getElementById('start-button').addEventListener('click', function () {
    this.style.display = 'none';
    startMining();
});

function startMining() {
    let count = 0.0000;
    const miningRate = 1000 / 3600; // 1000 coins per hour

    setInterval(function () {
        count += miningRate;
        document.getElementById('mining-count').textContent = count.toFixed(4);
    }, 1000);

    gsap.to('#logo img', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'linear'
    });
}

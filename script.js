document.addEventListener("DOMContentLoaded", function() {
    createFlowerRain();
});

function createFlowerRain() {
    const container = document.getElementById('flower-rain-container');
    const flowerCount = 30; 

    for (let i = 0; i < flowerCount; i++) {
        let petal = document.createElement('img');
        petal.src = 'petal.png'; 
        petal.className = 'falling-flower';

        // --- NEW LOGIC START ---
        
        // Flip a coin to decide: Left side or Right side?
        let isLeft = Math.random() < 0.5;

        if (isLeft) {
            // Position between 0% and 15% of the screen width
            petal.style.left = (Math.random() * 15) + 'vw';
        } else {
            // Position between 85% and 100% of the screen width
            petal.style.left = (Math.random() * 15 + 85) + 'vw';
        }
        
        // --- NEW LOGIC END ---

        // Randomize size (0.5x to 1.5x)
        let randomScale = Math.random() * 1 + 0.5; 
        petal.style.transform = `scale(${randomScale})`;

        // Randomize speed (10s to 25s)
        let randomDuration = Math.random() * 15 + 10;
        petal.style.animationDuration = randomDuration + 's';

        // Randomize delay
        let randomDelay = Math.random() * 15;
        petal.style.animationDelay = '-' + randomDelay + 's'; 
        
        container.appendChild(petal);
    }
}

// ... Keep your existing scrollToEvents function below here ...
function scrollToEvents() {
    const eventsSection = document.getElementById('events-section');
    eventsSection.scrollIntoView({ 
        behavior: 'smooth' 
    });
}
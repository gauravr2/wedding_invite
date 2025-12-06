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

/* --- SMART MUSIC PLAYER --- */

document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    let isPlaying = false;

    // Helper function to update the icon
    function updateIcon() {
        if (isPlaying) {
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
            musicBtn.style.animation = 'none'; // Stop pulsing when playing
        } else {
            musicBtn.innerHTML = '<i class="fas fa-music"></i>'; // Music icon
            musicBtn.style.animation = 'pulse-gold 2s infinite'; // Pulse when paused
        }
    }

    // 1. Try to play immediately on load
    music.play().then(() => {
        // If successful (some browsers allow it)
        isPlaying = true;
        updateIcon();
    }).catch(error => {
        // If blocked (most browsers), wait for the first user interaction
        console.log("Autoplay blocked. Waiting for interaction.");
        
        const startMusicOnInteraction = () => {
            music.play();
            isPlaying = true;
            updateIcon();
            // Remove the listeners so it doesn't try to play again every click
            document.removeEventListener('click', startMusicOnInteraction);
            document.removeEventListener('scroll', startMusicOnInteraction);
        };

        document.addEventListener('click', startMusicOnInteraction);
        document.addEventListener('scroll', startMusicOnInteraction);
    });

    // 2. Manual Toggle Button Logic
    window.toggleMusic = function() {
        if (isPlaying) {
            music.pause();
            isPlaying = false;
        } else {
            music.play();
            isPlaying = true;
        }
        updateIcon();
    };
});
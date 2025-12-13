// document.addEventListener("DOMContentLoaded", function() {
//     createFlowerRain();
// });

document.addEventListener("DOMContentLoaded", function() {
    const enterBtn = document.getElementById('enter-btn');
    const enterOverlay = document.getElementById('enter-overlay');
    // const introLayer = document.getElementById('intro-layer'); // REMOVED
    const music = document.getElementById('bg-music');
    // const ganeshaAnimator = document.getElementById('ganesha-animator'); // REMOVED
    const mainContent = document.getElementById('main-content');

    enterBtn.addEventListener('click', function() {
        
        // 1. Play Music
        music.play().catch(error => console.log("Music play failed", error));

        // 2. Hide the Enter Screen (Maroon overlay)
        enterOverlay.style.transition = "opacity 0.5s ease";
        enterOverlay.style.opacity = "0";
        
        setTimeout(() => {
            enterOverlay.style.display = "none"; 
            
            // 3. START FLOWERS/SNOW NOW
            createSnowfall();

            // 4. Show Wedding Card IMMEDIATELY (No Ganesha Animation)
            // Just add the fade-in class right away (or keep a tiny delay for smoothness)
            mainContent.classList.add('fade-in-card');
            
        }, 500); 
    });
});

function createSnowfall() {
    const container = document.getElementById('snow-container');
    const flakeCount = 50; 

    for (let i = 0; i < flakeCount; i++) {
        let flake = document.createElement('div');
        flake.className = 'snow-bubble';

        // Flip a coin to decide: Left side or Right side?
        let isLeft = Math.random() < 0.5;

        if (isLeft) {
            // Position between 0% and 15% of the screen width
            flake.style.left = (Math.random() * 15) + 'vw';
        } else {
            // Position between 85% and 100% of the screen width
            flake.style.left = (Math.random() * 15 + 85) + 'vw';
        }

        // Randomize size (10px to 25px)
        let size = Math.random() * 15 + 10;
        flake.style.width = size + 'px';
        flake.style.height = size + 'px';

        // Randomize speed (10s to 25s)
        let randomDuration = Math.random() * 15 + 10;
        flake.style.animationDuration = randomDuration + 's';

        // Randomize delay
        let randomDelay = Math.random() * 15;
        flake.style.animationDelay = '-' + randomDelay + 's'; 
        
        container.appendChild(flake);
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

// document.addEventListener("DOMContentLoaded", function() {
//     const music = document.getElementById('bg-music');
//     const musicBtn = document.getElementById('music-btn');
//     let isPlaying = false;

//     // Helper function to update the icon
//     function updateIcon() {
//         if (isPlaying) {
//             musicBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Pause icon
//             musicBtn.style.animation = 'none'; // Stop pulsing when playing
//         } else {
//             musicBtn.innerHTML = '<i class="fas fa-music"></i>'; // Music icon
//             musicBtn.style.animation = 'pulse-gold 2s infinite'; // Pulse when paused
//         }
//     }

//     // 1. Try to play immediately on load
//     music.play().then(() => {
//         // If successful (some browsers allow it)
//         isPlaying = true;
//         updateIcon();
//     }).catch(error => {
//         // If blocked (most browsers), wait for the first user interaction
//         console.log("Autoplay blocked. Waiting for interaction.",error);
        
//         const startMusicOnInteraction = () => {
//             music.play();
//             isPlaying = true;
//             updateIcon();
//             // Remove the listeners so it doesn't try to play again every click
//             document.removeEventListener('click', startMusicOnInteraction);
//             document.removeEventListener('scroll', startMusicOnInteraction);
//         };

//         document.addEventListener('click', startMusicOnInteraction);
//         document.addEventListener('scroll', startMusicOnInteraction);
//     });

//     // 2. Manual Toggle Button Logic
//     window.toggleMusic = function() {
//         if (isPlaying) {
//             music.pause();
//             isPlaying = false;
//         } else {
//             music.play();
//             isPlaying = true;
//         }
//         updateIcon();
//     };
// });
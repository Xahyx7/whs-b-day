// Global variables
let musicPlaying = false;
let cakeClicked = false;
let confettiActive = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading sequence
    initializeLoadingSequence();
    
    // Set current date
    setCurrentDate();
    
    // Initialize animations after loading
    setTimeout(initializeAnimations, 5000);
    
    // Initialize interactive elements
    initializeInteractiveElements();
});

// Loading Sequence
function initializeLoadingSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after 4.5 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 4500);
}

// Set Current Date
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
}

// Initialize Main Animations
function initializeAnimations() {
    // Stagger quality items animation
    staggerQualityItems();
    
    // Stagger timeline items
    staggerTimelineItems();
    
    // Stagger testimonial cards
    staggerTestimonialCards();
    
    // Stagger wish items
    staggerWishItems();
    
    // Stagger poem lines
    staggerPoemLines();
    
    // Start particle effects
    setTimeout(startParticleEffects, 5000);
    
    // Start confetti after cake appears
    setTimeout(startConfettiShow, 12000);
    
    // Create floating balloons
    setTimeout(createFloatingBalloons, 8000);
    
    // Create floating hearts
    setTimeout(createFloatingHearts, 10000);
    
    // Create star field
    setTimeout(createStarField, 6000);
    
    // Start fireworks
    setTimeout(startFireworks, 15000);
}

// Stagger Animations
function staggerQualityItems() {
    const qualityItems = document.querySelectorAll('.quality-item');
    qualityItems.forEach((item, index) => {
        item.style.setProperty('--item-delay', `${index * 0.2}s`);
    });
}

function staggerTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--timeline-delay', `${15 + (index * 0.5)}s`);
    });
}

function staggerTestimonialCards() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-delay', `${index * 0.3}s`);
    });
}

function staggerWishItems() {
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach((item, index) => {
        item.style.setProperty('--wish-delay', `${index * 0.2}s`);
    });
}

function staggerPoemLines() {
    const poemLines = document.querySelectorAll('.poem-line');
    poemLines.forEach((line, index) => {
        line.style.setProperty('--line-delay', `${21 + (index * 0.3)}s`);
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Music control
    const musicToggle = document.getElementById('music-toggle');
    const musicControl = document.getElementById('music-control');
    
    musicControl.addEventListener('click', toggleMusic);
    
    // Cake interaction
    const cakeContainer = document.getElementById('cake-container');
    cakeContainer.addEventListener('click', handleCakeClick);
    
    // Add hover effects to interactive elements
    addHoverEffects();
    
    // Initialize candle delays
    initializeCandleDelays();
}

// Music Control
function toggleMusic() {
    const musicToggle = document.getElementById('music-toggle');
    
    if (musicPlaying) {
        musicToggle.textContent = '🎵';
        musicPlaying = false;
        // In a real implementation, you would pause the audio here
        console.log('Music paused');
    } else {
        musicToggle.textContent = '🎶';
        musicPlaying = true;
        // In a real implementation, you would play birthday music here
        console.log('Music playing');
    }
}

// Cake Interaction
function handleCakeClick() {
    if (!cakeClicked) {
        cakeClicked = true;
        blowOutCandles();
        setTimeout(showWishMessage, 2000);
        setTimeout(startMegaConfetti, 1000);
    }
}

function blowOutCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = 'blowOut 0.5s ease-out forwards';
        }, index * 100);
    });
}

function showWishMessage() {
    const message = document.createElement('div');
    message.className = 'wish-popup';
    message.innerHTML = `
        <div class="wish-content">
            <h2>🌟 Your Wish Has Been Made! 🌟</h2>
            <p>May all your dreams come true, Mr. President!</p>
        </div>
    `;
    
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #2c3e50;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        text-align: center;
        animation: wishPopup 3s ease-out forwards;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Initialize Candle Delays
function initializeCandleDelays() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        candle.style.setProperty('--candle-delay', `${index * 0.1}s`);
    });
}

// Particle Effects
function startParticleEffects() {
    createSparkles();
    createFloatingElements();
}

function createSparkles() {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    sparkleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 50;
    `;
    document.body.appendChild(sparkleContainer);
    
    setInterval(() => {
        if (Math.random() > 0.3) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
            sparkle.style.cssText = `
                position: absolute;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                font-size: ${Math.random() * 15 + 10}px;
                pointer-events: none;
                animation: sparkleFloat 3s ease-out forwards;
                z-index: 50;
            `;
            
            sparkleContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 3000);
        }
    }, 300);
}

function createFloatingElements() {
    const elements = ['🎈', '🎊', '🎁', '🎂', '🎉', '🥳'];
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const element = document.createElement('div');
            element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
            element.style.cssText = `
                position: fixed;
                right: -50px;
                top: ${Math.random() * window.innerHeight}px;
                font-size: ${Math.random() * 20 + 15}px;
                pointer-events: none;
                animation: floatAcross 8s linear forwards;
                z-index: 30;
            `;
            
            document.body.appendChild(element);
            
            setTimeout(() => element.remove(), 8000);
        }
    }, 2000);
}

// Confetti Effects
function startConfettiShow() {
    if (confettiActive) return;
    confettiActive = true;
    
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FF6347', '#32CD32', '#FF69B4', '#00CED1', '#FFA500', '#9370DB', '#FF1493'];
    
    // Create initial burst of confetti
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            createConfettiPiece(container, colors);
        }, i * 20);
    }
    
    // Continue creating confetti
    const confettiInterval = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            createConfettiPiece(container, colors);
        }
    }, 500);
    
    // Stop confetti after 30 seconds
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 30000);
}

function createConfettiPiece(container, colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    const shapes = ['square', 'circle', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * window.innerWidth}px;
        top: -20px;
        border-radius: ${shape === 'circle' ? '50%' : '0'};
        animation: confettiFall ${Math.random() * 3 + 4}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
        z-index: 200;
    `;
    
    container.appendChild(confetti);
    
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.remove();
        }
    }, 7000);
}

function startMegaConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FF6347', '#32CD32', '#FF69B4', '#00CED1', '#FFA500'];
    
    // Create mega burst
    for (let i = 0; i < 300; i++) {
        setTimeout(() => {
            createConfettiPiece(container, colors);
        }, i * 10);
    }
}

// Balloons
function createFloatingBalloons() {
    const container = document.getElementById('balloons-container');
    const balloonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF9FF3', '#54A0FF'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            
            balloon.style.cssText = `
                position: absolute;
                width: ${Math.random() * 40 + 60}px;
                height: ${Math.random() * 50 + 80}px;
                background: ${balloonColors[Math.floor(Math.random() * balloonColors.length)]};
                border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                bottom: -150px;
                left: ${Math.random() * (window.innerWidth - 100)}px;
                animation: balloonFloat ${Math.random() * 5 + 8}s ease-in-out infinite;
                z-index: 80;
                box-shadow: inset -10px -10px 0 rgba(0,0,0,0.1);
            `;
            
            // Add balloon string
            const string = document.createElement('div');
            string.style.cssText = `
                position: absolute;
                bottom: -100px;
                left: 50%;
                transform: translateX(-50%);
                width: 2px;
                height: 120px;
                background: #333;
                z-index: -1;
            `;
            
            balloon.appendChild(string);
            container.appendChild(balloon);
            
            // Remove balloon after animation
            setTimeout(() => {
                if (balloon.parentNode) {
                    balloon.remove();
                }
            }, 15000);
        }, i * 500);
    }
    
    // Continue creating balloons periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createSingleBalloon(container, balloonColors);
        }
    }, 3000);
}

function createSingleBalloon(container, colors) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    balloon.style.cssText = `
        position: absolute;
        width: ${Math.random() * 40 + 60}px;
        height: ${Math.random() * 50 + 80}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        bottom: -150px;
        left: ${Math.random() * (window.innerWidth - 100)}px;
        animation: balloonFloat ${Math.random() * 5 + 8}s ease-in-out infinite;
        z-index: 80;
        box-shadow: inset -10px -10px 0 rgba(0,0,0,0.1);
    `;
    
    const string = document.createElement('div');
    string.style.cssText = `
        position: absolute;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 120px;
        background: #333;
        z-index: -1;
    `;
    
    balloon.appendChild(string);
    container.appendChild(balloon);
    
    setTimeout(() => {
        if (balloon.parentNode) {
            balloon.remove();
        }
    }, 15000);
}

// Floating Hearts
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartColors = ['#FF69B4', '#FF1493', '#DC143C', '#FF6347', '#FF4500'];
    
    setInterval(() => {
        if (Math.random() > 0.6) {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                color: ${heartColors[Math.floor(Math.random() * heartColors.length)]};
                left: ${Math.random() * window.innerWidth}px;
                bottom: -50px;
                animation: heartFloat ${Math.random() * 4 + 6}s linear forwards;
                pointer-events: none;
                z-index: 60;
                filter: drop-shadow(0 0 10px rgba(255,105,180,0.6));
            `;
            
            container.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 10000);
        }
    }, 1000);
}

// Star Field
function createStarField() {
    const container = document.getElementById('stars-container');
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 10 + 8}px;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: starTwinkle ${Math.random() * 3 + 2}s infinite alternate;
            pointer-events: none;
            z-index: 10;
        `;
        
        container.appendChild(star);
    }
}

// Fireworks
function startFireworks() {
    const container = document.getElementById('fireworks-container');
    
    const fireworkInterval = setInterval(() => {
        if (Math.random() > 0.3) {
            createFirework(container);
        }
    }, 1500);
    
    // Stop fireworks after 20 seconds
    setTimeout(() => {
        clearInterval(fireworkInterval);
    }, 20000);
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight / 2) + 100;
    
    firework.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #FFD700;
        border-radius: 50%;
        animation: fireworkExplode 1.5s ease-out forwards;
        z-index: 300;
    `;
    
    container.appendChild(firework);
    
    // Create explosion particles
    setTimeout(() => {
        createFireworkExplosion(container, x, y);
        firework.remove();
    }, 1000);
}

function createFireworkExplosion(container, x, y) {
    const colors = ['#FFD700', '#FF6347', '#32CD32', '#FF69B4', '#00CED1', '#FFA500'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 3px;
            height: 3px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            animation: fireworkParticle 2s ease-out forwards;
            z-index: 299;
        `;
        
        particle.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
        particle.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
        
        container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 2000);
    }
}

// Hover Effects
function addHoverEffects() {
    // Add hover effects to quality items
    const qualityItems = document.querySelectorAll('.quality-item');
    qualityItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        });
    });
    
    // Add hover effects to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0deg)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
    });
}

// Add CSS animations via JavaScript
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-10px) scale(1.2);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(0);
            }
        }
        
        @keyframes floatAcross {
            from {
                right: -50px;
                transform: rotate(0deg);
            }
            to {
                right: 100vw;
                transform: rotate(360deg);
            }
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(-20px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes balloonFloat {
            0% {
                transform: translateY(100vh) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-200px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
        
        @keyframes heartFloat {
            0% {
                transform: translateY(50px) scale(0);
                opacity: 0;
            }
            50% {
                opacity: 1;
                transform: scale(1.2);
            }
            100% {
                transform: translateY(-100vh) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes starTwinkle {
            0%, 100% {
                opacity: 0.3;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.2);
            }
        }
        
        @keyframes fireworkExplode {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(5);
                opacity: 0;
            }
        }
        
        @keyframes fireworkParticle {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--dx), var(--dy));
                opacity: 0;
            }
        }
        
        @keyframes blowOut {
            to {
                opacity: 0;
                transform: translateX(-50%) scale(0.1);
            }
        }
        
        @keyframes wishPopup {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize dynamic styles
addDynamicStyles();

// Window resize handler
window.addEventListener('resize', function() {
    // Adjust particle positions if needed
    const particles = document.querySelectorAll('.confetti, .balloon, .heart, .star');
    particles.forEach(particle => {
        const left = parseInt(particle.style.left);
        if (left > window.innerWidth) {
            particle.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
});

// Scroll-triggered animations
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('.president-biography, .achievements-timeline, .cake-ceremony, .testimonials-section, .final-celebration');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
});

// Additional interactive features
function addAdvancedInteractions() {
    // Make balloons clickable
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('balloon')) {
            e.target.style.animation = 'balloonPop 0.5s ease-out forwards';
            setTimeout(() => {
                if (e.target.parentNode) {
                    e.target.remove();
                }
            }, 500);
        }
    });
    
    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        const speed = scrolled * 0.2;
        parallax.style.backgroundPosition = `center ${speed}px`;
    });
}

// Initialize advanced interactions
setTimeout(addAdvancedInteractions, 6000);

// Performance optimization
function optimizePerformance() {
    // Remove old particles to prevent memory leaks
    setInterval(() => {
        const oldParticles = document.querySelectorAll('.confetti, .balloon, .heart');
        oldParticles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            if (rect.top > window.innerHeight + 100 || rect.bottom < -100) {
                if (particle.parentNode) {
                    particle.remove();
                }
            }
        });
    }, 5000);
}

// Start performance optimization
setTimeout(optimizePerformance, 10000);

console.log('🎉 Presidential Birthday Website Initialized Successfully! 🎉');

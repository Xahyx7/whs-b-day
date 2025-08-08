// Global variables
let musicPlaying = false;
let cakeClicked = false;
let confettiActive = false;
let autoScrollActive = true;
let currentSection = 0;
const sections = ['hero', 'portrait', 'biography', 'timeline', 'cake', 'testimonials', 'final'];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading sequence
    initializeLoadingSequence();
    
    // Set current date
    setCurrentDate();
    
    // Initialize auto-scroll after loading
    setTimeout(initializeAutoScroll, 8500);
    
    // Initialize animations after loading
    setTimeout(initializeAnimations, 5000);
    
    // Initialize interactive elements
    initializeInteractiveElements();
    
    // Initialize scroll progress
    initializeScrollProgress();
});

// Enhanced Loading Sequence
function initializeLoadingSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.loading-progress');
    const percentage = document.getElementById('loading-percentage');
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        percentage.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, 500);
        }
    }, 100);
}

// Auto Scroll Functionality
function initializeAutoScroll() {
    if (!autoScrollActive) return;
    
    const scrollToNextSection = () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            const targetSection = document.getElementById(sections[currentSection]);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // Reset to beginning for continuous loop
            currentSection = 0;
            const targetSection = document.getElementById(sections[currentSection]);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Auto-scroll timing (each section stays visible for different durations)
    const sectionTimings = [
        8000,  // hero - 8 seconds
        6000,  // portrait - 6 seconds
        8000,  // biography - 8 seconds
        7000,  // timeline - 7 seconds
        6000,  // cake - 6 seconds
        5000,  // testimonials - 5 seconds
        10000  // final - 10 seconds
    ];

    let timeoutId;
    
    const scheduleNextScroll = () => {
        const currentTiming = sectionTimings[currentSection] || 6000;
        timeoutId = setTimeout(() => {
            scrollToNextSection();
            scheduleNextScroll();
        }, currentTiming);
    };

    // Start auto-scrolling
    scheduleNextScroll();

    // Pause auto-scroll on user interaction
    let userInteractionTimeout;
    const pauseAutoScroll = () => {
        clearTimeout(timeoutId);
        clearTimeout(userInteractionTimeout);
        
        // Resume after 10 seconds of no interaction
        userInteractionTimeout = setTimeout(() => {
            scheduleNextScroll();
        }, 10000);
    };

    // Add event listeners for user interaction
    window.addEventListener('wheel', pauseAutoScroll);
    window.addEventListener('touchstart', pauseAutoScroll);
    window.addEventListener('keydown', pauseAutoScroll);
    window.addEventListener('click', pauseAutoScroll);
}

// Scroll Progress Indicator
function initializeScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
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

// Initialize Enhanced Animations
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
    
    // Stagger message paragraphs
    staggerMessageParagraphs();
    
    // Initialize symbol delays
    initializeSymbolDelays();
    
    // Initialize badge delays
    initializeBadgeDelays();
    
    // Initialize candle delays
    initializeCandleDelays();
    
    // Start enhanced particle effects
    setTimeout(startEnhancedParticleEffects, 3000);
    
    // Start confetti after cake appears
    setTimeout(startMegaConfettiShow, 15000);
    
    // Create floating balloons
    setTimeout(createEnhancedBalloons, 10000);
    
    // Create magical particles
    setTimeout(createMagicalParticles, 8000);
    
    // Start fireworks show
    setTimeout(startGrandFireworks, 18000);
    
    // Create rainbow effects
    setTimeout(createRainbowEffects, 12000);
}

// Stagger Animations
function staggerQualityItems() {
    const qualityItems = document.querySelectorAll('.quality-item');
    qualityItems.forEach((item, index) => {
        item.style.setProperty('--item-delay', `${index * 0.3}s`);
    });
}

function staggerTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--timeline-delay', `${index * 0.6}s`);
    });
}

function staggerTestimonialCards() {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-delay', `${index * 0.4}s`);
    });
}

function staggerWishItems() {
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach((item, index) => {
        item.style.setProperty('--wish-delay', `${index * 0.3}s`);
    });
}

function staggerPoemLines() {
    const poemLines = document.querySelectorAll('.poem-line');
    poemLines.forEach((line, index) => {
        line.style.setProperty('--line-delay', `${index * 0.4}s`);
    });
}

function staggerMessageParagraphs() {
    const paragraphs = document.querySelectorAll('.message-paragraph');
    paragraphs.forEach((para, index) => {
        para.style.setProperty('--message-delay', `${index * 0.5}s`);
    });
}

function initializeSymbolDelays() {
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach((symbol, index) => {
        symbol.style.setProperty('--symbol-delay', `${index * 0.2}s`);
    });
}

function initializeBadgeDelays() {
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.style.setProperty('--badge-delay', `${index * 0.3}s`);
    });
}

function initializeCandleDelays() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        candle.style.setProperty('--candle-delay', `${index * 0.1}s`);
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Enhanced music control
    const musicToggle = document.getElementById('music-toggle');
    const musicControl = document.getElementById('music-control');
    
    musicControl.addEventListener('click', toggleEnhancedMusic);
    
    // Enhanced cake interaction
    const cakeContainer = document.getElementById('cake-container');
    cakeContainer.addEventListener('click', handleEnhancedCakeClick);
    
    // Add hover effects to interactive elements
    addEnhancedHoverEffects();
}

// Enhanced Music Control
function toggleEnhancedMusic() {
    const musicToggle = document.getElementById('music-toggle');
    const visualizer = document.querySelector('.music-visualizer');
    
    if (musicPlaying) {
        musicToggle.textContent = '🎵';
        musicPlaying = false;
        visualizer.style.animationPlayState = 'paused';
        console.log('Birthday Symphony paused');
    } else {
        musicToggle.textContent = '🎶';
        musicPlaying = true;
        visualizer.style.animationPlayState = 'running';
        console.log('Birthday Symphony playing');
        
        // Add musical notes animation
        createMusicalNotes();
    }
}

function createMusicalNotes() {
    const notes = ['🎵', '🎶', '🎼', '🎤'];
    
    const noteInterval = setInterval(() => {
        if (!musicPlaying) {
            clearInterval(noteInterval);
            return;
        }
        
        const note = document.createElement('div');
        note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
        note.style.cssText = `
            position: fixed;
            right: 100px;
            top: 60px;
            font-size: ${Math.random() * 20 + 15}px;
            color: #ff6b6b;
            pointer-events: none;
            animation: noteFloat 3s ease-out forwards;
            z-index: 1001;
        `;
        
        document.body.appendChild(note);
        
        setTimeout(() => note.remove(), 3000);
    }, 500);
}

// Enhanced Cake Interaction
function handleEnhancedCakeClick() {
    if (!cakeClicked) {
        cakeClicked = true;
        blowOutCandles();
        setTimeout(showEnhancedWishMessage, 2000);
        setTimeout(startMegaConfetti, 1000);
        setTimeout(createWishStars, 1500);
    }
}

function blowOutCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.animation = 'flameBlowOut 0.8s ease-out forwards';
        }, index * 150);
    });
    
    // Add smoke effect
    setTimeout(createSmokeEffect, 1000);
}

function createSmokeEffect() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        const smoke = document.createElement('div');
        smoke.innerHTML = '💨';
        smoke.style.cssText = `
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.5rem;
            animation: smokeRise 3s ease-out forwards;
            opacity: 0.7;
        `;
        candle.appendChild(smoke);
        
        setTimeout(() => smoke.remove(), 3000);
    });
}

function showEnhancedWishMessage() {
    const message = document.createElement('div');
    message.className = 'enhanced-wish-popup';
    message.innerHTML = `
        <div class="wish-content">
            <div class="wish-stars">
                <span class="star">⭐</span>
                <span class="star">🌟</span>
                <span class="star">✨</span>
            </div>
            <h2>🌟 Your Birthday Wish Has Been Granted! 🌟</h2>
            <p>May all your dreams come true, Mr. President!</p>
            <div class="wish-magic">
                <span class="magic-spark">✨</span>
                <span class="magic-spark">💫</span>
                <span class="magic-spark">🌟</span>
                <span class="magic-spark">✨</span>
            </div>
        </div>
    `;
    
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FFD700, #FFA500, #FF6347);
        color: #2c3e50;
        padding: 3rem;
        border-radius: 30px;
        box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        z-index: 10000;
        text-align: center;
        animation: enhancedWishPopup 4s ease-out forwards;
        border: 3px solid rgba(255,255,255,0.5);
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 4000);
}

function createWishStars() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.innerHTML = ['⭐', '🌟', '✨', '💫'][Math.floor(Math.random() * 4)];
            star.style.cssText = `
                position: fixed;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                font-size: ${Math.random() * 25 + 15}px;
                pointer-events: none;
                animation: starBurst 2s ease-out forwards;
                z-index: 9999;
            `;
            
            document.body.appendChild(star);
            
            setTimeout(() => star.remove(), 2000);
        }, i * 100);
    }
}

// Enhanced Particle Effects
function startEnhancedParticleEffects() {
    createFloatingSparkles();
    createMagicalOrbs();
    createGlitterTrail();
}

function createFloatingSparkles() {
    setInterval(() => {
        if (Math.random() > 0.4) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = ['✨', '⭐', '💫', '🌟', '⚡'][Math.floor(Math.random() * 5)];
            sparkle.style.cssText = `
                position: fixed;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight + 50}px;
                font-size: ${Math.random() * 20 + 10}px;
                pointer-events: none;
                animation: sparkleRise 4s linear forwards;
                z-index: 50;
            `;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 4000);
        }
    }, 200);
}

function createMagicalOrbs() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fab1a0'];
    
    setInterval(() => {
        if (Math.random() > 0.6) {
            const orb = document.createElement('div');
            orb.style.cssText = `
                position: fixed;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent);
                border-radius: 50%;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                pointer-events: none;
                animation: orbFloat 6s infinite ease-in-out;
                z-index: 25;
                opacity: 0.7;
            `;
            
            document.body.appendChild(orb);
            
            setTimeout(() => orb.remove(), 6000);
        }
    }, 800);
}

function createGlitterTrail() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) {
            const glitter = document.createElement('div');
            glitter.innerHTML = '✨';
            glitter.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                font-size: ${Math.random() * 15 + 8}px;
                pointer-events: none;
                animation: glitterFade 1s ease-out forwards;
                z-index: 100;
            `;
            
            document.body.appendChild(glitter);
            
            setTimeout(() => glitter.remove(), 1000);
        }
    });
}

// Enhanced Confetti System
function startMegaConfettiShow() {
    if (confettiActive) return;
    confettiActive = true;
    
    const container = document.getElementById('confetti-container');
    const colors

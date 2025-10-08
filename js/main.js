// DCPL 2025 Slider Functionality
class DCPLSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.navDots = document.querySelectorAll('.nav-dot');
        this.totalSlides = this.slides.length;
        this.autoSlideInterval = null;
        
        this.init();
    }
    
    init() {
        // Add click event listeners to navigation dots
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause auto-slide on hover
        const slider = document.querySelector('.dcpl-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    goToSlide(slideIndex) {
        // Remove active class from current slide and nav dot
        this.slides[this.currentSlide].classList.remove('active');
        this.navDots[this.currentSlide].classList.remove('active');
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Add active class to new slide and nav dot
        this.slides[this.currentSlide].classList.add('active');
        this.navDots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // Change slide every 4 seconds
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Team Players Data
const players = [
    {
        id: 1,
        name: "Prithvi",
        number: "01",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 45,
            runs: 1250,
            average: 35.5,
            strikeRate: 128.4
        }
    },
    {
        id: 2,
        name: "FK",
        number: "02",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 38,
            runs: 850,
            wickets: 25,
            economy: 7.8
        }
    },
    {
        id: 3,
        name: "Hamid",
        number: "05",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 42,
            wickets: 55,
            economy: 7.2,
            bestBowling: "4/25"
        }
    },
    {
        id: 4,
        name: "Rohit",
        number: "07",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 50,
            runs: 1580,
            average: 38.5,
            strikeRate: 135.2
        }
    },
    {
        id: 5,
        name: "Roy",
        number: "08",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 45,
            runs: 920,
            wickets: 30,
            economy: 8.1
        }
    },
    {
        id: 6,
        name: "Mangal",
        number: "10",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 40,
            runs: 1100,
            average: 32.5,
            strikeRate: 125.8
        }
    },
    {
        id: 7,
        name: "Vamsi",
        number: "10",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 35,
            wickets: 45,
            economy: 7.5,
            bestBowling: "3/28"
        }
    },
    {
        id: 8,
        name: "Pasha",
        number: "11",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 48,
            runs: 780,
            wickets: 35,
            economy: 7.9
        }
    },
    {
        id: 9,
        name: "Madhu",
        number: "12",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 44,
            runs: 1350,
            average: 36.8,
            strikeRate: 130.5
        }
    },
    {
        id: 10,
        name: "Ricky",
        number: "17",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 38,
            wickets: 48,
            economy: 7.4,
            bestBowling: "4/30"
        }
    },
    {
        id: 11,
        name: "Ajaz H",
        number: "19",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 42,
            runs: 680,
            wickets: 28,
            economy: 8.2
        }
    },
    {
        id: 12,
        name: "Tanha",
        number: "21",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 40,
            runs: 950,
            average: 31.2,
            strikeRate: 127.5
        }
    },
    {
        id: 13,
        name: "Siva",
        number: "24",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 36,
            wickets: 42,
            economy: 7.6,
            bestBowling: "3/25"
        }
    },
    {
        id: 14,
        name: "PK",
        number: "26",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 45,
            runs: 820,
            wickets: 32,
            economy: 7.8
        }
    },
    {
        id: 15,
        name: "FEDERER",
        number: "27",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 46,
            runs: 1420,
            average: 37.5,
            strikeRate: 132.8
        }
    },
    {
        id: 16,
        name: "Khalid",
        number: "36",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 40,
            wickets: 50,
            economy: 7.3,
            bestBowling: "4/22"
        }
    },
    {
        id: 17,
        name: "Sajal",
        number: "45",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 43,
            runs: 750,
            wickets: 30,
            economy: 8.0
        }
    },
    {
        id: 18,
        name: "Sai kiran",
        number: "48",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 41,
            runs: 1180,
            average: 33.8,
            strikeRate: 129.5
        }
    },
    {
        id: 19,
        name: "VK",
        number: "63",
        role: "Bowler",
        image: "images/players/placeholder.png",
        stats: {
            matches: 39,
            wickets: 46,
            economy: 7.5,
            bestBowling: "3/24"
        }
    },
    {
        id: 20,
        name: "Rakesh",
        number: "69",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 44,
            runs: 890,
            wickets: 34,
            economy: 7.9
        }
    },
    {
        id: 21,
        name: "Sherry",
        number: "07",
        role: "Batsman",
        image: "images/players/placeholder.png",
        stats: {
            matches: 42,
            runs: 1280,
            average: 34.5,
            strikeRate: 131.2
        }
    },
    {
        id: 22,
        name: "Raj",
        number: "127",
        role: "All-rounder",
        image: "images/players/placeholder.png",
        stats: {
            matches: 47,
            runs: 980,
            wickets: 38,
            economy: 7.7
        }
    }
];

const matches = {
    upcoming: [
        {
            opponent: "Mumbai Indians",
            date: "2025-02-15",
            venue: "Rajiv Gandhi Stadium, Hyderabad",
            time: "19:30 IST"
        },
        {
            opponent: "Chennai Super Kings",
            date: "2025-02-20",
            venue: "MA Chidambaram Stadium, Chennai",
            time: "19:30 IST"
        }
    ],
    recent: [
        {
            opponent: "Royal Challengers Bangalore",
            result: "Won by 5 wickets",
            score: "DC: 185/5 (18.4) | RCB: 182/6 (20)",
            highlights: "#"
        }
    ]
};

const news = [
    {
        title: "Deccan Chargers Return to IPL",
        image: "images/news/news1.jpg",
        summary: "The legendary team makes a grand comeback to the Indian Premier League.",
        date: "2025-01-30"
    },
    {
        title: "New Players Join the Squad",
        image: "images/news/news2.jpg",
        summary: "Top international players sign up for the upcoming season.",
        date: "2025-01-28"
    }
];

// DOM Elements
const playersGrid = document.getElementById('playersGrid');
const upcomingMatches = document.getElementById('upcomingMatches');
const recentResults = document.getElementById('recentResults');
const newsGrid = document.getElementById('newsGrid');
const playerModal = document.getElementById('playerModal');
const playerModalContent = document.getElementById('playerModalContent');

// Initialize Content
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    loadPlayers();
    loadMatches();
    loadNews();
    initializeEventListeners();
    
    // Initialize DCPL Slider
    new DCPLSlider();
});

// GSAP Animations
function initializeAnimations() {
    // Hero Section Animation
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-section h1', {
        duration: 2,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
    })
    .from('.hero-section p', {
        duration: 1.5,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    }, '-=1.5')
    .from('.hero-buttons .btn', {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'power2.out',
        stagger: 0.2
    }, '-=1');

    // Scroll Animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0
        });
    });

    // Fade Up Animation for Cards
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2
        });
    });
}

// Content Loading Functions
function loadPlayers() {
    playersGrid.innerHTML = `<div class="players-grid">` + 
        players.map(player => `
            <div class="player-card" onclick="showPlayerDetails(${player.id})">
                <div class="player-number">${player.number}</div>
                <img class="player-image" src="${player.image}" alt="${player.name}">
                <img class="player-logo" src="images/DeccanChargers.gif" alt="DC Logo">
                <div class="player-name">${player.name}</div>
            </div>
        `).join('') + 
    `</div>`;
}

function loadMatches() {
    upcomingMatches.innerHTML = matches.upcoming.map(match => `
        <div class="match-card fade-up">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h4 class="text-gold">DC vs ${match.opponent}</h4>
                    <p class="mb-1">${match.venue}</p>
                    <p class="mb-0">${match.date} | ${match.time}</p>
                </div>
                <a href="#" class="btn btn-outline-gold btn-sm">Book Tickets</a>
            </div>
        </div>
    `).join('');

    recentResults.innerHTML = matches.recent.map(match => `
        <div class="match-card fade-up">
            <h4 class="text-gold">DC vs ${match.opponent}</h4>
            <p class="mb-1">${match.result}</p>
            <p class="mb-2">${match.score}</p>
            <a href="${match.highlights}" class="btn btn-outline-gold btn-sm">Watch Highlights</a>
        </div>
    `).join('');
}

function loadNews() {
    newsGrid.innerHTML = news.map(article => `
        <div class="col-md-6 fade-up">
            <div class="news-card">
                <div class="news-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <div class="news-content">
                    <h3 class="text-gold">${article.title}</h3>
                    <p class="text-muted">${article.date}</p>
                    <p>${article.summary}</p>
                    <a href="#" class="btn btn-outline-gold btn-sm">Read More</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Event Handlers
function showPlayerDetails(playerId) {
    const player = players.find(p => p.id === playerId);
    if (!player) return;

    let statsHtml = '';
    if (player.role === "Batsman") {
        statsHtml = `
            <li>Matches: ${player.stats.matches}</li>
            <li>Runs: ${player.stats.runs}</li>
            <li>Average: ${player.stats.average}</li>
            <li>Strike Rate: ${player.stats.strikeRate}</li>
        `;
    } else if (player.role === "Bowler") {
        statsHtml = `
            <li>Matches: ${player.stats.matches}</li>
            <li>Wickets: ${player.stats.wickets}</li>
            <li>Economy: ${player.stats.economy}</li>
            <li>Best Bowling: ${player.stats.bestBowling}</li>
        `;
    } else {
        statsHtml = `
            <li>Matches: ${player.stats.matches}</li>
            <li>Runs: ${player.stats.runs}</li>
            <li>Wickets: ${player.stats.wickets}</li>
            <li>Economy: ${player.stats.economy}</li>
        `;
    }

    playerModalContent.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${player.image}" alt="${player.name}" class="img-fluid rounded">
                <div class="text-center mt-3">
                    <h1 class="display-4 text-gold">#${player.number}</h1>
                </div>
            </div>
            <div class="col-md-6">
                <h2 class="text-gold mb-2">${player.name}</h2>
                <p class="h4 mb-4 text-gold opacity-75">${player.role}</p>
                <div class="stats-box p-3 bg-darker rounded border border-gold">
                    <h4 class="text-gold mb-3">Statistics</h4>
                    <ul class="list-unstyled">
                        ${statsHtml}
                    </ul>
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(playerModal);
    modal.show();
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast show position-fixed bottom-0 end-0 m-3';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="toast-body bg-dark text-gold">
            ${message}
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Smooth Scrolling
function initializeEventListeners() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real project, this would send the form data to a server
            showToast('Message sent successfully!');
            this.reset();
        });
    }
}

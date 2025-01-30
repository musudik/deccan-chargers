const fs = require('fs');

function createSVGPlaceholder(text, filename, color = '#B8860B') {
    const svg = `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3e%3crect width='400' height='300' fill='${color}'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='black' font-size='24' font-family='Arial'%3e${text}%3c/text%3e%3c/svg%3e`;
    
    fs.writeFileSync(filename, svg);
}

// Create player images
if (!fs.existsSync('assets/players')) {
    fs.mkdirSync('assets/players', { recursive: true });
}
createSVGPlaceholder('Adam Gilchrist', 'assets/players/player1.jpg');
createSVGPlaceholder('VVS Laxman', 'assets/players/player2.jpg');
createSVGPlaceholder('Rohit Sharma', 'assets/players/player3.jpg');
createSVGPlaceholder('RP Singh', 'assets/players/player4.jpg');
createSVGPlaceholder('Pragyan Ojha', 'assets/players/player5.jpg');
createSVGPlaceholder('Andrew Symonds', 'assets/players/player6.jpg');

// Create news images
if (!fs.existsSync('assets/news')) {
    fs.mkdirSync('assets/news', { recursive: true });
}
createSVGPlaceholder('News 1', 'assets/news/news1.jpg');
createSVGPlaceholder('News 2', 'assets/news/news2.jpg');

// Create merchandise images
if (!fs.existsSync('assets/merchandise')) {
    fs.mkdirSync('assets/merchandise', { recursive: true });
}
createSVGPlaceholder('Jersey', 'assets/merchandise/jersey.jpg');
createSVGPlaceholder('Cap', 'assets/merchandise/cap.jpg');

// Create hero background
createSVGPlaceholder('Hero Background', 'assets/logos/hero-bg.jpg', '#000000');

console.log('Placeholder images created successfully!');

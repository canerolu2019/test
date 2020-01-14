var game = {
    words: ['apple', 'orange', 'banana'], 
    word: undefined, 
    letters: [],
    start: function() {
        this.word = this.randomWorld(); 
    }, 
    randomWorld: function() {
        let index = Math.floor(Math.random() * this.words.length); 
        return this.words[index];
    },
    tryLetter: function(letter) {
        this.letters.push(letter); 
        if(!this.word.split('').includes(letter)) {
            this.triesLeft--;
        }
    }, 
    isDead: function() {
        return this.triesLeft == 0;
    }, 
    isWinner: function() {
        return this.randomWorld.split('')
                       .every(letter => this.letters.includes(letter))
    }
} 
function renderLetters() {
    document.getElementById("letters").innerText = game.letters.join(' '); 
} 
function renderWord() {
    let text = game.word.split('') 
        .map(letter => game.letters.includes(letter) ? letter : '_') 
        .join(' ');
        document.getElementById("word").innerText = text;
} 
function renderDrawing() {
    let parts = ['head','body','left_arm','right_arm','left_leg','right_leg',] 
    let visible = parts.slice(0, 6 - game.triesLeft); 
    let invisible=parts.slice(6 - game.triesLeft); 
    visible.forEach(name => document.getElementById(name).style.visibility = 'visible')
} 
function renderView() {
    renderLetters();
    renderWord(); 
    renderDrawing(); 
} 
window.addEventListener('keydown', function(event) {
    game.tryLetter(event.key); 
    renderView(); 
}); 
game.start(); 
renderView();

var game = {
    words: ['apple', 'orange', 'banana'], 
    word: undefined, 
    letters: [],
    start: function() {
        this.word = this.randomWorld(); 
    }, 
    randomWorld: function() {
        let index = (Math.random() * this.words.length); 
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
        
    }   
}
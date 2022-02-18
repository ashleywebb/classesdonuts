class Hero{ 
    counstructor(name) {
    this.name = name
    this.health = 100; 
    this.catchPhrases = ['i\'m fresher than day old pizza',
    'you can\'t count my calories']
    }
    weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
    }
    talkSass() {
        return this.catchPhrases[Math.floor(math.random() * this.catchPhrases.length)]
    }
    announceHealth() {
        return this.health
    }
    fight() {
        return "i\'m ready to rumble"
    }
} 

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10
    } 
    talkSmack() {
        return this.catchPhrases[Math.floor(math.random() * this.catchPhrases.length)]
    }
    announceHealth() {
        return this.health
    }
    fight() {
        return 'i\'m gonna flatten you like a slice of pepperoni!'
    }
}

const hero = new Hero('Dougie')
const enemy = new Enemy('Pizza Rat')
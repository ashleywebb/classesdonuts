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
        return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    }
    announceHealth() {
        return this.health
    }
    fight() {
        let weapons1 = Object.keys(this.weapons)
        return weapons1[Math.floor(Math.random() * weapons1.length)]
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
        return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    }
    announceHealth() {
        return this.health
    }
    fight() {
        let weapons2 = Object.keys(this.weapons)
        return weapons2[Math.floor(Math.random() * weapons2.length)]
    }
}

const hero = new Hero('Dougie')
const enemy = new Enemy('Pizza Rat')

console.log(hero.talkSass())
console.log(enemy.talkSmack())
console.log(hero.announceHealth())
console.log(enemy.announceHealth())
console.log(hero.health -= enemy.fight())
console.log(enemy.health -= hero.fight())
console.log(enemy.announceHealth())
console.log(hero.announceHealth())
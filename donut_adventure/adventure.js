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
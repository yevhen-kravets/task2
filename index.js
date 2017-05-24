class Fighter {
    constructor(name, power, health=100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter {
    constructor(name, power, health=100) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        this.hit(enemy, 2 * point);
    }
}

function fight(fighter, improvedFighter, ...points) {
    
}
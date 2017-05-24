class Fighter {
    constructor(name, power, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        const val = Math.round(this.health - damage);
        this.health = val < 0 ? 0 : val;
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy, point) {
        const damage = point * this.power;
        if (enemy.health > 0) enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter {
    constructor(...props) {
        super(...props);
    }

    doubleHit(enemy, point) {
        this.hit(enemy, 2 * point);
    }
}

let fighter = new Fighter('Fighter', 0.4);
let improvedFighter = new ImprovedFighter('ImprovedFighter', 0.25);

function fight(fighter, improvedFighter, ...points) {
    console.log('------new round------');
    let loser;

    points.forEach(point => {

        fighter.doubleHit
            ? fighter.doubleHit(improvedFighter, point)
            : fighter.hit(improvedFighter, point);

        if (improvedFighter.health === 0) {
            loser = improvedFighter;
            return;
        }

        improvedFighter.doubleHit
            ? improvedFighter.doubleHit(fighter, point)
            : improvedFighter.hit(fighter, point);

        if (fighter.health === 0) {
            loser = fighter;
            return;
        }

    });

    if (!loser) return fight(fighter, improvedFighter, ...points);

    console.log(`${loser.name} losing battle`);
}


fight(fighter, improvedFighter, 25, 13, 45);
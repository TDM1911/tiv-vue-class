function damageCalculation(baseDamage, critDamage) {
    let totalCritDamage = Math.floor(Math.random() * critDamage) + Math.floor(Math.random() * critDamage);

    return baseDamage + totalCritDamage;
}

function healingCalculation(baseHeal, critHeal) {
    let totalCritHeal = (Math.floor(Math.random() * critHeal) + Math.floor(Math.random() * critHeal));

    return baseHeal + totalCritHeal;
}

const app = Vue.createApp({
    data() {
        return {
            maxHealth: 100,
            monster: {
                health: 100,
                baseDamage: 8,
                critDamage: 4,
            },
            player: {
                health: 100,
                baseDamage: 5,
                critDamage: 4,
                baseHeal: 12,
                critHeal: 5,
                buff: null,
                specialCharge: 0,
            },
            turns: 0,
            logs: [],
        };
    },

    computed: {
        playerHealthPercentage() {
            return this.player.health / this.maxHealth * 100;
        },
        monsterHealthPercentage() {
            return this.monster.health / this.maxHealth * 100;
        },
    },

    methods: {
        attackMonster() {
            if (this.player.health == 0 || this.monster.health == 0) {
                return false;
            }
            let damage = damageCalculation(this.player.baseDamage, this.player.critDamage);
            this.monster.health -= damage;
            this.player.specialCharge++;
            if (this.monster.health < 0) {
                this.monster.health = 0;
            }
            this.logs.push({
                'action': 'attack',
                'actor': 'The Player',
                'value': damage,
            });
            this.attackPlayer();
        },

        attackMonster() {
            if (this.player.health == 0 || this.monster.health == 0) {
                return false;
            }
            let damage = damageCalculation(this.player.baseDamage, this.player.critDamage);
            this.monster.health -= damage;
            this.player.specialCharge++;
            if (this.monster.health < 0) {
                this.monster.health = 0;
            }
            this.logs.push({
                'action': 'attack',
                'actor': 'The Player',
                'value': damage,
            });
            this.attackPlayer();
        },

        attackPlayer() {
            if (this.player.health == 0 || this.monster.health == 0) {
                return false;
            }
            let damage = damageCalculation(this.monster.baseDamage, this.monster.critDamage);
            this.player.health -= damage;
            if (this.player.health < 0) {
                this.player.health = 0;
            }
            this.logs.push({
                'action': 'attack',
                'actor': 'The Monster',
                'value': damage,
            });
        },

        healPlayer() {
            if (this.player.health == 0) {
                alert("You're already dead.");
            }

            let heal = healingCalculation(this.player.baseHeal, this.player.critHeal);
            this.player.health += heal;

            if (this.player.health > this.maxHealth) {
                this.player.health = this.maxHealth;
            }
            this.logs.push({
                'action': 'heal',
                'actor': 'The Player',
                'value': heal,
            });
            this.attackPlayer();
        },
    },
});

app.mount('#game');

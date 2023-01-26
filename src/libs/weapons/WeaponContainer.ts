interface IWarrior {
    weapon: IWeapon;
}

interface IWeapon {
    name: string;
    damage: number;
}

class Sword implements IWeapon {
    name = "Sword";
    damage = 10;
}

class GreatSword implements IWeapon {
    name = "Great Sword";
    damage = 20;
}

class Axe implements IWeapon {
    name = "Axe";
    damage = 15;
}

class GreatAxe implements IWeapon {
    name = "Great Axe";
    damage = 25;
}

class WeaponContainer {
    private weapon: IWeapon;

    constructor(weapon: IWeapon) {
        this.weapon = weapon;
    }

    getWeapon() {
        return this.weapon;
    }
}

class Warrior implements IWarrior {
    weapon: IWeapon;

    constructor(weapon: IWeapon) {
        this.weapon = weapon;
    }
}

const weaponContainer = new WeaponContainer(new GreatSword());
const warrior = new Warrior(weaponContainer.getWeapon());
console.log(warrior.weapon.name); // Great Sword
console.log(warrior.weapon.damage); // 20

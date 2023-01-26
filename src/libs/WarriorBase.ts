import {IWarrior} from "./contracts/IWarrior";
import {IArmy} from "./contracts/IArmy";
import {IWeapon} from "./contracts/IWeapon";

export class WarriorBase implements IWarrior {
    private health: number;
    private strength: number;
    // private modifiers: { castle: number; grassland: number, fog: number, rain: number, scorchingSun: number }
    private damageReduction: number;
    private isDefending: boolean;
    private weapon: IWeapon;
    private _army: IArmy;
    public hasActed: boolean;


    get Army(): IArmy {
        return this._army;
    }

    private set Army(value: IArmy) {
        this._army = value;
    }

    get Weapon(): IWeapon {
        return this.weapon;
    }

    private set Weapon(value: IWeapon) {
        this.weapon = value;
    }

    get DamageReduction() {
        const modifier = this.isDefending ? 2 : 1;
        return this.damageReduction * modifier;
    }

    private set DamageReduction(value: number) {
        this.damageReduction = value;
    }

    get Strength() {
        return this.strength;
    }

    protected set Strength(value: number) {
        this.strength = value;
    }

    get Health() {
        return this.Health;
    }
    protected set Health(value: number) {
        this.health = value;
    }


    constructor(army: IArmy, weapon: IWeapon) {
        this.Army = army;
        this.Weapon = weapon;
    }

    public Attack(modifiers: string[]): number[] {
        this.isDefending = false;
        this.hasActed = true;
        if (this.Health < 1) return [0, 0];

        return [this.strength + this.Weapon.minDamage, this.strength + this.Weapon.maxDamage];
    }

    public Defend() {
        this.isDefending = true;
        this.hasActed = true;
    }
}
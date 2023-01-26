import {IWarrior} from "../contracts/IWarrior";
import {IArmy} from "../contracts/IArmy";
import {IBattlefield} from "../contracts/IBattlefield";
import {IWeapon} from "../contracts/IWeapon";

export class Barbarian //implements IWarrior {
{private health: number;
    private strength: number;
    private modifiers: { castle: number; grassland: number, fog: number, rain: number, scorchingSun: number }
    public Army: IArmy;

    constructor(weapon:IWeapon) {
        this.health = 120;
        this.strength = 70;
        this.Weapon = weapon;
        this.modifiers = {
            castle: -5,
            grassland: 2,
            rain: -3,
            fog: -2,
            scorchingSun: 2,
        }
    }


    public Defend(){
        console.log("Barbarian defends with " + this.Weapon);
    }

    public ReceiveDamage(damage: number) {
        this.health -= damage;
        console.log("Barbarian receives " + damage + " damage. Current health: " + this.health);
    }

    public ReadyForBattle(){
        this.health += 15;
        this.strength += 6;
    }

    private rage(): void {
        let warriors =  this.Army.warriors;
        for (const fellowBarbarian of warriors) {
            this.strength += 1;
        }
    }

    private getRandomNumber = (min:number,max:number): number => Math.random() * (max - min) + min;


    Modifiers(): any {
    }

    RoundLapse(battlefield: IBattlefield): void {
    }

    Weapon: IWeapon;
}
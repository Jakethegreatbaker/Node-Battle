import {IArmy} from "../contracts/IArmy";
import {IWeapon} from "../contracts/IWeapon";
import {WarriorBase} from "../WarriorBase";

export class Knight extends WarriorBase {
    // private modifiers: { castle: number; grassland: number, fog: number, rain: number, scorchingSun: number }

    // constructor(weapon:IWeapon) {
    //     this.health = 120;
    //     this.strength = 70;
    //     this.Weapon = weapon;
    //     this.modifiers = {
    //         castle: 5,
    //         grassland: -2,
    //         rain: -5,
    //         fog: -3,
    //         scorchingSun: 2,
    //     }
    // }

    constructor(army: IArmy, weapon: IWeapon) {
        super(army, weapon);
        this.Health = 120;
        this.Strength = 5;

        // this.Modifiers = {
        //     castle: 5,
        //     grassland: -2,
        //     rain: -5,
        //     fog: -3,
        //     scorchingSun: 2,
        // }
    }


    public Rally(): void {
        let warriors =  this.Army.warriors;
        for (const fellowKnight of warriors) {
            this.Health += 0.5;
        }
    }

}

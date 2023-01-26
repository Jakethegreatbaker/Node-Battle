import {IWarrior} from "../contracts/IWarrior";
import {Knight} from "./Knight";
import {IWeapon} from "../contracts/IWeapon";
import {Sword} from "../weapons/Sword";
import {IArmy} from "../contracts/IArmy";
import {KingsArmy} from "./KingsArmy";
import {GreatSword} from "../weapons/GreatSword";


export const KnightContainer = () => {
    const getIWeapon = ():IWeapon => new Sword();
    const getIWarrior = ():IWarrior => new Knight(getIWeapon());

    const getIArmy = (totalWarriors: number):IArmy => {
        let warriors: IWarrior[]=[];
        for (let i = 0; i < totalWarriors; i++) {
            warriors.push(getIWarrior());
        }
        return new KingsArmy(warriors);
    };
    return {
        IArmy: getIArmy
    }
}
// import {Axe} from "../weapons/Axe";
// import {IWeapon} from "../contracts/IWeapon";
// import {IWarrior} from "../contracts/IWarrior";
// import {Barbarian} from "./Barbarian";
// import {IArmy} from "../contracts/IArmy";
// import {Horde} from "./Horde";
//
//
// export const BarbarianContainer = () => {
//     const getIWeapon = ():IWeapon => new Axe();
//     const getIWarrior = ():IWarrior => new Barbarian(getIWeapon());
//
//     const getIArmy = (totalWarriors: number):IArmy => {
//         let warriors: IWarrior[]=[];
//         for (let i = 0; i < totalWarriors; i++) {
//             warriors.push(getIWarrior());
//         }
//         return new Horde (warriors);
//     };
//     return {
//         IArmy: getIArmy
//     }
// }

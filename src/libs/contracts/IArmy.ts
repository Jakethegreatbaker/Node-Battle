import {IWarrior} from "./IWarrior";
import {IBattlefield} from "./IBattlefield";

export interface IArmy  {
    warriors: IWarrior[];

    attack(battlefield: IBattlefield, terrain: ITerrain, weather: IWeather): void;


defend():void;

    receiveDamage(damage: number);
}

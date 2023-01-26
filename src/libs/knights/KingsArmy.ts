import {IArmy} from "../contracts/IArmy";
import {IWarrior} from "../contracts/IWarrior";
import {IBattlefield} from "../contracts/IBattlefield";
import {IWeather} from "../contracts/IWeather";
import {ITerrain} from "../contracts/ITerrain";

export class KingsArmy implements IArmy{

    public warriors: IWarrior[];

    constructor(warriors: IWarrior[]) {
        this.warriors = warriors;
    }

    public attack(battlefield:IBattlefield, terrain:ITerrain, weather:IWeather) {
        this.warriors.forEach(warrior => {
            warrior.Attack(battlefield.terrain);
        });
    }

    public defend() {
        this.warriors.forEach(warrior => warrior.Defend());
    }

    public receiveDamage(damage: number) {
        this.warriors.forEach(warrior => warrior.ReceiveDamage(damage));
    }
}
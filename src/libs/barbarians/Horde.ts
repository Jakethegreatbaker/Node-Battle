import {IBattlefield} from "../contracts/IBattlefield";
import {IWarrior} from "../contracts/IWarrior";
import {IArmy} from "../contracts/IArmy";

export class Horde implements IArmy{
    public warriors: IWarrior[];
    set name(value: string) {
        this._name ??= value;
    }
    get name(): string {
        return this._name;
    }
    private _name : string;


    constructor(warriors: IWarrior[]) {
        this.warriors = warriors;
    }

    public attack(battlefield: IBattlefield) {
        console.log("");
        this.warriors.forEach(warrior => {
            warrior.Attack(`${this._name} attacks!`);
        });
    }

    public defend() {
        console.log(`${this._name} defends!`);
        this.warriors.forEach(warrior => warrior.Defend());
    }

    public receiveDamage(damage: number) {
        console.log(`${this._name} receives ` + damage + " damage.");
        this.warriors.forEach(warrior => warrior.ReceiveDamage(damage));
    }

    static Attack(KingsArmy: IArmy, terrain: any, weather: any) {

    }
}
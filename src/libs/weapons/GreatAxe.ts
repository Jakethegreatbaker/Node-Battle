import {IWeapon} from "../contracts/IWeapon";

export class GreatAxe implements IWeapon {
    maxDamage: number = 12;
    minDamage: number = 1;
    toString=(): string=> 'GreatAxe';
}
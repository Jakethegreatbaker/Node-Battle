import {IWeapon} from "../contracts/IWeapon";

export class GreatSword implements IWeapon {
    maxDamage: number = 12;
    minDamage: number = 2;

    toString=(): string=> 'GreatSword';
}
import {IWeapon} from "../contracts/IWeapon";

export class Sword implements IWeapon {
    maxDamage: number = 10;
    minDamage: number = 1;

    toString=(): string=> 'Sword';
}

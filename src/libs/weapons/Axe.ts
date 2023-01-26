import {IWeapon} from "../contracts/IWeapon";

export class Axe implements IWeapon {
    maxDamage: number = 8;
    minDamage: number = 1;

    toString=(): string=> 'Axe';
}
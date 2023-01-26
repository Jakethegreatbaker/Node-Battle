export interface IWarrior {
    Strength: number;
    Health: number;
    Weapon: IWeapon;

    Attack(modifiers: string[]): number[];

    Army: IArmy;

    Defend(): void;
}
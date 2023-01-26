import {IBattlefield} from "../../contracts/IBattlefield";

export class Grasslands implements IBattlefield {
    public terrain: string;

    constructor() {
        this.terrain = "grasslands";
    }

    public displayTerrain() {
        console.log("The battlefield, it's dominated by " + this.terrain);
    }

    weather: string;

    displayWeather(): void {
    }
}
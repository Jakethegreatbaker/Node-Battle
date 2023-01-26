import {IBattlefield} from "../../contracts/IBattlefield";


export class Castle implements IBattlefield {
    public terrain: string;

    constructor() {
        this.terrain = "a castle";
    }

    public displayTerrain() {
        console.log("The battlefield is a " + this.terrain);
    }

    weather: string;

    displayWeather(): void {
    }
}
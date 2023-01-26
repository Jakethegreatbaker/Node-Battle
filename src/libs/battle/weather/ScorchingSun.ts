import { IWeather } from '../Contracts';

export class ScorchingSun implements IWeather {
    public weather: string;

    constructor() {
        this.weather = "Scorching sun";
    }

    public displayWeather() {
        console.log(this.weather + "covers the battlefield.");
    }
}
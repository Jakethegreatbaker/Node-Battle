import { IWeather } from '../Contracts';

export class Rain implements IWeather {
    public weather: string;

    constructor() {
        this.weather = "Rain";
    }

    public displayWeather() {
        console.log(this.weather + "covers the battlefield.");
    }
}
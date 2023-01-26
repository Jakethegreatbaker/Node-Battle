import { IWeather } from '../Contracts';

export class Fog implements IWeather {
    public weather: string;

    constructor() {
        this.weather = "Fog";
    }

    public displayWeather() {
        console.log(this.weather + "covers the battlefield.");
    }
}
import { Rain } from "./Rain";
import {IWeather} from "../../contracts/IWeather";

export const WeatherContainer = () => {
    // const getRain = (): IWeather => {
    //     return new Rain();
    // }
    //
    // const getScorchingSun = (): IWeather => {
    //     return new ScorchingSun();
    // }
    //
    // const getFog = (): IWeather => {
    //     return new Fog();
    // }
    //
    // const getForecast = (condition: string): IWeather => {
    //     switch(condition) {
    //         case "rain":
    //             return getRain();
    //         case "sun":
    //             return getScorchingSun();
    //         case "fog":
    //             return getFog();
    //         default:
    //             throw new Error(`Invalid condition: ${condition}`);
    //     }
    // }
    //
    // return {
    //     Forecast: getForecast
    // }

    const getForecast = (): IWeather => new Rain();

    return {
        Forecast: getForecast
    }
}

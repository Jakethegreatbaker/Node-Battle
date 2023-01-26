import { Rain } from '../battle/weather/Rain';
import { Fog } from '../battle/weather/Fog';
import { ScorchingSun } from "../battle/weather/ScorchingSun";

export interface IWeather {
    weather: string;
    displayWeather(): void;
}

import { Grasslands } from '../battle/battlefield/Grasslands';
import { Castle } from '../battle/battlefield/Castle';
import { Rain } from '../battle/weather/Rain';
import { Fog } from '../battle/weather/Fog';
import { ScorchingSun } from '../battle/weather/ScorchingSun';
export interface IBattlefield {
    terrain: string;
    weather: string;
    displayTerrain(): void;
    displayWeather(): void;
}

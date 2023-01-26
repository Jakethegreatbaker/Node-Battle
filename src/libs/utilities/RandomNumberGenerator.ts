import {IRandomNumberGenerator} from "./IRandomNumberGenerator";

export class RandomNumberGenerator implements IRandomNumberGenerator {
    seed = this.Next(0, 100);

    Next(min:number,max:number): number {
      return Math.random() * (max - min) + min;
    }
}
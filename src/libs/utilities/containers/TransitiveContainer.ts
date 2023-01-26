import {IRandomNumberGenerator} from "../IRandomNumberGenerator";
import {RandomNumberGenerator} from "../RandomNumberGenerator";

export const UtilitiesContainer = () => {
    // Service Lifetimes

    // Transitive - One per Request
    const getTransitiveIRandomNumberGenerator = (): IRandomNumberGenerator => new RandomNumberGenerator();

    return {
        IRandomNumberGenerator: getTransitiveIRandomNumberGenerator
    }
}
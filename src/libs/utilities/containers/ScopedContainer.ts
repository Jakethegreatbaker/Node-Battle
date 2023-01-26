import {IRandomNumberGenerator} from "../IRandomNumberGenerator";
import {RandomNumberGenerator} from "../RandomNumberGenerator";


export const UtilitiesContainer = () => {
    // Scoped - Same one for the lifetime of the scope.
    const instanceOfIRandomNumberGenerator = new RandomNumberGenerator();
    const getScopedIRandomNumberGenerator = (): IRandomNumberGenerator => instanceOfIRandomNumberGenerator;

    return {
        IRandomNumberGenerator: getScopedIRandomNumberGenerator
    }
}
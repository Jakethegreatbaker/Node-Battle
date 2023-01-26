import {IRandomNumberGenerator} from "../IRandomNumberGenerator";
import {RandomNumberGenerator} from "../RandomNumberGenerator";

const UtilitiesContainerSingletons:
    { IRandomNumberGeneratorInstance: IRandomNumberGenerator } = {
    IRandomNumberGeneratorInstance: new RandomNumberGenerator()
}

export const UtilitiesContainer = () => {

    // Singleton - Same one on every request
    const getSingletonIRandomNumberGenerator =
        (): IRandomNumberGenerator => UtilitiesContainerSingletons.IRandomNumberGeneratorInstance;

    return {
        IRandomNumberGenerator: getSingletonIRandomNumberGenerator
    }
}
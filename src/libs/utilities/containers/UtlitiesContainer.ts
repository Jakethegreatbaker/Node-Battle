import {IRandomNumberGenerator} from "../IRandomNumberGenerator";
import {RandomNumberGenerator} from "../RandomNumberGenerator";

const UtilitiesContainerSingletons:
    { IRandomNumberGeneratorInstance: IRandomNumberGenerator } = {
    IRandomNumberGeneratorInstance: new RandomNumberGenerator()
}

export const UtilitiesContainer = () => {
    // Service Lifetimes

    // Transitive - One per Request
    const getTransitiveIRandomNumberGenerator = (): IRandomNumberGenerator => new RandomNumberGenerator();

    // Scoped - Same one for the lifetime of the scope.
    const instanceOfIRandomNumberGenerator = new RandomNumberGenerator();
    const getScopedIRandomNumberGenerator = (): IRandomNumberGenerator => instanceOfIRandomNumberGenerator;

    // Singleton - Same one on every request
    const getSingletonIRandomNumberGenerator =
        (): IRandomNumberGenerator => UtilitiesContainerSingletons.IRandomNumberGeneratorInstance;

    return {
        IRandomNumberGenerator: getSingletonIRandomNumberGenerator
    }
}
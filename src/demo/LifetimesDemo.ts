import {UtilitiesContainer as TransitiveContainer} from "../libs/utilities/containers/TransitiveContainer";
import {UtilitiesContainer as ScopedContainer} from "../libs/utilities/containers/ScopedContainer";
import {UtilitiesContainer as SingletonContainer} from "../libs/utilities/containers/SingletonContainer";

import {ScopeFactory} from "../libs/di/Scope";

/**
 * Demo Setup
 * @param container
 */

const demonstrate = (container) => {
const scopeFactory = new ScopeFactory(container);
    debugger;
    scopeFactory.Create(container => {
        const randomNumberGenerator1 = container.IRandomNumberGenerator();

        // Will be the same instance as one if we're using Scoped Registration.
        const randomNumberGenerator2 = container.IRandomNumberGenerator();

        let myRoll = randomNumberGenerator1.Next(21, 50);
    });

    scopeFactory.Create(container => {
        const randomNumberGenerator = container.IRandomNumberGenerator();

        let myRoll = randomNumberGenerator.Next(21, 50);
    });
}

/**
 * Demo Execute
 */
export const LifetimesDemo = () => {
    const scenarios = [TransitiveContainer, ScopedContainer, SingletonContainer];

    for (const scenario of scenarios) {
        demonstrate(scenario);
    }
}
import {Castle} from "./Castle";
import {IBattlefield} from "../../contracts/IBattlefield";

export const BattlefieldContainer = () =>  {
    const getBattlefield = (): IBattlefield => new Castle();

    return {
        IBattlefield: getBattlefield
    }
}
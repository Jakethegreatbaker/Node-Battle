import {ILogger} from "./ILogger";

export class Scout implements ILogger{
    debug(obj: any) {
        console.debug(obj);
    }

    error(obj: any) {
        console.error(obj);
    }

    info(obj: any) {
        console.info(obj);
    }

    warn(obj: any) {
        console.warn(obj);
    }
}
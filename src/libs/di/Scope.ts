export class ScopeFactory<T> {

    private readonly _container: T;

    constructor(container: () => T) {
        this._container = container();
    }

    public Create(func: (T) => void) {
        try {
            func(this._container);
        } catch (e) {
            console.error(e);
        }
    }
}
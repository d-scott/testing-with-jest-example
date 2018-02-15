class MyClass {
    constructor() {
        this._setup();
    }

    _setup() {
        this.someProp = false;
    }

    set someProp(value) {
        this._someProp = value;
    }

    get someProp() {
        return this._someProp;
    }

    doSomethingAsyncPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('result');
            }, 100);
        });
    }

    doSomethingAsyncCallback(cb) {
        setTimeout(() => {
            cb('result');
        }, 100);
    }
}

export default MyClass;

import MyClass from '../src/MyClass';

describe('MyClass', () => {

    let instance;
    beforeAll(() => {
        instance = new MyClass();
    });

    afterAll(() => {
        instance = null;
    });

    it('should default someProp to false', () => {
        expect(instance.someProp).toEqual(false);
    });

    it('should do something asynchronously via Promise', () => {
        expect.assertions(1);
        return expect(instance.doSomethingAsyncPromise()).resolves.toEqual('result');
    });

    it('should do something asynchronously via callback', done => {
        const cb = result => {
            expect(result).toEqual('result');
            done();
        };
        instance.doSomethingAsyncCallback(cb);
    });

});

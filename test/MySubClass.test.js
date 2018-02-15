import MySubClass from '../src/MySubClass';
import MyClass from '../src/MyClass';

describe('MySubClass', () => {

    let instance;
    beforeAll(() => {
        instance = new MySubClass();
    });

    afterAll(() => {
        instance = null;
    });

    it('should extend MyClass', () => {
        expect(MySubClass.prototype instanceof MyClass).toEqual(true);
    });

    it('should default someProp to true', () => {
        expect(instance.someProp).toEqual(true);
    });

});

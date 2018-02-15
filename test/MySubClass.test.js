import MySubClass from '../src/MySubClass';

describe('MySubClass', () => {

    let instance;
    beforeAll(() => {
        instance = new MySubClass();
    });

    afterAll(() => {
        instance = null;
    });

    it('should default someProp to true', () => {
        expect(instance.someProp).toEqual(true);
    });

});

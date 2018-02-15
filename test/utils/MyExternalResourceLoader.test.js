import superagent from 'superagent'; //mocked
import MyExternalResourceLoader from '../../src/utils/MyExternalResourceLoader';

describe('MyExternalResourceLoader', () => {

    let mockResponse;
    beforeAll(() => {
        mockResponse = {
            foo: 'foo',
            bar: 'bar',
            baz: 'baz'
        };
        superagent.__setMockDelay(true);
        superagent.__setMockResponse({
            body: mockResponse
        });
    });

    afterAll(() => {
        superagent.__setMockError();
        jest.restoreAllMocks();
    });

    it('should load an external resource', () => {
        expect.assertions(1);
        return expect(MyExternalResourceLoader.loadSomething('')).resolves.toEqual(mockResponse);
    });

    it('should catch the error if unsuccessful', () => {
        superagent.__setMockError('some error');
        expect.assertions(1);
        return expect(MyExternalResourceLoader.loadSomething('')).rejects.toEqual('some error');
    });

});

//based on https://gist.github.com/pherris/aa74aa9b8b1a55ea053b

let mockDelay, mockError, mockResponse = {
    status() {
        return 200;
    },
    ok() {
        return true;
    },
    body: {
        foo: 'bar'
    },
    get: jest.fn(),
    toError: jest.fn()
};

export default {
    get() {
        return this;
    },
    accept() {
        return this;
    },
    end: jest.fn().mockImplementation((callback) => {
        if (mockDelay) {
            process.nextTick(callback, mockError, mockResponse);
            return;
        }

        callback(mockError, mockResponse);
    }),
    __setMockDelay(boolValue) {
        mockDelay = boolValue;
    },
    __setMockResponse(mockRes) {
        mockResponse = mockRes;
    },
    __setMockError(mockErr) {
        mockError = mockErr;
    }
};

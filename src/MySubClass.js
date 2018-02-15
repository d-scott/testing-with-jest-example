import MyClass from './MyClass';

class MySubClass extends MyClass {
    constructor() {
        super();
    }

    _setup() {
        this.someProp = true;
    }
}

export default MySubClass;

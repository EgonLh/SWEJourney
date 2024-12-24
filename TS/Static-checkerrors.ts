class Foo{
    static #count = 0;

    get count(){
        return Foo.#count;
    }

    static {
        console.log("Static Block");
        try {
            const LastInstance = Foo.loadLastInstance();
            Foo.#count += LastInstance.length;
        }
        catch{}
    }  
        static loadLastInstance(){
            return "hello";
        }
    }

    // Private identifiers are only available when targeting ECMAScript 2015 and higher. - error    
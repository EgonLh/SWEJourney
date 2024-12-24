var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Object.defineProperty(Foo.prototype, "count", {
        get: function () {
            return __classPrivateFieldGet(_a, _a, "f", _Foo_count);
        },
        enumerable: false,
        configurable: true
    });
    Foo.loadLastInstance = function () {
        return "hello";
    };
    var _a, _Foo_count;
    _a = Foo;
    _Foo_count = { value: 0 };
    (function () {
        var _b;
        console.log("Static Block");
        try {
            var LastInstance = _a.loadLastInstance();
            __classPrivateFieldSet(_b = _a, _a, __classPrivateFieldGet(_b, _a, "f", _Foo_count) + LastInstance.length, "f", _Foo_count);
        }
        catch (_c) { }
    })();
    return Foo;
}());

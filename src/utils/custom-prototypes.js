const isEmpty = {
    get: function () {
        return this.length == 0;
    }
}
const last = {
    get: function () {
        if (this.length == 0) return null;
        return this[this.length - 1];
    }
}
// Array
Object.defineProperty(Array.prototype, 'isEmpty', isEmpty);
Object.defineProperty(Array.prototype, 'last', last);

// NodeList
Object.defineProperty(NodeList.prototype, 'isEmpty', isEmpty);
Object.defineProperty(NodeList.prototype, 'last', last);
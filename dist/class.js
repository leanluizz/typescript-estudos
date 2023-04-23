"use strict";
const log = (content) => console.log(content);
class DocName {
    constructor(name) { this.name = name; }
    getString(txt) {
        return txt + this.name + "!";
    }
}
const BRUNO = new DocName("Bruno"); // this.name
log([
    BRUNO.name = "Diego",
    BRUNO.getString("Hello World ") // "Bruno" = txt (paramater)
]);
//# sourceMappingURL=class.js.map
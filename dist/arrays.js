"use strict";
const arrayTXT = ["João", "Maria", "Victor", "Ana"];
const arrayNUM = [0, 1, 2, 3];
const arrayBOOl = [true, false];
const arrayNULL = [null, null];
const Conc = [
    arrayTXT.map(e => e.concat(" Silva")),
    arrayNUM.filter(e => e < 2)
];
let ourTuple;
ourTuple = [1, true, "Hello World!"];
let destructTuple = [ourTuple[2], ourTuple[0]];
let Tuple = ["", 1];
const graph = ["", 1]; // Destructuring
const [x, y] = graph;
console.log(Conc);
//# sourceMappingURL=arrays.js.map
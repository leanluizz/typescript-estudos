const arrayTXT: string[] = ["João", "Maria", "Victor", "Ana"];
 const arrayNUM: number[] = [0, 1, 2, 3];
  const arrayBOOl: boolean[] = [true, false];
  const arrayNULL: null[] = [null, null];

  const Conc: any[] = [
    arrayTXT.map(e => e.concat(" Silva")), 
    arrayNUM.filter(e => e < 2)
]

let ourTuple: [number, boolean, string];
ourTuple = [1, true, "Hello World!"];

let destructTuple: [string, number] = [ourTuple[2], ourTuple[0]];
let Tuple: [string, number] = ["", 1]
const graph: [string, number] = ["", 1]; // Destructuring
const [x, y] = graph;

  console.log(Conc);
  
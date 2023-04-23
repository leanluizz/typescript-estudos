function Lenght (a: any): string {
    return a.lenght 
}

function Empty (): void { // void type dont need return for functions
    console.log("Empty function");    
}

const Some= (a: number, b: number): number =>  a + b
const Sub = (a: number, b: number) => a - b
const Multp = (a: number, b: number) => a * b
const Div = (a: number, b: number) => a / b

console.log(
    Some(0, 1),
    ",",
    Sub(3, 1),
    ",",
    Multp(1, 3),
    ",",
    Div(12, 3)
);

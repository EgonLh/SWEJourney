function sum({ a, b, c }: {
    a: number,
    b: number,
    c: number
}): number {
    return (a + b + c);
}

console.log(
    sum({ a: 20, b: 20, c: 30 })
);

// Better ways
type ABC = {a:number,b:number,c:number};
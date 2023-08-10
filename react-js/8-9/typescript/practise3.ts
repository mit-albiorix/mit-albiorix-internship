function isdivisableby4and8(a:number):boolean{
    return a % 4 === 0 && a%8 === 0 
}

console.log(isdivisableby4and8(16));

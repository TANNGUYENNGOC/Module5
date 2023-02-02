// happy coding 👻
// @ts-ignore
let fibonacci = (num:number): number =>{
    if (num<=1){
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

let sum:number=0;
let number:number=20;
console.log("Dãy fibonacci: ")
for (let i=0; i<=number;i++){
    console.log(fibonacci(i));
    sum=sum+fibonacci(i)
}
console.log("sum: "+sum)
//regular function
function addOne(num : number){
    return 'your lucky number is: ' + (num+45);
}

const luckNumber=addOne(10);
console.log(luckNumber);

//arrow functions

const doubleMoney=(x:number,y:number)=> 'The amount: '+x * y;

const winAmount=doubleMoney(99,12);
console.log(winAmount);
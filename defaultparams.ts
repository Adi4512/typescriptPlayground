function greet(person:string="Batman"){
    return `hello ${person}`;
}

const res=greet();
console.log(res)

//annotate the return value

function double(x: number):number{
    return x*x;
}

const num=double(5);
console.log(num);
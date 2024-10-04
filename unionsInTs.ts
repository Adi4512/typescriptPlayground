type maths = {
    std:string;
    marks:number
}

type science ={
    bio:string;
    marksinBio:number;
    passFail:boolean
}

const user : maths | science ={
    std:'aditya',
    marks :45,
}

const std99 =(name: maths | science)=>{
        name;
}

console.log(std99({std:'kavya',marks:44}));



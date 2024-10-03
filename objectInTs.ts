
//object
const students : {firstname:string;lastName:string;age:number}={
    firstname : 'Aditya',
    lastName : 'sharma',
    age : 22
}

console.log(`${students.firstname} ${students.lastName}, Age:${students.age}`);


// function

function datas():{name:string;age:number;phone:string}{
    return {
        name : 'adi',
        age : 22,
        phone : 'onePlus'
    };
    

}


console.log(datas());


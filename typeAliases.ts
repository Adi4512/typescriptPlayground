type person1 = {
    name : string;
    age : number;
    location:string;
    email ?: string  //? will make it optional
}


const printInfo= (user:person1) => {
    return `Name : ${user.name},age : ${user.age},location : ${user.location}`;
}

const res3=printInfo({name:'adi',age:20,location:'india'});
console.log(res3);

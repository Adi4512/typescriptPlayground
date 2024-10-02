type Person = {
    name: string;
}

const person: Person = {
    name: "Aditya",
};

console.log(person.name);

// String

let myName: string="batman";
console.log(myName);

//number

let myAge: number=23;
console.log(myAge);

//boolean

let isMarried: boolean=true;
console.log(isMarried);

//any   will take any type of annotation without throwing error whereas all the above will throw error.

let hero: any="batman";
console.log(hero)  
hero=45;
console.log(hero)

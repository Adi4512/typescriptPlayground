type person4 = {
    name : string;
    age : number;
}

type employee = {
    id: number;
    domain : string
}

type officeData = person4 & employee;

const emp : officeData = {
    name : 'aditya',
    age : 22,
    id:2481369,
    domain : 'oracle'

}

const emp2 : employee ={
    id : 2481369,
    domain :'oracle'
}

const emp3 : person4 ={
    name : 'adit',
    age : 22
}

console.log(emp);
console.log(emp2);
console.log(emp3);

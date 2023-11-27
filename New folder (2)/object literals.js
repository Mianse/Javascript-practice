const person = {
    name: 'damian',
    age: 24,
    hobbies:['coding','watching','music',],
    address: {
city:'nairobi',
street: 'ngong street',
road:'ngong road',
    }

}
person.email = 'damianorina17@yahoo.com';
const { name, age ,address:{ street}} = person;


console.log(person);
console.log(person.name);
console.log(person.address);
console.log(person.hobbies[1]);
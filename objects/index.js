const person= {
    name: "john",
    age: 28,
    level: "A1"
}
console.log(person);
console.log(JSON.stringify(person));
console.log(Object.getPrototypeOf(person));// standard way to access object prototype
console.log(person.prototype);

const {name} = person;
// three identical statements
console.log(name);
console.log(person.name);
console.log(person["name"]);


// to print constructor function
console.log(Object.toString(person));

// constructor function
function Student(name,age,level){
    this.name=name;
    this.age=age;
    this.level=level;
}
const std=new Student('sadeq',28,'A1');
console.log(std);
console.log(Object.toString(std));
console.log(Object.getPrototypeOf(std));

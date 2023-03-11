const Person = require('./Person')

const saswata = new Person('saswata',35,'Eindhoven');
const x = new Person('x',35,'Eindhoven');
const y = new Person('y',24,'Eindhoven');
const z = new Person('z',20,'Eindhoven');
const a = new Person('a',20,'Eindhoven');

console.log(saswata.toString())

//object notations 
const dhananjay = {
    name: 'D',
    age: 30,
    address: 'uyuy',
}

//arrays

const personarray = [x,y,z]
const ageArray = personarray.filter(person => person.age%2===0).map(person => person.age)
console.log(ageArray);

// spread operator
const array = [...personarray,a]
array.forEach(person => console.log(person.toString()));

const newD = {...dhananjay,zipcode: 'hghghg'}
const newDArray = [...personarray,newD]
newDArray.forEach(person => console.log(person.toString()));
console.log(newD)


function print(){
    console.log('Hello world');
}

const newPrint = () => {
    console.log('Hello world');
}






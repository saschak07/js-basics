class Person{
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }
    toString(){
        return `name:${this.name} , age:${this.age}, address: ${this.address}`
    }
}

module.exports = [Person]
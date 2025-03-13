export function greet(name){
    console.log(`Hello ${name} welcome`);
}
export class Person{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
   introduce(){
    return `Hi My name is ${this.name} and my age is ${this.age}`;
   }
}
export const name='Anu';

import _ from "lodash";

type Address = {
    street: string,
    city: string,
    country: string
};

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
};

const person1: Person = {
    name: "Harry",
    age: 22,
    isStudent: true,
};

const person2: Person = _.cloneDeep(person1);
person2.age = 24;
person2.isStudent = false;
person2.address = {
    street: "Avenue",
    city: "Hanoi",
    country: "Vietnam"
}

console.log(person1);
console.log(person2);
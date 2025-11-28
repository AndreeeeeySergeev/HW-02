//Задание 7.1
function printInfo (a, b) {
    console.log(`Name: ${a}, Age: ${b}`);
}
const person = {
    name: "Андрей",
    age: "31",
};

const res = printInfo.call(person, person.name, person.age);
res;
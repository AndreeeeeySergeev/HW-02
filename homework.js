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

//Задание 7.2
function calculate (a, b, operator) {
    if (operator === `+`) {
        return a + b;
    }
    if (operator === `-`) {
        return a - b;
    }
    if (operator === `*`) {
        return a * b;
    }
    if (operator === `/`) {
        return a / b;
    }
}
const result = calculate.apply(calculate, [2, 3, "+"]);
console.log(result);
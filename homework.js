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

//Задание 7.3
const arr = [
    {name: "Антон", age: 25},
    {name: "Алёна", age: 20},
    {name: "Эдуард", age: 45},
]
const userAge = arr.filter((arr) => {
    return arr.age > 18;
})
console.log(userAge)
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name);
}
console.log(newArr)

//Задание 7.4
const person1 = {
    name: "Андрей",
    age: "31",
};
function setFullName (fullname ) {
    return this.fullname = fullname;
}
const setPersonFullName = setFullName.bind(person1);
console.log(setPersonFullName("John Smith"));
console.log(person1);
let people = [
    {
        name: "A",
        age: 15,
        gender: "female"
    },
    {
        name: "B",
        age: 13,
        gender: "male"
    },
    {
        name: "D",
        age: 17,
        gender: "male"
    },
    {
        name: "C",
        age: 14,
        gender: "female"
    }
]
const array = [];
let result = people[0].age;
for (let i = 0; i < people.length; i++) {
    if (people[i].age < result) {
        result = people[i].age;
    }

}
console.log(result);



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
const array = []
for (let i = 0; i < people.length; i++) 
    if (people[i].gender === 'female' && people[i].age > 14) {
        array.push(people[i].name)
    }
    console.log(array)

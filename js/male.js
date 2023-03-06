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
    if (people[i].gender === 'male' ) {
        array.push(people[i].gender)
    }
    console.log(array.length)
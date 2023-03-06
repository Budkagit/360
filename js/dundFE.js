
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
let i=0
{
    
    people.forEach(element =>
        i = element.age + i
    )}
console.log(i/people.length)

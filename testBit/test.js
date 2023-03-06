let students = [
    {
        ner: "Bat",
        dvn: 1,
    },
    {
        ner: "Dorj",
        dvn: 2,
    },
    {
        ner: "Dulmaa",
        dvn: 3,
    },
    {
        ner: "Sugar",
        dvn: 5,
    },
    {
        ner: "Tuya",
        dvn: 5,
    },
]
let sum = 0
{
    students.forEach(element => 
        sum = sum + element.dvn
    )}
console.log(sum/students.length)





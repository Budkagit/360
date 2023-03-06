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
        dvn: 4,
    },
]
const array = [];
let result = 0;
for (let i = 0; i <= students.length; i++) {
    if (students.dvn < students[i].dvn) {
        result = students[i].dvn;
    }

}
console.log(result);

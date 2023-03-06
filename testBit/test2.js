let students = [
    {
        ner:"Bat",
        dvn:1,
    },
    {
        ner:"Dorj",
        dvn:2,
    },
    {
        ner:"Dulmaa",
        dvn:3,
    },
    {
        ner:"Sugar",
        dvn:4,
    },
    {
        ner:"Tuya",
        dvn:5,
    },
    ]
    
students.sort(function(a,b){
    return a-b
})
console.log(students)


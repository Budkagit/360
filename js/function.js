
let tasks = [
    {
        task: "PE8 lesson",
        type: "high",
        status: "doing",
        point: 4,
    },
    {
        task: "homework",
        type: "high",
        status: "done",
        point: 4,
    },
    {
        task: "workout",
        type: "medium",
        status: "waiting",
        point: 3,
    },
    {
        task: "korean lesson",
        type: "medium",
        status: "doing",
        point: 3,
    },
    {
        task: "Chinese lesson",
        type: "medium",
        status: "waiting",
        point: 1,
    },
    {
        task: "English lesson",
        type: "medium",
        status: "doing",
        point: 3,
    },
    {
        task: "Physics lesson",
        type: "medium",
        status: "doing",
        point: 3,
    },
    {
        task: "google search",
        type: "high",
        status: "doing",
        point: 3,
    },
    {
        task: "sleep",
        type: "high",
        status: "done",
        point: 5,
    },
    {
        task: "lol",
        type: "low",
        status: "waiting",
        point: 0,
    },]

function pointSum(x)  {
    let sum = 0
    x.forEach((element) => {
        sum = sum + element.point;
    })
return (sum) }
let s = pointSum(tasks)
console.log(s)





    

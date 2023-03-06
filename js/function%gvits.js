
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

function huw(x) {
    let sum = 0
    x.forEach((element) => {
        if (element.status == "done") {
            sum += 1
        }
    })
    sum = sum / 10 * 100;
    return (sum)
}
let s = huw(tasks)
console.log(s + "%")
//let sum = 0
//tasks.forEach((x) => {
   // if (x.status == "done") {
      //  sum = sum + 1
   // }
//})
//sum = sum / 10 * 100
//console.log(sum + "%")









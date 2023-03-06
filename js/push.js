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
        task: "English",
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
    const english = {
        task: "english",
        type: "low",
        status: "success",
        point: 12
    }
tasks.forEach((element) => {
    if (element.task == "English"){
    console.log(element.point)}
    else {
        tasks.push(english)
    }
})
console.log(tasks)
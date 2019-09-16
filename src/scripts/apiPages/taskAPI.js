// build API methods to fetch users task list, fetch individual tasks to edit, put tasks in db, put edited tasks in db
const taskAPIMgr = {
    // method to put new task in json db change to only show log in to local storage
postOneTask: singleTaskObject =>{
           return fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(singleTaskObject)
        })
      },
    // method to fetch one task to edit and add in user log in local storage
getSingleTask: singleTaskId =>{
    return fetch(`http://localhost:3000/tasks?userId=${localStorage.getItem("userId")}${singleTaskId}`).then(response =>
    response.json()
    )},
    // method to fetch all tasks from db
getAllTasks: () =>{
    return fetch(`http://localhost:3000/tasks?userId=${localStorage.getItem("userId")}`).then(response=>
    response.json())
    // need if statement here to only return tasks that are false for taskComplete key
},
}

export default taskAPIMgr
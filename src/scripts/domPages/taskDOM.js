// create Dom print manager to print create task form and task list upon user log in

const taskDomMgr = {
    // method to build a task and save it to the list on DOM
buildCreateTask: () =>{
            document.querySelector("#tasks-container").innerHTML = `
        <input type="text" id="task-input" placeholder="Task">
        <input type="date" name="" id="task-date-input" placeholder="Due Date">
        <button id="create-task-button">Save Task</button>`
},

// method to build edit form when a user needs to edit a task in the task list
buildEditTask: () =>{
    document.querySelector("#tasks-container").innerHTML= `
    <input type="text" id="task-edit-input" placeholder="Task">
    <input type="date" name="" id="task-date-edit" placeholder="Due Date">
    <button id="save-edit-task-btn">Save</button>`
},
    // method to print task list to DOM upon log in
    printAllTasks:() =>{
        document.querySelector("#tasks-container").innerHTML +=
        `<article id="task-list">
        <p></p>
        <button id="delete-task-btn">Delete</button>
        <button id="edit-task-btn">Edit</button>
        </article>`
    }
}

export default taskDomMgr
import taskApi from "../apiPages/taskAPI.js"
import taskAPIMgr from "../apiPages/taskAPI.js"
// create Dom print manager to print create task form and task list upon user log in
const taskDomMgr = {
    // method to build a task and save it to the list on DOM
buildCreateTask: () =>{
            document.querySelector("#tasks-container").innerHTML = `
        <input type="text" id="task-input" placeholder="Task">
        <input type="date" name="" id="task-date-input" placeholder="Due Date">
        <button id="create-task-button">Save Task</button>`
},
    // method to print task list to DOM upon log in
    printAllTasks:() =>{
        taskAPIMgr.getAllTasks()
            .then(taskArray=>taskArray.forEach(taskItem => {
                if (taskItem.userId === 1){
        document.querySelector("#tasks-container").innerHTML +=
        `<div id="task-list-${taskItem.id}">
        <p>${taskItem.task} ${taskItem.dueDate}</p>
        <input type= "checkbox" id="delete-task-box-${taskItem.id}">
        <button id="edit-task-btn-${taskItem.id}">Edit</button>
        </div>`
    }
}))
    },
    // method to build edit form when a user needs to edit a task in the task list
buildEditTask: (taskToEdit) =>{
    const taskEditForm = document.querySelector(`#task-list-${taskToEdit.id}`)
    console.log(taskEditForm)
    taskEditForm.innerHTML= `
    <input type="text" id="task-edit-input-${taskToEdit.id}" placeholder="${taskToEdit.task}">
    <input type="date" name="" id="task-date-edit-${taskToEdit.id}" placeholder="${taskToEdit.dueDate}">
    <button id="save-edit-task-btn-${taskToEdit.id}">Save</button>`
},

}
export default taskDomMgr
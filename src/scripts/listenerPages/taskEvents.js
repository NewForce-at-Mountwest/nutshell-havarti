import taskAPIMgr from ".apiPages/taskAPI.js"
// create event listener function for task list create task button, edit task button, and save edit button
const taskEventMgr = {
    // create event listener method for create task button
    createOneTask: () => {
        document.querySelector("#tasks-container").addEventListener("click", () => {
            if (event.target.id === "create-task-button") {
                console.log("you clicked the button")
                //post created task to json db
                taskAPIMgr.postOneTask()
            }
            // clear create task input fields
            document.querySelector("#task-input").value = "";
            // return and print updated task list to DOM
            taskAPIMgr.getAllTasks()
        })

    },
    // event listener for edit task button
    editTaskEvent: () => {
        document.querySelector("#tasks-container").addEventListener("click", () => {
            if (event.target.id === "edit-task-btn") {
                event.target.id.split("-")[3]
                console.log("you clicked the edit button")
                //method to print edit task form
                buildEditTask()
            }
        })
    },
    // event listener for delete task checkbox
deleteTaskEvent: () => {
    document.querySelector("#tasks-container").addEventListener("click", ()=>{
        if (event.target.id.includes ("delete-task")) {
            event.target.id.split("-")[3]
            console.log("you clicked delete!")
// api manager to mark a task complete

// call method to return only incomplete tasks

        }
    })
},
// event listener for save edit button
saveEditTaskEvent: () => {
    document.querySelector("#tasks-container").addEventListener("click", ()=>{
        if (event.target.id.includes ("save-edit-task")) {
            event.target.id.split("-")[4]
            console.log("you clicked save!")
            // call method to return edited task to json db
            // call method to return all tasks that are incomplete
        }
    })
}
}
export default taskEventMgr
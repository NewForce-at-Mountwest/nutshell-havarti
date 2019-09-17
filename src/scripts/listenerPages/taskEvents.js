import taskAPIMgr from "../apiPages/taskAPI.js"
import taskDomMgr from "../domPages/taskDOM.js"
// create event listener fdomunction for task list create task button, edit task button, and save edit button
const taskEventMgr = {
    // create event listener method for create task button
    createOneTask: () => {
        console.log("you clicked the button")
        //create object of task to post
        const taskInputValue = document.querySelector("#task-input").value
        const taskDueDateValue = document.querySelector("#task-date-input").value
        const taskObjectToPost = {
            "userId": 1,
            "task": taskInputValue,
            "dueDate": taskDueDateValue,
            "taskComplete": false
        }
        //post created task to json db
        taskAPIMgr.postOneTask(taskObjectToPost)
        // clear create task input fields
        document.querySelector("#task-input").value = "";
        // return and print updated task list to DOM
        taskAPIMgr.getAllTasks()
    },
    // event listener for edit task button
    editTaskEvent: () => {
        // get the id of the task I want to edit
        const taskArray = event.target.id.split("-")
        const singleTaskIdToEdit = taskArray[3]
        console.log("you clicked the edit button")
        //get the task I want to edit from json
        taskAPIMgr.getSingleTask(singleTaskIdToEdit).then(taskToEdit => {
            //method to print edit task form
            taskDomMgr.buildEditTask(taskToEdit)
        })
    },
    // event listener for delete task checkbox
    deleteTaskEvent: () => {
        document.querySelector("#tasks-container").addEventListener("click", () => {
            if (event.target.id.includes("delete-task")) {
                event.target.id.split("-")[3]
                console.log("you clicked delete!")
                // api manager to mark a task complete
                // call method to return only incomplete tasks

            }
        })
    },
    // event listener for save edit button
    saveEditTaskEvent: () => {
        const saveButtonArray = event.target.id.split("-")
        const singleSaveId = saveButtonArray[3]
        console.log(singleSaveId)
        console.log("you clicked save!")
        // create edited object to post
        const taskEditInputValue = document.querySelector(`#task-edit-input-${singleSaveId}`).value
        const taskEditDueDateValue = document.querySelector(`#task-date-edit-${singleSaveId}`).value
        console.log(taskEditDueDateValue)
        const taskEditObjectToPost = {
            "userId": 1,
            "task": taskEditInputValue,
            "dueDate": taskEditDueDateValue,
            "taskComplete": false
        }
        // call method to return edited task to json db
        taskAPIMgr.postOneEditedTask(singleSaveId, taskEditObjectToPost).then(() => {
            // clear dom to bring back updated task list
            document.querySelector("#tasks-container").innerHTML = ""

            taskAPIMgr.getAllTasks().then(alltasks => {
                // call method to return all tasks that are incomplete
                taskDomMgr.printAllTasks(alltasks);
                taskDomMgr.buildCreateTask()
            })
        })
    }
}
export default taskEventMgr
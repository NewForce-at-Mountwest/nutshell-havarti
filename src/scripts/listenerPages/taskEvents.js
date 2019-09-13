import taskAPIMgr from ".apiPages/taskAPI.js"
// create event listener function for task list create task button, edit task button, and save edit button
const taskEventMgr = {
    // create event listener for create task button
    createOneTask:() => {
document.querySelector("#tasks-container").addEventListener("click",()=>{
    if (event.target.id === "create-task-button"){
        console.log("you clicked the button")
//post created task to json db
taskAPIMgr.postOneTask()
}
// clear create task input fields
document.querySelector("#task-input").value = "";
// return and print updated task list to DOM
})

    }
}
export default taskEventMgr
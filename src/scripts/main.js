import userEventHandler from "./listenerPages/userEvents.js"
import newsEventHandler from "./listenerPages/newsEvents.js"
import taskEventMgr from "./listenerPages/taskEvents.js"

// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler)
// user creates new news article
document.querySelector("body").addEventListener("click", ()=> {
    if (event.target.id.includes("newsNewArticleBtn")){newsEventHandler.newsNewArticleHandler()}
})
document.querySelector("#news-container").addEventListener("click", ()=> {
    if (event.target.id.includes("newsEditBtn")){newsEventHandler.newsEditArticleHandler()}
})
document.querySelector("#news-container").addEventListener("click", ()=> {
    if (event.target.id.includes("newsDeleteBtn")){newsEventHandler.newsDeleteArticleHandler()}
})

// task list and task create form appears at log in
document.querySelector("body").addEventListener("click", ()=>{
if(event.target.id.includes("create-task-button")){taskEventMgr.createOneTask()}
})
// call edit task button for editing tasks
document.querySelector("body").addEventListener("click", ()=>{
    if(event.target.id.includes("edit-task-btn")){taskEventMgr.editTaskEvent()}
})
// call save button upon task edit
document.querySelector("body").addEventListener("click", ()=>{
    if(event.target.id.includes("save-task-btn")){taskEventMgr.saveEditTaskEvent()}
})
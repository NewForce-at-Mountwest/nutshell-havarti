import userEventHandler from "./listenerPages/userEvents.js"
import chatDomMgr from "./domPages/chatDOM.js"
import chatEvents from "./listenerPages/chatEvents.js"
import newsEventHandler from "./listenerPages/newsEvents.js"
import taskEventMgr from "./listenerPages/taskEvents.js"
import newsApi from "./apiPages/newsAPI.js"
import newsDomMgr from "./domPages/newsDOM.js"

// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler)
// task list and task create form appears at log in
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("create-task-button")) { taskEventMgr.createOneTask() }
})
// call edit task button for editing tasks
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("edit-task-btn")) { taskEventMgr.editTaskEvent() }
})
// call save button upon task edit
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("save-task-btn")) { taskEventMgr.saveEditTaskEvent() }
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsNewArticleBtn")) { newsEventHandler.newsNewArticleHandler() }
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsEditBtn")) { newsEventHandler.newsEditArticleHandler() }
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("news-saveArticle-btn")) { newsEventHandler.postNewArticleHandler() }
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsDeleteBtn")) { newsEventHandler.newsDeleteArticleHandler() }
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsEditBtn")) { newsEventHandler.newsEditArticleHandler() }
})
document.querySelector("#news-container").addEventListener("click", ()=> {
    if (event.target.id.includes("newsDeleteBtn")){newsEventHandler.newsDeleteArticleHandler}
})
//send button handler to print each message upon click

document.querySelector("body").addEventListener("click", chatEvents.sendBtnHandler)

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("news-editArticle-btn")) {newsEventHandler.putEditedArticleHandler()}
})

// delete button handler to delete a chat message from the DOM and Api
document.querySelector("body").addEventListener("click", chatEvents.deleteMsgHandler)

// edit button for chat messages showing the edit chat field on click
document.querySelector("body").addEventListener("click", chatEvents.editChatHandler)
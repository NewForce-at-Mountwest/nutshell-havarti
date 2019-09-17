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
// bring up fields to input new article
document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsNewArticleBtn")) { newsEventHandler.newsNewArticleHandler() }
})
// post new article to json server
document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("news-saveArticle-btn")) { newsEventHandler.postNewArticleHandler() }
})
// bring up edit form to edit an existing article
document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsEditBtn")) { newsEventHandler.newsEditArticleHandler() }
})
// click to delete an article
document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("newsDeleteBtn")) { newsEventHandler.newsDeleteArticleHandler() }
})
document.querySelector("body").addEventListener("click", chatEvents.sendBtnHandler)
// save newly edited news article to json server
document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("news-editArticle-btn")) (newsEventHandler.putEditedArticleHandler())
})
// bring up register new user form
document.querySelector("#user-registration").addEventListener("click", userEventHandler.registerHandler)
// save a new registered user
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("user-save-reg-btn")) (userEventHandler.registerNew())
})
// logout button
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("logout")) (userEventHandler.logout())
})
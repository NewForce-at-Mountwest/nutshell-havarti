import userEventHandler from "./listenerPages/userEvents.js"
import taskDomMgr from "./domPages/taskDOM.js"
// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler)

// taskDomMgr.buildCreateTask()
import newsEventHandler from "./listenerPages/newsEvents.js"

// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler)
// user creates new news article
document.querySelector("body").addEventListener("click", ()=> {
    if (event.target.id.includes("newsNewArticleBtn")){newsEventHandler.newsNewArticleHandler}
})
document.querySelector("#news-container").addEventListener("click", ()=> {
    if (event.target.id.includes("newsEditBtn")){newsEventHandler.newsEditArticleHandler}
})
document.querySelector("#news-container").addEventListener("click", ()=> {
    if (event.target.id.includes("newsDeleteBtn")){newsEventHandler.newsDeleteArticleHandler}
})

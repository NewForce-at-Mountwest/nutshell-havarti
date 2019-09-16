import userEventHandler from "./listenerPages/userEvents.js"
import newsEventHandler from "./listenerPages/newsEvents.js"
import newsApi from "./apiPages/newsAPI.js"
import newsDomMgr from "./domPages/newsDOM.js"

// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler)
// user creates new news article
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
    if (event.target.id.includes("newsEditBtn")) {newsEventHandler.newsEditArticleHandler()}
})

document.querySelector("#news-container").addEventListener("click", () => {
    if (event.target.id.includes("news-editArticle-btn")) {newsEventHandler.putEditedArticleHandler()}
})
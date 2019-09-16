import newsApi from "../apiPages/newsAPI.js"
import newsEventHandler from "../listenerPages/newsEvents.js"

// print all articles to DOM upon login
const newsDomMgr = {
    printPage: () => {
        const newsBox = document.querySelector("#news-container")
        newsBox.innerHTML=""
        newsApi.printArticles()
            .then(newsArray=>newsArray.forEach(newsArticle => {
                if (newsArticle.userId === 1) {
                    newsBox.innerHTML +=
                        `<div id="news-Container">
                        <button id="newsNewArticleBtn">New Article</button>
                        <article id="newsNewArticleForm"></article>
                        <div id="newsArticlesContainer">
                        <h5>${newsArticle.title}</h5>
                        <p>${newsArticle.synopsis}</p>
                        <p>${newsArticle.url}</p>
                        <button id="newsEditBtn">Edit</button>
                        <article id="editNewArticleForm"></article>
                        <button id="newsDeleteBtn">Delete</button>
                        </div>
                        </div>`
                }
            }))
    }
}

export default newsDomMgr;
import newsApi from "../apiPages/newsAPI.js"
import newsEventHandler from "../listenerPages/newsEvents.js"

// print all articles to DOM upon login
const newsDomMgr = {
    printPage: () => {
        const newsBox = document.querySelector("#news-container")
        newsBox.innerHTML=`<h3>News Articles</h3>
                        <button id="newsNewArticleBtn">New Article</button>
                        <article id="newsNewArticleForm"></article>
                        <div id="newsOutput"></div>`
        newsApi.printArticles()
            .then(newsArray=>newsArray.forEach(newsArticle => {
                if (newsArticle.userId === localStorage.getItem("userId")) {
                    document.querySelector("#newsOutput").innerHTML +=
                        `<div id="news-Container">
                        <div id="newsArticlesContainer-${newsArticle.id}">
                        <h5>${newsArticle.title}</h5>
                        <p id="newsTime">Time: ${newsArticle.time}</p>
                        <p>${newsArticle.synopsis}</p>
                        <p>${newsArticle.url}</p>
                        <button id="newsEditBtn-${newsArticle.id}">Edit</button>
                        <article id="editNewArticleForm-${newsArticle.id}"></article>
                        <button id="newsDeleteBtn-${newsArticle.id}">Delete</button>
                        </div>
                        </div>`
                }
            }))
    }
}

export default newsDomMgr;
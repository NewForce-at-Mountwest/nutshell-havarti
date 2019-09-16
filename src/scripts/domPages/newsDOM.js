import newsApi from "../apiPages/newsAPI.js"

// print all articles to DOM upon login
const newsDomMgr = {
    printPage: () => {
        const newsBox = document.querySelector("#news-container")
        newsApi.printArticles()
            .then(newsArray=>newsArray.forEach(newsArticle => {
                if (newsArticle.userId === 1) {
                    newsBox.innerHTML =
                        `<div id="news-Container">
                        <button id="newsNewArticleBtn">New Article</button>
                        <div id="newsArticlesContainer">
                        <h5>${newsArticle.title}</h5>
                        <p>${newsArticle.synopsis}</p>
                        <p>${newsArticle.url}</p>
                        <button id="newsEditBtn">Edit</button>
                        <button id="newsDeleteBtn">Delete</button>
                        </div>
                        </div>`
                }
            }))
    }
}

export default newsDomMgr;
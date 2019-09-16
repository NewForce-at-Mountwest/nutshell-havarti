import newsDomMgr from "../domPages/newsDOM.js"
import newsApi from "../apiPages/newsAPI.js"

const newsEventHandler = {
    // create new article once clicked on New Article Btn
    newsNewArticleHandler: () => {
        console.log("you clicked new")
        document.querySelector("#newsNewArticleForm").innerHTML = (`
            <input type="text" name="title" id="news-newTitle-input" placeholder="Title"></input>
            <input type="text" name="synopsis" id="news-newSynopsis-input" placeholder="Synopsis"></input>
            <input type="url" name="url" id="news-newUrl-input" placeholder="url"></input>
            <button id= "news-saveArticle-btn">Save</button>`
        )
    },

    // edit an article currently in the DOM
    newsEditArticleHandler: (id,newsArticle) => {
        console.log("you clicked edit")
        const articleId = "3"
        document.querySelector("#editNewArticleForm").innerHTML = (`
            <input type="text" name="title" id="news-editTitle-input">${newsArticle.title}.value</input>
            <input type="text" name="synopsis" id="news-editSynopsis-input">${newsArticle.synopsis}.value</input>
            <input type="url" name="url" id="news-editUrl-input">${newsArticle.url}.value</input>
            <button id= "news-editArticle-btn">Save</button>`
        )
    },
    putEditedArticleHandler: (id,newsArticle) => {
        const editedTitleValue = document.querySelector("#news-editTitle-input")
        const editedSynopsisValue = document.querySelector("#news-editSynopsis-input")
        const editedUrlValue = document.querySelector("#news-editUrl-input")
        const editedNewsObject =
        {
            "userId": 1,
            "url": editedUrlValue,
            "title": editedTitleValue,
            "synopsis": editedSynopsisValue
        }
        newsApi.editArticle(editedNewsObject)
        .then(newsApi.printArticles())
        .then(newsDomMgr.printPage())
    },
    // delete selected article
    newsDeleteArticleHandler: () => {
        console.log("you clicked delete")
        const articleId = "4"
        newsApi.deleteArticle(articleId)
            .then(newsApi.printArticles())
            .then(newsDomMgr.printPage())
    },
    postNewArticleHandler: () => {
        const newTitle = document.querySelector("#news-newTitle-input").value
        const newSynopsis = document.querySelector("#news-newSynopsis-input").value
        const newUrl = document.querySelector("#news-newUrl-input").value
        const newNewsObject =
        {
            "userId": 1,
            "url": newUrl,
            "title": newTitle,
            "synopsis": newSynopsis
        }
        newsApi.postNewArticle(newNewsObject)
        .then(newsApi.printArticles())
        .then(newsDomMgr.printPage())
    }
}

export default newsEventHandler;

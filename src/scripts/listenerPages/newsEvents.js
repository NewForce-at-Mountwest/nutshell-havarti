import newsDomMgr from "../domPages/newsDOM.js"
import newsApi from "../apiPages/newsAPI.js"

const newsEventHandler = {
    // create new article once clicked on New Article Btn
    newsNewArticleHandler: () => {
        document.querySelector("#newsNewArticleForm").innerHTML = (`
            <input type="text" name="title" id="news-newTitle-input" placeholder="Title"></input>
            <input type="text" name="synopsis" id="news-newSynopsis-input" placeholder="Synopsis"></input>
            <input type="url" name="url" id="news-newUrl-input" placeholder="url"></input>
            <button id= "news-saveArticle-btn">Save</button>`
        )
    },

    // edit an article currently in the DOM
    newsEditArticleHandler: () => {
        const articleToEdit = event.target.id.split("-")[1]
        newsApi.getSingleArticle(articleToEdit)
            .then(articleToEditForm => {
                document.querySelector(`#editNewArticleForm-${articleToEdit}`).innerHTML = (`
                    <input type="text" name="title" id="news-editTitle-input" value="${articleToEditForm[0].title}"></input>
                    <input id="newsTime-edit" value=${articleToEditForm[0].time}></input>
                    <input type="text" name="synopsis" id="news-editSynopsis-input" value="${articleToEditForm[0].synopsis}"></input>
                    <input type="url" name="url" id="news-editUrl-input" value="${articleToEditForm[0].url}"></input>
                    <button id= "news-editArticle-btn-${articleToEditForm[0].id}">Save</button>`
                )

            }
            )
    },
    putEditedArticleHandler: () => {
        const articleIdToPut = event.target.id.split("-")[3]
        const editedTitleValue = document.querySelector("#news-editTitle-input").value
        const editedSynopsisValue = document.querySelector("#news-editSynopsis-input").value
        const editedUrlValue = document.querySelector("#news-editUrl-input").value
        const newsTimeStamp = document.querySelector("#newsTime-edit").value
        const editedNewsObject =
        {
            "userId": 1,
            "url": editedUrlValue,
            "title": editedTitleValue,
            "synopsis": editedSynopsisValue,
            "time": newsTimeStamp
        }
        newsApi.editArticle(articleIdToPut, editedNewsObject)
            .then(newsApi.printArticles)
            .then(newsDomMgr.printPage)
    },
    // delete selected article
    newsDeleteArticleHandler: () => {
        const articleId = event.target.id.split("-")[1]
        newsApi.deleteArticle(articleId)
            .then(newsApi.printArticles)
            .then(newsDomMgr.printPage)
    },
    postNewArticleHandler: () => {
        const newTitle = document.querySelector("#news-newTitle-input").value
        const newSynopsis = document.querySelector("#news-newSynopsis-input").value
        const newUrl = document.querySelector("#news-newUrl-input").value
        const time = new Date();
        const newNewsObject =
        {
            "userId": 1,
            "url": newUrl,
            "title": newTitle,
            "synopsis": newSynopsis,
            "time": time
        }
        newsApi.postNewArticle(newNewsObject)
            .then(newsApi.printArticles)
            .then(newsDomMgr.printPage)
    }
}

export default newsEventHandler;

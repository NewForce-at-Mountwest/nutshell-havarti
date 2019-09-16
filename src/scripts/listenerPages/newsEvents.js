const newsEventHandler = {
    // create new article once clicked on New Article Btn
    newsNewArticleHandler: () => {
        console.log("you clicked new")
        window.prompt(`
            <input type="text" name="title" id="news-new-input" placeholder="Title"></input>
            <input type="text" name="synopsis" id="news-new-input" placeholder="Synopsis"></input>
            <input type="url" name="url" id="news-new-input" placeholder="url"></input>
            <button id= "news-saveArticle-btn">Save</button>`
        )
    },
    // edit an article currently in the DOM
    newsEditArticleHandler: () => {
        console.log("you clicked edit")
        window.prompt(`
            <input type="text" name="title" id="news-edit-input">${newsArticle.title}.value</input>
            <input type="text" name="synopsis" id="news-edit-input">${newsArticle.synopsis}.value</input>
            <input type="url" name="url" id="news-edit-input">${newsArticle.url}.value</input>
            <button id= "news-editArticle-btn">Edit</button>`
        )
    },
    // delete selected article
    newsDeleteArticleHandler: () => {
        console.log("you clicked delete")
    }
}

export default newsEventHandler;

const newsApi = {
    printArticles: () =>{
        return fetch("http://localhost:3000/news")
        .then(response => response.json())
    }
}

export default newsApi
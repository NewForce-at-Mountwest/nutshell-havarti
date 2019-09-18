// Fetch all News Articles
const newsApi = {
    printArticles: () =>{
        return fetch("http://localhost:8088/news?_sort=date&_order=desc")
        .then(response => response.json())
    },
// Post a New News Article
  postNewArticle: (newArticle) => {
    return fetch("http://localhost:8088/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    })
  },
//   delete an article
  deleteArticle: (id) =>
  fetch(`http://localhost:8088/news/${id}`, {
    method: "DELETE"
  }),
//   edit an article
editArticle: (id, article) => {
    return fetch(`http://localhost:8088/news/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    });
  },
// Get a single news article
  getSingleArticle: (id) => {
    return fetch(`http://localhost:8088/news?userId=1&id=${id}`)
    .then(response => response.json())
  }
}

export default newsApi
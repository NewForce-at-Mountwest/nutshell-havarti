// fetch the user information from json db

const userApi = {
    getOneUserByUsername: (username) => {
        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
    },
    addUser: (newUserObject) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObject)
        })}
}












export default userApi
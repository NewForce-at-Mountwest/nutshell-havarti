// fetch the user information from json db

const userApi = {
    getOneUserByUsername: (username) =>{
        return fetch(`http://localhost:8088/users?username=${username}`)
        .then(response => response.json())
    }
}












export default userApi
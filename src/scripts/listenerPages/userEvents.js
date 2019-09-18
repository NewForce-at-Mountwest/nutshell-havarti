import userApi from "../apiPages/userAPI.js"
import newsDomMgr from "../domPages/newsDOM.js"
import chatDomMgr from "../domPages/chatDOM.js"
import taskDomMgr from "../domPages/taskDOM.js"
// create event listener for user log in
const userEventHandler = {
    loginHandler: () => {
        // select the user log inbutton and add the event listener
        const userNameValue = document.querySelector("#user-login-input").value
        const passwordValue = document.querySelector("#user-password-input").value

        // collect username input value and password value at the click
        userApi.getOneUserByUsername(userNameValue).then(user => {
            console.log(user[0].username)
<<<<<<< HEAD
            console.log(user[0].password, passwordValue);
            if (user[0].password === passwordValue) {
                localStorage.setItem("userId", user[0].id)
                document.querySelector("h1").innerHTML = ""
                document.querySelector("#credential-container").innerHTML = ""
                document.querySelector("h2").innerHTML = `<p>Welcome to Nutshell, ${user[0].username}</p> <button id="logout">Logout</button>`
                taskDomMgr.buildCreateTask()
                taskDomMgr.printAllTasks()
                newsDomMgr.printPage()
                chatDomMgr.printPage()
            } else {
                // Error handling would go here
                alert("Incorrect password");
            }
=======
            localStorage.setItem("userId", user[0].id);
            document.querySelector("h1").innerHTML = ""
            document.querySelector("#credential-container").innerHTML = ""
            document.querySelector("h2").innerHTML = `<p>Welcome to Nutshell, ${user[0].username}</p> <button id="logout">Logout</button>`
            taskDomMgr.buildCreateTask()
            taskDomMgr.printAllTasks()
            newsDomMgr.printPage()
            chatDomMgr.printPage()
>>>>>>> master
        })
    },
    clearRegDom: () => {
        document.querySelector("#registerForm").innerHTML = ""
    },
    registerHandler: () => {
        document.querySelector("#credential-container").innerHTML = "<h3>Register your Nutshell account here!</h3>"
        document.querySelector("#registerForm").innerHTML = `<div id="register">
        <input type="text" name="user-name" id="user-login-input" placeholder="user name">
        <input type="text" name="user-email" id="user-email-input" placeholder="email">
        <input type="text" name="password" id="user-password-input" placeholder="password">
        <button id= "user-save-reg-btn">Register</button></div>`
    },
    registerNew: () => {
        const newUsername = document.querySelector("#user-login-input").value
        const newEmail = document.querySelector("#user-email-input").value
        const newPassword = document.querySelector("#user-password-input").value
        const newUserObject =
        {
            "username": newUsername,
            "email": newEmail,
            "password": newPassword
        }
        // check all users in json for duplicate email address
        // if email does not already exist register new user
        userApi.addUser(newUserObject)
            .then(userEventHandler.loginHandler)
            .then(userEventHandler.clearRegDom)
            // if email already exists produce error message "the email already exists"
            // else
    },
    logout: () => {
        window.location.href = "http://localhost:8080"
    }
}

export default userEventHandler
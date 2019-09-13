import userApi from "../apiPages/userAPI.js"
import newsDomMgr from "../domPages/newsDOM.js"

// create event listener for user log in
const userEventHandler = {
    loginHandler: () => {
        // select the user log inbutton and add the event listener
        document.querySelector("#user-login-btn").addEventListener("click", () => {
            console.log("you got the login handler listener button")
            const userNameValue = document.querySelector("#user-login-input").value
            const passwordValue = document.querySelector("#user-password-input").value

            // collect username input value and password value at the click
            userApi.getOneUserByUsername(userNameValue).then(user => {
                console.log(user[0].username)
                document.querySelector("h1").innerHTML=""
                document.querySelector("#credential-container").innerHTML=""
                document.querySelector("h2").innerHTML=`<p>Welcome to Nutshell, ${user[0].username}</p> <button id="logout">Logout</button>`
                // taskDomMgr.printPage
                newsDomMgr.printPage()
                // chatDomMgr.printPage
            })

        })
    }
}

export default userEventHandler
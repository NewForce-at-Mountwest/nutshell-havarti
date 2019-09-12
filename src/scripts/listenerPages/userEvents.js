import userApi from "../apiPages/userAPI.js"

// create event listener for user log in
const userEventHandler = {
    loginHandler:
// select the user log inbutton and add the event listener
        document.querySelector("#user-login-btn").addEventListener("click", () => {
            console.log("you got the button")
            const userNameValue = document.querySelector("#user-login-input").value
            const passwordValue = document.querySelector("#user-password-input").value

            // collect username input value and password value at the click
            userApi.getOneUserByUsername(userNameValue).then(user => {
                console.log(user)
            })

        })
}

export default userEventHandler
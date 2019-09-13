import userEventHandler from "./listenerPages/userEvents.js"

// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler())
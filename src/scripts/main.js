import userEventHandler from "./listenerPages/userEvents.js"

// user log in to load at page load
document.querySelector("#login").addEventListener("click", userEventHandler.loginHandler())

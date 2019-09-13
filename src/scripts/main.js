import userEventHandler from "./listenerPages/userEvents.js"
import taskDomMgr from "./domPages/taskDOM.js"
// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler())

taskDomMgr.buildCreateTask()
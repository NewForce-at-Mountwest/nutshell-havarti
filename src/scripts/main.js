import userEventHandler from "./listenerPages/userEvents.js"
import chatDomMgr from "./domPages/chatDOM.js"
import chatEvents from "./listenerPages/chatEvents.js"
// user log in to load at page load
document.querySelector("#user-login-btn").addEventListener("click", userEventHandler.loginHandler())

chatDomMgr.printPage()
chatDomMgr.editMessageBtn()
chatEvents.sendBtnClick()
chatDomMgr.printMessage()
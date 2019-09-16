import chatApiMgr from "../apiPages/chatAPI.js";
import chatDomMgr from "../domPages/chatDOM.js";

const chatEvents = {
    // Event listener for when clicking "send" in the message field
    sendBtnHandler: () => {
        if (event.target.id.includes("send-chat-btn")) {
            console.log("click")
            const messageInput = document.querySelector("#chat-input").value;
            const newMessageObject = {
                userId: localStorage.getItem("UserId"),
                message: messageInput,
            }

            chatApiMgr.messageInput(newMessageObject)
                .then(chatApiMgr.getAllMessages)
                .then(incomingMessages => {
                    chatDomMgr.printMessage(incomingMessages)
                })
        }

    },
}

export default chatEvents;
import chatApiMgr from "../apiPages/chatAPI.js";
import chatDomMgr from "../domPages/chatDOM.js";

const chatEvents = {
    // Event listener for when clicking "send" in the message field *sending to api, but needs refreshed to show new msg*
    sendBtnHandler: () => {
        if (event.target.id.includes("send-chat-btn")) {
            console.log("click")
            const messageInput = document.querySelector("#chat-input").value;
            const newMessageObject = {
                userId: 1,
                message: messageInput,
            }

            chatApiMgr.newChatMessage(newMessageObject)
                .then(chatApiMgr.getAllMessages)
                .then(incomingMessages => {
                    chatDomMgr.printMessage(incomingMessages)
                })
        }

    },
}

export default chatEvents;
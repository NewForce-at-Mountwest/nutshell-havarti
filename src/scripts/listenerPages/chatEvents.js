import chatApiMgr from "../apiPages/chatAPI.js";
import chatDomMgr from "../domPages/chatDOM.js";

const chatEvents = {
    // Event listener for when clicking "send" in the message field *sending to api, but needs refreshed to show new msg*
    sendBtnHandler: () => {
        if (event.target.id.includes("send-chat-btn")) {
            const messageInput = document.querySelector("#chat-input").value;
            const newMessageObject = {
                userId: 1,
                message: messageInput,
            }

            chatApiMgr.newChatMessage(newMessageObject)
                .then(() => {
                    chatDomMgr.printOnLogin()
                    chatDomMgr.printPage()
                })
        }

    },
    // event handler for deleting a chat message from the dom and api
    deleteMsgHandler: () => {
        if (event.target.id.includes("delete-chat-btn")) {
            const deleteArray = event.target.id.split("-")
            const deleteMsgId = deleteArray[3]
            chatApiMgr.deleteMessage(deleteMsgId)
                .then(() => {
                    chatDomMgr.printOnLogin()
                    chatDomMgr.printPage()
                })
        }
    },
    editChatHandler: () => {
        if (event.target.id.includes("edit-chat-btn")) {
            console.log("edit click")
            const editArray = event.target.id.split("-")
            const editMsgId = editArray[3]
            //get single chat msg
            //then print form
            chatDomMgr.chatEditForm()
            //go in 2nd click event

            const editedChatInputValue = document.querySelector("#chat-input").value;


            const editedChatObject = {
                userId: 1,
                message: editedChatInputValue,
            }
            chatApiMgr.editChat(editMsgId, editedChatObject)
                .then(() => {
                    chatDomMgr.printOnLogin()
                    chatDomMgr.printPage()
                })
        }
    }
}

export default chatEvents;
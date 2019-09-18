import chatApiMgr from "../apiPages/chatAPI.js";
import chatDomMgr from "../domPages/chatDOM.js";

const chatEvents = {
    // Event listener for when clicking "send" in the message field *sending to api, but needs refreshed to show new msg*
    sendBtnHandler: () => {
        if (event.target.id.includes("send-chat-btn")) {
            const messageInput = document.querySelector("#chat-input").value;
            const newMessageObject = {
                userId: parseInt(localStorage.getItem("userId")),
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
    //click event handler for edit message button
    editChatHandler: () => {
        if (event.target.id.includes("edit-chat-btn")) {
            console.log("edit click")
            const editArray = event.target.id.split("-");
            const editMsgId = editArray[3];

            chatApiMgr.getOneMessage(editMsgId)
                .then(singleEdit => {
                    chatDomMgr.chatEditForm(singleEdit)
                })
        }
    },
    //go in 2nd click event
    //second click event for save edit button
    editChatSaveHandler: () => {
        if (event.target.id.includes("edit-save-btn")) {
            const editArray = event.target.id.split("-");
            const editMsgId = editArray[3];
            const editedChatInputValue = document.querySelector(`#edit-input-${editMsgId}`).value;
            const editedChatObject = {
                userId: parseInt(localStorage.getItem("userId")),
                message: editedChatInputValue,
            }
            chatApiMgr.editChat(editMsgId, editedChatObject)
                .then(chatApiMgr.chatMessage())
            chatDomMgr.printOnLogin()
            chatDomMgr.printPage()
        }
    }
}

export default chatEvents;
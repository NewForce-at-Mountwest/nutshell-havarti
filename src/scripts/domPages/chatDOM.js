
import chatApiMgr from "../apiPages/chatAPI.js"

const chatDomMgr = {
    // build text field and button for chat messages w/ HTMLString
    // Messages to show up in the chat-container div a long with "send" button
    // printing text form to the DOM
    printPage: () => {
        const chatBox = document.querySelector("#chat-container")
        chatApiMgr.chatMessage()
            .then(messageArray => messageArray.forEach(singleMessage => {
                if (singleMessage.userId === parseInt(localStorage.getItem("userId") )){
                    chatBox.innerHTML += `
                    <p id="one-line">${singleMessage.user.username}: ${singleMessage.message}<button id="edit-chat-btn-${singleMessage.id}">Edit</button><button id="delete-chat-btn-${singleMessage.id}">Delete</button></p>
                    `
                }else {chatBox.innerHTML += `
                <p id="one-line">${singleMessage.user.username}: ${singleMessage.message}</p>
                `}
            }))
    },
    //div to print on login holding the chat input field and send btn. created input container for messages
    printOnLogin: () => {
        document.querySelector("#chat-container").innerHTML = `<h3> Chat </h3>
        <div id="chat-content">
</div>
<input type="text" id="chat-input" placeholder="message">
                <button id="send-chat-btn">Send</button>`
    },
    // print chat messages in an unordered list with edit button attached
    printMessage: () => {
        // target chat-input id, send button on click prints to chat container as a <ul>
        const chatInput = document.querySelector("#chat-input").value;
        const timeStamp = new Date()
        document.querySelector("#chat-content").innerHTML = `${chatInput} <br> ${timeStamp}`

    },
    // form for edit field after edit button is clicked
    chatEditForm: (editChatObject) => {
            document.querySelector("#one-line").innerHTML = `
        <input type="text" id="edit-input-${editChatObject.id}" value="${editChatObject.message}">
        <button id="edit-save-btn-${editChatObject.id}">Save</button>`
    }

}
// Showing username next to the message w/ time stamp


export default chatDomMgr

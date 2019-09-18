
import chatApiMgr from "../apiPages/chatAPI.js"

const chatDomMgr = {
    // build text field and button for chat messages w/ HTMLString
    // Messages to show up in the chat-container div a long with "send" button
    // printing text form to the DOM
    printPage: () => {
        const chatBox = document.querySelector("#chat-container")
        chatApiMgr.chatMessage()
        .then(messageArray => messageArray.forEach(singleMessage=>{
            if(singleMessage.userId === 1){
                chatBox.innerHTML += `
                <p>${singleMessage.message}<button id="edit-chat-btn-${singleMessage.id}">Edit</button><button id="delete-chat-btn-${singleMessage.id}">Delete</button></p>
                `
            }

        }))
    },
    //div to print on login holding the chat input field and send btn. created input container for messages
    printOnLogin: ()=>{
    document.querySelector("#chat-container").innerHTML = `<div id="chat-content">
</div>
<input type="text" id="chat-input" placeholder="message">
                <button id="send-chat-btn">Send</button>`
    },
    // print chat messages in an unordered list with edit button attached
    printMessage: () => {
        // target chat-input id, send button on click prints to chat container as a <ul>
        const chatInput = document.querySelector("#chat-input").value;
        document.querySelector("#chat-content").innerHTML = chatInput

    },
    // form for edit field after edit button is clicked
    chatEditForm: ()=>{
        chatApiMgr.chatMessage()
        .then(singleMessage=>{
        if(singleMessage.userId === 1){
        document.querySelector("#chat-container").innerHTML =`
        <input type="text" id="edit-input-${singleMessage.id}">
        <button id="edit-save-btn-${singleMessage.id}">Save</button>`
        }})
    }
}
// Showing username next to the message w/ time stamp


export default chatDomMgr

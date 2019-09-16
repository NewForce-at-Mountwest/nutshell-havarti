
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
                <div id="chat-content">
                <li>${singleMessage.message}<button id="edit-chat-btn">Edit</button><button id="delete-chat-btn">Delete</button></li>
                </div>

                `
            }

        }))
    },
    // print chat messages in an unordered list with edit button attached
    printMessage: () => {
        // target chat-input id, send button on click prints to chat container as a <ul>
        const chatInput = document.querySelector("#chat-input").value;
        document.querySelector("#chat-content").innerHTML = chatInput

    }
}
// Showing username next to the message w/ time stamp


export default chatDomMgr

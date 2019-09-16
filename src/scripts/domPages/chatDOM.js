const chatDomMgr = {
    // build text field and button for chat messages w/ HTMLString
    // Messages to show up in the chat-container div a long with "send" button

    printPage: () => {

        document.querySelector("#chat-container").innerHTML = `
        <div id="chat-content">
        </div>
        <input type="text" id="chat-input" placeholder="message">
        <button id="send-chat-btn">Send</button>`
    },
    // adding the edit button to edit messages put into the chat-content field
    editMessageBtn: () => {
        document.querySelector("#chat-content").innerHTML = `
    <button id="edit-chat-btn">Edit</button>`
    },
    // print chat messages in an unordered list with edit button attached
printMessage: () => {
document.querySelector("#chat-input").innerHTML = document.querySelector("#chat-input").value;
document.querySelector("#chat-input").value = "";
}

}




// Showing username next to the message w/ time stamp


export default chatDomMgr




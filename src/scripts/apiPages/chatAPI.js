

const chatApiMgr = {
    //fetch function to add input value of chat-input to the api under /chats.messages
    chatMessage: () => {
        return fetch("http://localhost:8088/chats")
            .then(response => response.json())
    },
    //method to get all messages from the chatApi
    getAllMessages: () => {
        return fetch("http://localhost:8088/chats")
            .then(response => response.json())
    },
    // method to retrieve a new chat message from the user input field upon send button
    newChatMessage: (newMessage) => {
        return fetch("http://localhost:8088/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
    },
    // method to delete a message from the message history
    deleteMessage: (id) =>
        fetch(`http://localhost:8088/chats/${id}`, {
            method: "DELETE"
        }),
    // method to edit a message in the chatApi
    editChat: (id, chatEditObject) => {
        return fetch(`http://localhost:8088/chats/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chatEditObject)
        });
    }

}

export default chatApiMgr
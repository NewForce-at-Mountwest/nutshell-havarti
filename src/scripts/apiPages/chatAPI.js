const chatApiMgr = {
    //fetch function to add input value of chat-input to the api under /chats.messages
    chatMessage:
    fetch("http://localhost:3000/chats")
    .then((response)=>  {
        return response.json();
    })
    .then(()=> {

    })
}

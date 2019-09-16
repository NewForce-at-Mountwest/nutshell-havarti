const chatEvents = {
    // Event listener for when clicking "send" in the message field
sendBtnClick: document.querySelector("body").addEventListener("click", ()=>{
    (event.target.id.includes("send"))
})
}

export default chatEvents
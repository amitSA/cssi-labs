const getMessages = () => {
    const messagesRef = firebase.database().ref()
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        const messages = data["messages"]
        findMessage(messages)                 
    })    
}

const findMessage = (messages) => {
    const passwordAttempt = document.querySelector("#passcode").value
    console.log("password attempt: ", passwordAttempt)
    for (id in messages){
        console.log(id, messages[id])
        message = messages[id]
        if(message['password'] == passwordAttempt){
            const messageData = message['value']
            // code to render messageData in the DOM
            renderMessageAsHtml(messageData) 
        }
    }
}

const renderMessageAsHtml = (message) => {
 console.log("render message: ", message)
 // Hide Input Form
//  const passcodeForm = document.querySelector('#passcodeInput')
//  passcodeForm.style.display = "none" 
 
// Reset the password input's contents
 const passcodeField = document.querySelector("#passcode")
 passcodeField.value = ""


 // Render messageas HTML
 const messageDiv = document.querySelector("#message")
 messageDiv.innerHTML = message
}

console.log(document.cookie)

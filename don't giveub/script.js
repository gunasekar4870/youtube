function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    displayMessage("User: " + userInput);

    // Process user input and get the chatbot's response
    var chatbotResponse = getChatbotResponse(userInput);
    displayMessage("Chatbot: " + chatbotResponse);

    // Clear the user input field
    document.getElementById("user-input").value = "";
}

function displayMessage(message) {
    var chatDisplay = document.getElementById("chat-display");
    var newMessage = document.createElement("div");
    newMessage.textContent = message;
    chatDisplay.appendChild(newMessage);

    // Scroll to the bottom of the chat display
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function getChatbotResponse(userInput) {
    // Simple rule-based chatbot response
    if (userInput.toLowerCase() === "hi") {
        return "Hi there! How can I help you?";
    } else {
        return "'Neural networks, also known as artificial neural networks (ANNs) or simulated neural networks (SNNs), are a subset of machine learning and are at the heart of deep learning algorithms. Their name and structure are inspired by the human brain, mimicking the way that biological neurons signal to one another.!";
    }
}

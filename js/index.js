"use strict";

const chat = {
    author: "yourName",
    init() {
        console.log(this.sendMessage);
    },
    sendMessage() {
    },
    fetchMessages() {
        const apiUrl = "https://dev2chat.onrender.com/messages";
        const apiKey = "your-api-key";

        fetch(apiUrl, {
        headers: {
            "Authorization": `Bearer ${apiKey}`
        }
        })
        .then(response => response.json())
        .then(data => {
        console.log(data);
        })
        .catch(error => {
        console.error(error);
        });
    },
    renderMessage(message) {
    }

}

chat.init();
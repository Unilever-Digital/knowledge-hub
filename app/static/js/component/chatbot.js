setInterval(highlightAll, 1000);
// Function to highlight code using highlight.js library
function highlightAll() {
    document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
    });
}

const chatBox = document.querySelector(".chat-box");
const chatContainer = document.querySelector(".chat-box-container");
const messageInput = document.querySelector("#message-input");
const sendBtn = document.querySelector("#send-btn");

function renderProductCardHome(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("div");
    productImage.classList.add("product-image");
    //addimage(product.image, productImage);
    productCard.appendChild(productImage);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ${product.price} ${product.currency}`;
    productCard.appendChild(productPrice);

    const productBrand = document.createElement("p");
    productBrand.textContent = `Brand: ${product.brand}`;
    productCard.appendChild(productBrand);

    let buy = document.createElement("button");
    buy.classList.add("button-buy");
    buy.setAttribute("id", product._id);
    buy.setAttribute("name", product.name);
    buy.innerHTML = "Buy";
    eventClickedItemHome(buy);
    productCard.appendChild(buy);
    return productCard;
}

async function render_item_main_workspace(id_) {
    const workspace = document.querySelector(".main-workspace-container-header");
    while (workspace.firstChild) {
        workspace.removeChild(workspace.firstChild);
    }
    let item_id = id_;
    const request = await fetch("/item_get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id })
    });

    const respone = await request.json();
    renderProductCardHome(respone);
}

async function render_item_recommend(element) {
    const item_id = element._id;
    const request = await fetch("/item_get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id })
    });
    const elements = await request.json()
    const bot_message_recommend = document.createElement("div");
    bot_message_recommend.classList.add("bot-message-recommend");
    const item = document.createElement("div");
    item.classList.add("item-recommend");
    item.innerHTML = elements.name;
    const item_price = document.createElement("p");
    item_price.innerHTML = `${elements.price} USD`;

    const item_buy_button = document.createElement("button");
    item_buy_button.innerHTML = "Buy Now";
    item_buy_button.addEventListener("click", async function() {
        render_item_main_workspace(elements._id);
    });

    item.appendChild(item_price);
    item.appendChild(item_buy_button);
    bot_message_recommend.appendChild(item);
    chatBox.appendChild(bot_message_recommend);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage(message, isUserMessage) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("mt-3", "p-3", "rounded");
    if (isUserMessage) {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
        // Add a loading indicator
        messageInput.value = "";
        const loadingIndicator = document.createElement("div");
        loadingIndicator.classList.add("loader");
        chatContainer.appendChild(loadingIndicator);
        // Add the user's message to the chat box
        addMessage(message, true);
        // Send the message to the bot
        try {
            const response = await fetch("/chat_api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });
            // Get the bot's response
            const response_data = await response.json();

            // Remove the loading indicator
            const loadingIndicator = document.querySelector(".loader");
            loadingIndicator.remove();

            // paring respone gpt data question
            const respone_list = response_data.respone;
            respone_list.forEach(element => {
                const data = element.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

                // Add the bot's response to the chat box
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("mt-3", "p-3", "rounded");
                messageDiv.classList.add("bot-message");
                messageDiv.innerHTML = `<img src="static/images/icons-bot.png" class="bot-icon"><p>${data}</p>`;
                chatBox.appendChild(messageDiv);
            });

            const product = response_data.recommend;

            try {
                product.forEach(element => {
                    render_item_recommend(element);
                });
            } catch {
                console.log("");
            }

            // Scroll the chat box to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;
        } catch (error) {
            // Log the error
            console.error("Failed to fetch bot response:", error);

            // Show a more specific error message to the user
            const errorMessageDiv = document.createElement("div");
            errorMessageDiv.classList.add("mt-3", "p-3", "rounded");
            errorMessageDiv.classList.add("bot-message");
            errorMessageDiv.innerHTML = `<p>Oops, something went wrong while fetching the bot response: ${error.message}</p>`;
            chatBox.appendChild(errorMessageDiv);
            // Remove the loading indicator even if there is an error
            const loadingIndicator = document.querySelector(".loader");
            loadingIndicator.remove();
        }
    }
}

messageInput.addEventListener("keydown", event => {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

function changeHeightClose() {
    const box = document.querySelector(".chat-box-container");
    const chat_entry = document.querySelector(".chat-entry");
    const button_box = document.querySelector(".chat-button-bar");
    const chatbox = document.querySelector(".chat-box");
    // Check the current height and toggle between 400px and 25px
    // Check the current height and toggle between 400px and 25px
    box.style.height = "33px";
    box.style.width = "350px";
    chat_entry.style.visibility = "hidden";
    chatbox.style.visibility ="hidden";
    button_box.style.borderBottomRightRadius = "12px";
    button_box.style.borderBottomLeftRadius = "12px";
}

function changeHeightOpen() {
    const box = document.querySelector(".chat-box-container");
    const button_box = document.querySelector(".chat-button-bar");
    const chat_entry = document.querySelector(".chat-entry");
    const chatbox = document.querySelector(".chat-box");
    // Check the current height and toggle between 400px and 25px
    box.style.height = "500px";
    box.style.width = "350px";
    chat_entry.style.height = "35px";
    button_box.style.borderBottomRightRadius = "0px";
    button_box.style.borderBottomLeftRadius = "0px";
    chat_entry.style.visibility = "visible";
    chatbox.style.visibility = "visible";
    chat_entry.style.marginTop = "0%"
}

function changeHeightFullScreen() {
    const box = document.querySelector(".chat-box-container");
    const button_box = document.querySelector(".chat-button-bar");
    const chat_entry = document.querySelector(".chat-entry");
    // Check the current height and toggle between 400px and 25px
    box.style.height = "800px";
    box.style.width = "600px";
    chat_entry.style.height = "35px";
    button_box.style.borderBottomRightRadius = "0px";
    button_box.style.borderBottomLeftRadius = "0px";
    chat_entry.style.visibility = "visible";
}

document.addEventListener("DOMContentLoaded", function() {
    const clickHeightOpen = document.querySelector(".chat-button-openbutton");
    const clickHeightClose = document.querySelector(".chat-button-closebutton");

    clickHeightClose.addEventListener("click", changeHeightClose);
    clickHeightOpen.addEventListener("click", changeHeightOpen);
});
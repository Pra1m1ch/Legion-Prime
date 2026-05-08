// Чат-бот поддержки
let isChatOpen = false;
const chatWindow = document.getElementById('chatWindow');
const chatButton = document.getElementById('chatButton');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatOptions = document.getElementById('chatOptions');

// Ответы бота
const botResponses = {
    delivery: "🚚 **Доставка предметов**\n\nПредметы добавляются в ваш инвентарь Steam мгновенно после оплаты. Среднее время получения: 1-5 минут. Если предмет не пришёл в течение часа, обратитесь в поддержку.",
    payment: "💳 **Способы оплаты**\n\nМы принимаем:\n• Банковские карты (Visa, MasterCard, МИР)\n• PayPal\n• Криптовалюты (BTC, ETH)\n• Qiwi, ЮMoney\n\nВсе транзакции защищены шифрованием.",
    guarantee: "✅ **Гарантия и возврат**\n\nВсе предметы 100% оригинальные. Гарантия 30 дней. Если предмет не подошёл или есть проблемы — возврат средств в течение 14 дней. Просто напишите нам!",
    other: "📧 **Связь с поддержкой**\n\nЕсли не нашли ответ на свой вопрос, пожалуйста, напишите нам на почту:\n\n**dota2store@gmail.com**\n\nМы ответим в течение 24 часов! 💬"
};

// Функция добавления сообщения
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Обработка выбора вопроса
function handleQuestion(questionType) {
    const questionText = {
        delivery: "🚚 Доставка предметов",
        payment: "💳 Способы оплаты",
        guarantee: "✅ Гарантия и возврат",
        other: "📧 Другой вопрос"
    };
    
    addMessage(questionText[questionType], true);
    
    setTimeout(() => {
        addMessage(botResponses[questionType], false);
        
        if (questionType === 'other') {
            setTimeout(() => {
                const emailDiv = document.createElement('div');
                emailDiv.className = 'message bot';
                emailDiv.innerHTML = '📧 Наша почта: <strong style="color:#ff8c00">dota2store@gmail.com</strong><br>Напишите нам, и мы обязательно поможем!';
                chatMessages.appendChild(emailDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 300);
        }
    }, 500);
}

// Открытие/закрытие чата
function toggleChat() {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
        chatWindow.classList.add('active');
    } else {
        chatWindow.classList.remove('active');
    }
}

// Обработчики для чата
if (chatButton) chatButton.addEventListener('click', toggleChat);
if (chatClose) chatClose.addEventListener('click', toggleChat);

// Обработка кликов по опциям
if (chatOptions) {
    chatOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.chat-option');
        if (option) {
            const questionType = option.getAttribute('data-question');
            handleQuestion(questionType);
        }
    });
}

// Закрытие чата по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatWindow && chatWindow.classList.contains('active')) {
        toggleChat();
    }
});
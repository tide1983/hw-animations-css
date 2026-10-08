export default class CallbackChat {
    constructor() {
        this.triggerBtn = document.getElementById('chat-trigger');
        this.chatWindow = document.getElementById('chat-window');
        this.closeBtn = document.getElementById('chat-close');

        // Изначально окно скрыто
        this.chatWindow.classList.add('hidden');

        this.triggerBtn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
    }

    open() {
        // Скрываем кружок
        this.triggerBtn.style.display = 'none';
        // Показываем окно
        this.chatWindow.classList.remove('hidden');
    }

    close() {
        // Скрываем окно
        this.chatWindow.classList.add('hidden');
        // Через 100ms (после анимации) возвращаем кружок
        setTimeout(() => {
            this.triggerBtn.style.display = 'block';
        }, 100);
    }
}
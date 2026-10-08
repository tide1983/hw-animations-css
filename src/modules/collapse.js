export default class Collapse {
    constructor(element) {
        this.element = element;
        this.button = element.querySelector('.collapse-btn');
        this.content = element.querySelector('.collapse-content');

        // Изначально контент скрыт
        this.content.style.maxHeight = '0px';

        this.button.addEventListener('click', () => this.toggle());
    }

    toggle() {
        // Если контент скрыт (max-height = 0) — открываем
        if (this.content.style.maxHeight === '0px' || this.content.style.maxHeight === '') {
            this.content.style.maxHeight = this.content.scrollHeight + 'px';
            this.button.textContent = 'Collapse';
        } else {
            this.content.style.maxHeight = '0px';
        }
    }
}
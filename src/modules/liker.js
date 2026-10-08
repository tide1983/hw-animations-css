export default class Liker {
    constructor(element) {
        this.element = element;
        this.button = element.querySelector('.like-btn');

        this.animationDuration = 500; // ms
        this.maxOffset = 50;          // px
        this.upDistance = 200;        // px
        this.heartsPerClick = 4;      // сколько сердечек вылетает за один клик
        this.spawnDelay = 80;         // задержка между сердечками (мс)

        this.button.addEventListener('click', () => this.createHearts());
    }

    createHearts() {
        for (let i = 0; i < this.heartsPerClick; i++) {
            setTimeout(() => this.createHeart(), i * this.spawnDelay);
        }
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Случайная траектория (0-3)
        const trajectoryIndex = Math.floor(Math.random() * 4);

        const halfOffset = this.maxOffset;
        const step = this.upDistance / 4;

        // Базовые keyframes для каждой траектории
        const trajectories = [
            // 0: 0 -> -offset -> 0 -> +offset -> 0
            [
                { x: 0,           y: 0 },
                { x: -halfOffset, y: -step },
                { x: 0,           y: -step * 2 },
                { x: halfOffset,  y: -step * 3 },
                { x: 0,           y: -this.upDistance },
            ],
            // 1: 0 -> 0 -> +offset -> -offset -> 0
            [
                { x: 0,           y: 0 },
                { x: 0,           y: -step },
                { x: halfOffset,  y: -step * 2 },
                { x: -halfOffset, y: -step * 3 },
                { x: 0,           y: -this.upDistance },
            ],
            // 2: 0 -> 0 -> -offset -> +offset -> 0
            [
                { x: 0,           y: 0 },
                { x: 0,           y: -step },
                { x: -halfOffset, y: -step * 2 },
                { x: halfOffset,  y: -step * 3 },
                { x: 0,           y: -this.upDistance },
            ],
            // 3: 0 -> +offset -> 0 -> -offset -> 0
            [
                { x: 0,           y: 0 },
                { x: halfOffset,  y: -step },
                { x: 0,           y: -step * 2 },
                { x: -halfOffset, y: -step * 3 },
                { x: 0,           y: -this.upDistance },
            ],
        ];

        const chosen = trajectories[trajectoryIndex];

        // Формируем keyframes для Web Animations API
        const keyframes = chosen.map((point, index) => {
            const isEdge = index === 0 || index === chosen.length - 1;
            return {
                transform: `translateX(${point.x}px) translateY(${point.y}px) scale(${isEdge ? 0.6 : 1})`,
                opacity: isEdge ? 0 : 1,
                offset: index / (chosen.length - 1),
            };
        });

        const animation = heart.animate(keyframes, {
            duration: this.animationDuration,
            easing: 'ease-out',
            fill: 'forwards',
        });

        this.element.appendChild(heart);

        // Удаляем сердечко после завершения анимации
        animation.onfinish = () => {
            heart.remove();
        };
    }
}
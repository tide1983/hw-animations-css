import './styles.css';

import Collapse from './modules/collapse.js';
import CallbackChat from './modules/callback.js';
import Liker from './modules/liker.js';

document.addEventListener('DOMContentLoaded', () => {
    const collapseEl = document.querySelector('.collapse-widget');
    if (collapseEl) new Collapse(collapseEl);

    new CallbackChat();

    const likerEl = document.querySelector('.liker-widget');
    if (likerEl) new Liker(likerEl);
});
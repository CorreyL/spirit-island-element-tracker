document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    elements.forEach(el => {
        const decrementBtn = el.querySelector('.decrement');
        const incrementBtn = el.querySelector('.increment');
        const countSpan = el.querySelector('.count');
        
        decrementBtn.addEventListener('click', () => {
            let currentCount = parseInt(countSpan.textContent);
            if (currentCount > 0) {
                countSpan.textContent = currentCount - 1;
            }
        });

        incrementBtn.addEventListener('click', () => {
            let currentCount = parseInt(countSpan.textContent);
            countSpan.textContent = currentCount + 1;
        });
    });
});

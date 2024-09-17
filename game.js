const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Функція для налаштування розміру canvas під розмір екрану
function resizeCanvas() {
    canvas.width = window.innerWidth;   // Ширина вікна браузера
    canvas.height = window.innerHeight; // Висота вікна браузера
}

// Автоматично змінюємо розмір при завантаженні сторінки та при зміні розміру екрану
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Функція для малювання
function draw() {
    // Очищення canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Тут можна додати код для малювання або гри

    requestAnimationFrame(draw);
}

draw();  // Запускаємо малювання

// Обробка подій для кнопок
document.getElementById('playButton').addEventListener('click', () => {
    alert('Грати натиснуто!');
    // Тут можна додати код для запуску гри
});

document.getElementById('settingsButton').addEventListener('click', () => {
    alert('Налаштування натиснуто!');
    // Тут можна додати код для налаштувань
});

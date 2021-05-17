/*
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, 
кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
*/

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action = start]');
const stopBtnRef = document.querySelector('[data-action = stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStart);
stopBtnRef.addEventListener('click', onStop);

let counterId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStart() {
  startBtnRef.disabled = true;
  if (!counterId) {
    counterId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }
}

function onStop() {
  clearInterval(counterId);
  startBtnRef.disabled = false;
}

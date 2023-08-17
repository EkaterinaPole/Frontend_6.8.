const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Нужен для вывода информации в консоль');
})

const alertClass = document.querySelector('#alert');

alertClass.addEventListener('click', () => {
    alert('Функция alert позволяет вывести какую-либо информацию во всплывающем окне в браузере. К таким окнам нельзя добавить стили и разукрасить их. Такое всплывающее окно очень удобно, так как оно позволяет быстро и наглядно вывести нужную информацию для пользователя.');
})

const promptClass = document.querySelector('#prompt');

promptClass.addEventListener('click', () => {
    alert('Функция prompt выводит окно для ввода данных. Первым параметром она принимает сообщение, которое будет показано пользователю, а вторым - текст по умолчанию в поле ввода Второй параметр - не обязательный. В окошке что появится будет находится текстовое поле, и две кнопки - ОК, CANCEL.');
})
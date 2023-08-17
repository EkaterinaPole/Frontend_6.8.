//input = #duplicateField
//button
//p id="duplicateField"
//2 события: нажатие клавиши на клавиатуре для поля ввода:
// и нажатие левой клавиши мыши для кнопки: mousedown which === 1 - для левой кнопки

let button = document.querySelector('button');
let textInput = document.querySelector('input');
let pText = document.querySelector('#duplicateField');

textInput.addEventListener('keydown', function(){
    pText.textContent = textInput.value;
});

button.addEventListener('mousedown', (event) => {
    const inputConsol = textInput.value;
    if (event.which === 1){
        console.log(inputConsol);
        textInput.value = '';
        pText.textContent = '';
    }
})
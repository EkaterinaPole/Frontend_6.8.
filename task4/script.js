hrefText.onclick = function(){
    let TextLink = prompt('Введите текст чтобы изменить текст ссылки');
    let userText = document.querySelector('#hrefText');
    userText.textContent = TextLink;
    console.log('Получилось!', TextLink);
}
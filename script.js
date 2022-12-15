/* 
1. Зробити клік по першій кнопці - done
2. Збільшити лічильник на одиницю
    - Збільшувати лічильник (countClick) - done
    - Відображати на екрані в блоці span кількість кліків - ?
*/

// Обираємо елемент <span id="count">0</span> і зберігаємо його в змінну blockCount
blockCount = document.querySelector("#count");
countClick = 0;

btn2 = document.querySelector("#btn2");
console.dir(btn2);

btn2.onclick = function() {
    p2 = document.querySelector("#p2");
    p2.style.background = 'red';
    p2.style.color = 'white';
    console.dir(p2);
}



function btnClick() {
    countClick = countClick + 1;
    blockCount.innerText = countClick;
    console.dir(countClick);
}


/*

1. Вибрати аудіо тег
2. Вибрати кнопку
3. Зробити клік по кнопці
4. При кліці включати аудіо

*/

audio = document.querySelector("audioGun");
btn3 = document.querySelector("#btn3");

btn3.onclick = function() {
    audioGun.play();
}
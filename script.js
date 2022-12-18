// /* 
// 1. Зробити клік по першій кнопці - done
// 2. Збільшити лічильник на одиницю
//     - Збільшувати лічильник (countClick) - done
//     - Відображати на екрані в блоці span кількість кліків - ?
// */

// // Обираємо елемент <span id="count">0</span> і зберігаємо його в змінну blockCount
// blockCount = document.querySelector("#count");
// countClick = 0;

// btn2 = document.querySelector("#btn2");
// console.dir(btn2);

// btn2.onclick = function() {
//     p2 = document.querySelector("#p2");
//     p2.style.background = 'red';
//     p2.style.color = 'white';
//     console.dir(p2);
// }



// function btnClick() {
//     countClick = countClick + 1;
//     blockCount.innerText = countClick;
//     console.dir(countClick);
// }


// /*

// 1. Вибрати аудіо тег
// 2. Вибрати кнопку
// 3. Зробити клік по кнопці
// 4. При кліці включати аудіо

// */

// audio = document.querySelector("audioGun");
// btn3 = document.querySelector("#btn3");

// btn3.onclick = function() {
//     audioGun.play();
// }


// 1. Обрати качку і помістити в змінну - done
// 2. Навчитися змінювати позицію качки - done
// 3. Навчитися змінювати картинку качки - done
//      -Якщо картинки немає, лічильнику ставити 0 - done
// 4. Навчитися рухати качку по таймеру - done
// 5. Навчитися обмежувати координати руху качки - done

duck = document.querySelector('.duck');

imageDuck = 0; // = 2 => 0



// document.onclick = function() {
//     console.dir(duck.offsetLeft);
//     duck.style.backgroundImage = "url(assets/images/duck/black/left/" + imageDuck + ".png)";
//     imageDuck = imageDuck + 1;

//     if (imageDuck > 2) {
//         imageDuck = 0;
//     }

//     duck.style.left = duck.offsetLeft - 10 + 'px'; //text


// }

timerId = setInterval(function() {
    duck.style.backgroundImage = "url(assets/images/duck/black/left/" + imageDuck + ".png)";
    imageDuck = imageDuck + 1;

    if (imageDuck > 2) {
        imageDuck = 0;
    }

    duck.style.left = duck.offsetLeft - 10 + 'px'; //text

    if (duck.offsetLeft < 0) {
        clearInterval(timerId);
    }

}, 200)


// 1. Створити 3 качки
//         <div class="duck black-duck-left" style="left: 20%; top: 80%"></div>

// 2. Зробити випадковий рух качок
// 3. Коли качка долітає до будь-якої границі, то змінити напрям

const gameArea = document.querySelector('.game-area')

function createDuck(top, left, type) {
    let duck = '<div class="duck ' + type + '-duck-left" style="left: ' + left + '; top: ' + top + '"></div>';
    gameArea.innerHTML = gameArea.innerHTML + duck;
}
createDuck("10%", "40%", 'black');
createDuck("20%", "20%", 'red');
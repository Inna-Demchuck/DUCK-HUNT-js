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

// timerId = setInterval(function() {
//     duck.style.backgroundImage = "url(assets/images/duck/black/left/" + imageDuck + ".png)";
//     imageDuck = imageDuck + 1;

//     if (imageDuck > 2) {
//         imageDuck = 0;
//     }

//     duck.style.left = duck.offsetLeft - 10 + 'px'; //text

//     if (duck.offsetLeft < 0) {
//         clearInterval(timerId);
//     }

// }, 200)


// 1. Створити 3 качки
//         <div class="duck black-duck-left" style="left: 20%; top: 80%"></div>

// 2. Зробити випадковий рух качок
// -Зробити виліт качок з випадкового місця
//     -Зробити випадковий напрям руху качки -
//     6 варіантів руху:
//     -ліво 
//     -право 
//     -ліво вверх 
//     -право вверх 
//     -ліво вниз 
//     -право вниз

// 3. Коли качка долітає до будь-якої границі, то змінити напрям
// 4. Зробити виліт випадкової качки(колір)

const score = 10;
const gameArea = document.querySelector('.game-area')

// function createDuck(top, left, type) {
//     let duck = '<div class="duck ' + type + '-duck-left" style="left: ' + left + '; top: ' + top + '"></div>';
//     gameArea.innerHTML = gameArea.innerHTML + duck;
// }

function createDuck(left, type) {
    let duck = document.createElement("div");
    duck.className = 'duck ' + type + '-duck-left';
    duck.style.top = "100%";
    duck.style.left = left;
    gameArea.appendChild(duck);
    moveDuck(duck, type);
}

createDuck(getRandomInt(0, 100) + "%", 'red');
createDuck(getRandomInt(0, 100) + "%", 'red');
createDuck(getRandomInt(0, 100) + "%", 'black');


// Рух качки

// 1. Створити качку
// 2. рухати качку в гору (право, ліво)

function moveDuck(duck, type) {
    let imageDuck = 0;

    let direction = diirectionStart(duck);

    let timerId = setInterval(function() {
        // duck.style.backgroundImage = "url(assets/images/duck/black/left/" + imageDuck + ".png)";
        imageDuck = imageDuck + 1;

        if (imageDuck > 2) {
            imageDuck = 0;
        }

        switch (direction) {
            case "top-left":
                moveTopLeft(duck, type, imageDuck);
                break;
            case "top-right":
                moveTopRight(duck, type, imageDuck);
                break;
            case "right":
                moveRight(duck, type, imageDuck);
                break;
            case "left":
                moveLeft(duck, type, imageDuck);
                break;
            case "down-left":
                moveDownLeft(duck, type, imageDuck);
                break;
            case "down-right":
                moveDownRight(duck, type, imageDuck);
                break;
            default:
                moveTopLeft(duck, type, imageDuck);
                break;

        }

        // duck.style.left = duck.offsetLeft - 10 + 'px'; //text
        // duck.style.top = duck.offsetTop - 10 + 'px';

        if (duck.offsetLeft < 0) {
            clearInterval(timerId);
        }

    }, 200)
}

// Повинна повертати top-left чи top-right

function diirectionStart(duck) {
    let direction = "top-left";
    let body = document.querySelector('body');

    if (duck.offsetLeft <= body.clientWidth / 2) {
        direction = "top-right";
    }

    return direction;
}

// 1. Функція змінює картинку
// 2. Функція змінює координати

function moveLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - score + "px";
}

function moveRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + score + "px";
}

function moveTopLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - score + "px";
    duck.style.top = duck.offsetTop - score + "px";
}

function moveTopRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + score + "px";
    duck.style.top = duck.offsetTop - score + "px";
}

function moveDoneRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + score + "px";
    duck.style.top = duck.offsetTop + score + "px";
}

function moveDoneLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - score + "px";
    duck.style.top = duck.offsetTop + score + "px";
}

console.dir(getRandomInt(0, 100))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
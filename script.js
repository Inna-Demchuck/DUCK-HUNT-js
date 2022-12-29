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

// audioGun = document.querySelector("#audioGun");
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

// imageDuck = 0; // = 2 => 0



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

let scores = 0;
const speed = 10;
let bullet = 5;
const gameArea = document.querySelector('.game-area');
const scoresBlock = document.querySelector('.scores');
const audioGun = document.querySelector("#audioGun");
let level = 1;
let dead = 0;
let free = 0;

// function createDuck(top, left, type) {
//     let duck = '<div class="duck ' + type + '-duck-left" style="left: ' + left + '; top: ' + top + '"></div>';
//     gameArea.innerHTML = gameArea.innerHTML + duck;
// }

function createDuck() {
    let duck = document.createElement("div");
    let type = getRandomInt(0, 2);

    if (type == 0) {
        type = 'black';
    } else {
        type = 'red';
    }

    let timerID = moveDuck(duck, type);

    duck.className = 'duck ' + type + '-duck-left';
    duck.style.top = "100%";
    duck.style.left = getRandomInt(0, 100) + "%";
    duck.dataset.timer = timerID;

    gameArea.appendChild(duck);


}


function start() {
    bullet = level * 3;
    let i = 0;
    while (i < bullet) {
        createBullet();
        createDuck();

        i = i + 1;
    }
}

function createBullet() {
    let bulletBlock = document.querySelector('.bullets-container');
    let bullet = document.createElement('div');
    bullet.className = 'bullet';

    bulletBlock.appendChild(bullet);
}

start();

// createDuck(getRandomInt(0, 100) + "%", 'red');
// createDuck(getRandomInt(0, 100) + "%", 'red');
// createDuck(getRandomInt(0, 100) + "%", 'black');

// 1. Навчитися визначати що попали по конкретній качці - done
// 2. Видаляти качку- done
// 3. Видаляти таймери- done


// 4. Збільшувати кількість балів -done
// 5. Зменшувати кількість куль
// 6. Перевіряти чи є кулі,
// якщо є то зменшувати, 
// якщо немає, то качки врятовані.
// --прибрати на екрані одну кулю

gameArea.onclick = function(e) {
    if (bullet > 0) {
        audioGun.play();

        bullet = bullet - 1;
        let oneBulletBlock = document.querySelector('.bullets-container div')
        oneBulletBlock.remove();

        if (e.target.classList.contains('duck') == true && e.target.classList.contains('shot') == false) {
            scores = scores + 100;
            scoresBlock.innerText = scores;
            shotDuck(e.target);


            clearInterval(e.target.dataset.timer);
        }
    } else {
        // console.dir('bullet enought')
        nextStep();
    }
}

function shotDuck(duck) {
    let type = 'black';
    duck.classList.add('shot');

    if (duck.classList.contains('.red-duck-left')) {
        type = 'red';
    }

    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/shot/0.png)";

    setTimeout(function() {

        deadDuck(duck, type);
    }, 300)
}

function deadDuck(duck, type) {
    dead++;
    let imageDuck = 0;

    let timerID = setInterval(function() {
        imageDuck = imageDuck + 1;

        if (imageDuck > 2) {
            imageDuck = 0;
        }

        duck.style.backgroundImage = "url(assets/images/duck/" + type + "/dead/" + imageDuck + ".png)";
        duck.style.top = duck.offsetTop + speed + "px";

        if (duck.offsetTop >= document.body.clientHeight) {
            clearInterval(timerID);
            duck.remove();
        }
    }, 20)


}

// Рух качки

// 1. Створити качку
// 2. рухати качку в гору (право, ліво)

function moveDuck(duck, type) {
    let imageDuck = 0;

    let direction = directionStart(duck);
    let move = true;

    let timerID = setInterval(function() {
        // duck.style.backgroundImage = "url(assets/images/duck/black/left/" + imageDuck + ".png)";
        imageDuck = imageDuck + 1;

        if (imageDuck > 2) {
            imageDuck = 0;
        }

        if (move == false) {
            // @todo create function change direction
            // move = true

            direction = changeDirection(direction);
            move = true;
            // clearInterval(timerId);
        }

        switch (direction) {
            case "top-left":
                move = moveTopLeft(duck, type, imageDuck);
                break;
            case "top-right":
                move = moveTopRight(duck, type, imageDuck);
                break;
            case "right":
                move = moveRight(duck, type, imageDuck);
                break;
            case "left":
                move = moveLeft(duck, type, imageDuck);
                break;
            case "down-left":
                move = moveDownLeft(duck, type, imageDuck);
                break;
            case "down-right":
                move = moveDownRight(duck, type, imageDuck);
                break;
            default:
                move = moveTopLeft(duck, type, imageDuck);
                break;

        }

        // duck.style.left = duck.offsetLeft - 10 + 'px'; //text
        // duck.style.top = duck.offsetTop - 10 + 'px';


    }, 50)
    return timerID;
}

// Повинна повертати top-left чи top-right

function directionStart(duck) {
    let direction = "top-left";
    let body = document.querySelector('body');

    if (duck.offsetLeft <= body.clientWidth / 2) {
        direction = "top-right";
    }

    return direction;
}

// 1. Повертати випадковий напрям руху
// 2. Якщо попередній напрям співпав з новим напрямом, то повторити функцію

function changeDirection(before) {
    let random = getRandomInt(0, 6);
    let direction = null;

    switch (random) {
        case 0:
            direction = "top-right";
            break;
        case 1:
            direction = "top-left";
            break;
        case 2:
            direction = "right";
            break;
        case 3:
            direction = "left";
            break;
        case 4:
            direction = "down-left";
            break;
        case 5:
            direction = "down-right";
            break;
        default:
            direction = "top-left";
            break;

    }


    if (direction == before) {
        changeDirection(before);
    } else {
        return direction;
    }
}

// 1. Функція змінює картинку
// 2. Функція змінює координати
// 3. Прописати перевірку границь

function moveLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - speed + "px";

    if (duck.offsetLeft <= 0) {
        return false;
    }
    return true;
}

function moveRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + speed + "px";

    if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 10) {
        return false;
    }
    return true;
}

function moveTopLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - speed + "px";
    duck.style.top = duck.offsetTop - speed + "px";

    // i = &&. or = ||
    if (duck.offsetLeft <= 10 || duck.offsetTop <= 10) {
        return false;
    }
    return true;
}

function moveTopRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + speed + "px";
    duck.style.top = duck.offsetTop - speed + "px";

    if (duck.offsetLeft + duck.clientWidth >= document.body.clientWidth - 10 || duck.offsetTop <= 10) {
        return false;
    }
    return true;
}

function moveDownRight(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-right/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft + speed + "px";
    duck.style.top = duck.offsetTop + speed + "px";

    if (duck.offsetLeft >= document.body.clientWidth - 10 || duck.offsetTop >= gameArea.clientHeight - 10) {
        return false;
    }
    return true;
}

function moveDownLeft(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-left/" + imageDuck + ".png)";
    duck.style.left = duck.offsetLeft - speed + "px";
    duck.style.top = duck.offsetTop + speed + "px";

    if (duck.offsetLeft <= 10 || duck.offsetTop >= gameArea.clientHeight - 10) {
        return false;
    }
    return true;
}

function moveTop(duck, type, imageDuck) {
    duck.style.backgroundImage = "url(assets/images/duck/" + type + "/top-left/" + imageDuck + ".png)";
    duck.style.top = duck.offsetTop - speed + "px";

    if (duck.offsetTop + duck.clientHeight <= 0) {
        return false;
    }
    return true;
}


console.dir(getRandomInt(0, 100))

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//  1. Коли закінчились кулі, всі качки повинні полетіти вгору - done
//  2. Рахувати кількість врятованих качок - done
//  3. Рахувати кількість поцілених качок - done
//  4. Починати новий рівень
// -створити кулі
// -запустити функцію старт

let next = false;

function nextStep() {
    if (next == false) {
        next = true;
        let ducks = document.querySelectorAll('.duck');
        let ducksDead = document.querySelectorAll('.duck.shot');
        console.dir(ducks);
        if (ducks.length > 0) {
            let i = 0;
            free = ducks.length - ducksDead.length;

            if (free < 0) {
                free = free * -1;
            }

            while (i < ducks.length) {
                let duck = ducks[i];
                free = ducks.length - ducksDead.length;
                let type = 'black';

                if (duck.classList.contains('.red-duck-left')) {
                    type = 'red';
                }

                let move = true;
                clearInterval(duck.dataset.timer);
                let imageDuck = 0;

                let timerID = setInterval(function() {
                    move = moveTop(duck, type, imageDuck);
                    if (imageDuck >= 2) {
                        imageDuck = 0;
                    }
                    imageDuck++;

                    if (move == false) {
                        clearInterval(timerID);
                        duck.remove();

                    }
                }, 30)
                i++;
            } // цикл

        } // якщо є качки
        diedIconDuck();
        freeIconDuck();
        setTimeout(function() {
            next = false;
            nextLevel();

        }, 4000);
    } // next == false
}

function nextLevel() {
    level++;
    start();
}


function diedIconDuck() {
    let i = 0;
    let diedBlock = document.querySelector('.died-ducks-cnt-container')
    diedBlock.innerText = "";

    while (i < dead) {

        let div = document.createElement('div');
        div.className = 'died-duck-icon';

        diedBlock.appendChild(div);
        i++;
    }
}

function freeIconDuck() {
    let i = 0;
    let freeBlock = document.querySelector('.left-ducks-cnt-container')
    freeBlock.innerText = "";

    while (i < free) {

        let div = document.createElement('div');
        div.className = 'left-duck-icon';

        freeBlock.appendChild(div);
        i++;
    }
}

// 1. Виводити рівні в блок wawes-info
// 2. Якщо після закінчення рівня(хвилі) врятованих качок більше ніж вбитих, то виводити to lose
// -message-bar
// 3. Додати звук на політ качки
// 4.Зробити початкову анімацію руху собаки
// 5. Зробити паузу
// 6. Зробити mute
// 7. Зробити fullscreen
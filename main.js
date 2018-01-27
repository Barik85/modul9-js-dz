const LANG = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

const keyboardTemplate = document.querySelector('#keyboard-template').textContent.trim();
console.log(keyboardTemplate);

const compiledKeyboard = _.template(keyboardTemplate);
console.log(compiledKeyboard);

const keyboard = compiledKeyboard(LANG);
console.log(keyboard);

document.body.innerHTML += keyboard;

const buttons = Array.from(document.querySelectorAll(".key"));


const buttonPress = (event) => {
    let key;
    switch (event.code) {
        case "Space":
            key = " ";
            break;
        case "BracketLeft":
            key = "[";
            break;
        case "BracketRight":
            key = "]";
            break;
        case "Semicolon":
            key = ";";
            break;
        case "Quote":
            key = "'";
            break;
        case "Comma":
            key = ",";
            break;
        case "Period":
            key = ".";
            break;
        case "Slash":
            key = "/";
            break;
        default:
            key = event.code.slice(-1).toString().toLowerCase();
    }
    TYPEAREA.textContent += key;
    console.log(key);
    // console.log(event);
    console.log(event.keyCode);
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 219 ||
        event.keyCode == 221 || event.keyCode == 186 || event.keyCode == 222 ||
        event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 191 ||
        event.keyCode == 32 ) {
        buttons.forEach(function (item, i, arr) {
            if (item.innerText == key) {
                flashing(item);
            }
        });
    }
}

window.addEventListener('keydown', buttonPress);


let flashing = function (element) {
    element.classList.add('key-active');
    setTimeout(() => { element.classList.remove('key-active') }, 500);
}

const keyboardWindow = document.querySelector('.keyboard');

const TYPEAREA = document.createElement('pre');
TYPEAREA.classList.add('type-area');
keyboardWindow.before(TYPEAREA);

const typing = (event) => {
    let symbol = event.target.innerText;
    console.log(symbol);
    if (event.target.classList.contains('key')) {
        TYPEAREA.textContent += symbol;

    }
};
keyboardWindow.addEventListener('click', typing);
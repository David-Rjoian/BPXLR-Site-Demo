let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light_mode.css") {
        theme.href = "dark_mode.css";
    } else {
        theme.href = "light_mode.css";
    };
};

// Menu
let logo = document.getElementById('logo');
let menu = document.getElementById('menu')
let music = document.getElementById('music')
let merch = document.getElementById('merch')
let events = document.getElementById('events')

let musicLink = document.getElementById('musicLink')
let merchLink = document.getElementById('merchLink')
let eventsLink = document.getElementById('eventsLink')

logo.onclick = function () {
    menu.style.display = 'flex';
    music.style.display = 'none';
    merch.style.display = 'none';
    events.style.display = 'none';
}

musicLink.onclick = function () {
    menu.style.display = 'none';
    music.style.display = 'flex';
    merch.style.display = 'none';
    events.style.display = 'none';
}

merchLink.onclick = function () {
    menu.style.display = 'none';
    music.style.display = 'none';
    merch.style.display = 'flex';
    events.style.display = 'none';
}

eventsLink.onclick = function () {
    menu.style.display = 'none';
    music.style.display = 'none';
    merch.style.display = 'none';
    events.style.display = 'flex';
}
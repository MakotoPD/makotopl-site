

const desktop = document.getElementsByClassName("desktop");
const mobile = document.getElementsByClassName("mobile");
const mobile_menu = document.getElementsByClassName("mobile_menu");
const nav = document.getElementsByTagName("nav");
const circle = document.getElementsByClassName("circle");
const path = document.getElementsByTagName("path");
const why_me = document.getElementsByClassName("why_me");
const object = document.getElementsByTagName("object");
const start = document.getElementById("start");
const kontakt = document.getElementsByClassName("kontakt");
const button_contact = document.getElementsByClassName("button_contact");
const logo = document.getElementsByClassName("logo");
const zamowienie = document.getElementsByClassName("zamowienie");
const body = document.getElementsByTagName("body");
const bottom_menu = document.getElementsByClassName("bottom_menu");
const quick_btn = document.getElementsByClassName("quick_btn");
const scroll = document.getElementsByClassName("scroll");


let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementsByClassName("night_mode_btn");


const enableDarkMode = () => {
    
    for (let i = 0; i < body.length; i++) {
    body[i].classList.add('night_mode');
    }

    for (let i = 0; i < desktop.length; i++) {
    desktop[i].classList.add('night_mode');
    }

    for (let i = 0; i < mobile.length; i++) {
        mobile[i].classList.add('night_mode'); 
    }

    for (let i = 0; i < mobile_menu.length; i++) {
        mobile_menu[i].classList.add('night_mode');
    }

    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.add('night_mode');
    }
    for (let i = 0; i < circle.length; i++) {
    circle[i].classList.add('night_mode');
    }
    for (let i = 0; i < path.length; i++) {
    path[i].classList.add('night_mode');
    }
    for (let i = 0; i < why_me.length; i++) {
    why_me[i].classList.add('night_mode');
    }
    for (let i = 0; i < bottom_menu.length; i++) {
        bottom_menu[i].classList.add('night_mode');
    }
    for (let i = 0; i < object.length; i++) {
    object[i].setAttribute("style", "filter: invert(0.5);");
    }
    for (let i = 0; i < scroll.length; i++) {
    scroll[i].setAttribute("style", "filter: invert(0.5);");
    }
    start.setAttribute("style", "background-image:url('../img/bryly I.png');");
    for (let i = 0; i < kontakt.length; i++) {
    kontakt[i].setAttribute("style", "background: linear-gradient(45deg, #01473c 0%, #01473c 100%);");
    }
    for (let i = 0; i < button_contact.length; i++) {
    button_contact[i].setAttribute("style", "color: #8fb7c7; border:solid 3px #9fc9da;");
    }
    for (let i = 0; i < logo.length; i++) {
    logo[i].setAttribute("src","../img/Logo gradient.png");
    }
    for (let i = 0; i < zamowienie.length; i++) {
    zamowienie[i].setAttribute("style", "background: linear-gradient(to bottom, #0091ca 0%, #00518a 100%);")
    }
    for (let i = 0; i < quick_btn.length; i++) {
    quick_btn[i].setAttribute("style", " background: linear-gradient(to top, #0091ca 0%, #00e4e4 100%);")
    }

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    
    for (let i = 0; i < body.length; i++) {
    body[i].classList.remove('night_mode');
    }

    for (let i = 0; i < desktop.length; i++) {
    desktop[i].classList.remove('night_mode');
    }

    for (let i = 0; i < mobile.length; i++) {
        mobile[i].classList.remove('night_mode'); 
    }

    for (let i = 0; i < mobile_menu.length; i++) {
        mobile_menu[i].classList.remove('night_mode');
    }

    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove('night_mode');
    }
    for (let i = 0; i < circle.length; i++) {
    circle[i].classList.remove('night_mode');
    }
    for (let i = 0; i < path.length; i++) {
    path[i].classList.remove('night_mode');
    }
    for (let i = 0; i < why_me.length; i++) {
    why_me[i].classList.remove('night_mode');
    }
    for (let i = 0; i < bottom_menu.length; i++) {
        bottom_menu[i].classList.remove('night_mode');
    }
    for (let i = 0; i < object.length; i++) {
    object[i].setAttribute("style", "filter: invert(.2);");
    }
    for (let i = 0; i < scroll.length; i++) {
    scroll[i].setAttribute("style", "filter: invert(1);");
    }
    start.setAttribute("style", "background-image:url('../img/bryly.png');");
    for (let i = 0; i < kontakt.length; i++) {
    kontakt[i].setAttribute("style", "background: linear-gradient(45deg, #00999d 0%, #00ff97 100%);");
    }
    for (let i = 0; i < button_contact.length; i++) {
    button_contact[i].setAttribute("style", "color: #fff; border:solid 3px #fff;");
    }
    for (let i = 0; i < logo.length; i++) {
    logo[i].setAttribute("src", "../img/Logo biale.png");
    }
    for (let i = 0; i < zamowienie.length; i++) {
    zamowienie[i].setAttribute("style", "background: linear-gradient(to bottom, #00e4e4 0%, #0091ca 100%);")
    }
    for (let i = 0; i < quick_btn.length; i++) {
    quick_btn[i].setAttribute("style", "background: linear-gradient(to top, #00999d 0%, #00ff97 100%);")
    }

    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

for (let i = 0; i < darkModeToggle.length; i++) {
    darkModeToggle[i].addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");

        if (darkMode !== 'enabled') {
            enableDarkMode();
            console.log(darkMode)
        } else {
            disableDarkMode();
            console.log(darkMode)
        }
    })
}


if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');
  }

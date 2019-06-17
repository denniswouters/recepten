// Store
//localStorage.setItem("lastname", "Smith");

// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");


window.onload = onloadd;

var text;
var side;

function tekstballon(text, side) {
    var ballon = document.createElement('span');
    ballon.setAttribute('class', 'bubble');
    var mattiechat = document.getElementById('chatBox');
    mattiechat.appendChild(ballon);

    ballon.innerHTML = text;

    if (side == 'bot') {
        ballon.className += ' bot';

    } else if (side == 'me') {
        ballon.className += ' me';

    }
}


function onloadd() {
    tekstballon('Hey daar, ik ben Mattie! Jouw virtuele assistent bij een glutenvrij leven.', 'bot');
    var timeout = setTimeout(function () {
        tekstballon('Om jou het beste te kunnen helpen, heb ik nog wat gegevens van je nodig.', 'bot');
    }, 1000);
    var timeout = setTimeout(function () {
        tekstballon('Wat is je voornaam?', 'bot');
    }, 2000);
}


$(document).ready(function () {
    $("#input").keypress(function (event) {
        if (event.which == 13 && $("input").val() != "") {
            sendMessage();
        }
    });
    $("#rec").click(function () {
        if (event.which == 13 && $("input").val() != "") {
            sendMessage();
        }
    });
});

function sendMessage() {
    localStorage.setItem('naam', $('input').val());
    tekstballon(localStorage.getItem('naam'), 'me');
    var text = (localStorage.getItem('naam'));
    controle(input=text);
}

function controle(input) {
    console.log(input);
    var timeout = setTimeout(function () {
        tekstballon('Hallo ' + input +'! Is dit je correcte naam?', 'bot');
    }, 1000);
}





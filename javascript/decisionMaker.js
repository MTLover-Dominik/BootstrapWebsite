import * as config from "./settings.js";

let countDecisions;
let arrayForInputs = [];
let randomNumber;

function setInputValues() {
    if (config.doesInputCardsExist === true) {
        arrayForInputs[0] = document.getElementById('firstInput').value;
        arrayForInputs[1] = document.getElementById('secondInput').value;
        arrayForInputs[2] = document.getElementById('thirdInput').value;
        arrayForInputs[3] = document.getElementById('fourthInput').value;
        arrayForInputs[4] = document.getElementById('fifthInput').value;
    }
}

export function setupMechanisms () {
    setInputValues();
    setInputValues();
    getNumberValue();
    setWinningDecision();
}

function gettingElement() {
    countDecisions = document.getElementById('numberOfDecisions').value;
    getNumberValue();
    if (countDecisions === '5') {
        setInput1();
        setInput2();
        setInput3();
        setInput4();
        setInput5();
    }
    if (countDecisions === '4') {
        setInput1();
        setInput2();
        setInput3();
        setInput4();
        hideInput5();
    }
    if (countDecisions === '3') {
        setInput1();
        setInput2();
        setInput3();
        hideInput4();
        hideInput5();
    }
    if (countDecisions === '2') {
        setInput1();
        setInput2();
        hideInput3();
        hideInput4();
        hideInput5()
    }
    if (countDecisions === '1') {
        setInput1();
        hideInput2();
        hideInput3();
        hideInput4();
        hideInput5();
    }
}

if (config.doesDecisonNumberExist === true) {
    config.decisionNumber.addEventListener('change', gettingElement , false)
}

function setWinningDecision () {
    config.winnerText.innerHTML = "Der Decision-Maker weissagt:<br/>Die Entscheidung fällt auf: <b><u>" + arrayForInputs[randomNumber] + "</u></b>";
}

function getNumberValue() {
    randomNumber = Math.floor(Math.random() * countDecisions);
}



function setInput1 () {
    config.inputField1.setAttribute('style', 'display: flex');
}

function setInput2 () {
    config.inputField2.setAttribute('style', 'display: flex');
}

function hideInput2 () {
    config.inputField2.setAttribute('style', 'display: none');
}

function setInput3 () {
    config.inputField3.setAttribute('style', 'display: flex');
}

function hideInput3 () {
    config.inputField3.setAttribute('style', 'display: none');
}

function setInput4 () {
    config.inputField4.setAttribute('style', 'display: flex');
}

function hideInput4 () {
    config.inputField4.setAttribute('style', 'display: none');
}

function setInput5 () {
    config.inputField5.setAttribute('style', 'display: flex');
}

function hideInput5 () {
    config.inputField5.setAttribute('style', 'display: none');
}

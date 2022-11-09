let buttonHomepage = document.getElementById('myButton');
let isDarkModeOn = false;
let darkModeChanger = document.getElementById('modeChanger');

let siteHeader = document.getElementById('header');
let siteFooter = document.getElementById('footer');
let navigationBar = document.getElementById('navigationBar');
let contentContainer = document.getElementById('contentContainer');
let spaces = document.getElementsByClassName('breaks');
let cardList = document.getElementsByClassName('listOfCards');
let breadCrumb = document.getElementsByClassName('breadcrumbsDiv');


darkModeChanger.addEventListener('click', changeToDarkmode);

function changeToDarkmode () {
    if (isDarkModeOn === false) {
        isDarkModeOn = true;
        siteHeader.style.backgroundColor = '#838282';
        siteFooter.style.backgroundColor = '#838282';
        contentContainer.style.backgroundColor = '#838282';
        navigationBar.setAttribute('style', 'background-color: #7D7B7B !important');
        document.body.style.backgroundColor = '#C7C5C5';
        for (let i = 0; i < spaces.length; i++) {
            spaces[i].style.backgroundColor = '#838282';
        }
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].style.backgroundColor = '#838282';
        }
        for (let i = 0; i < breadCrumb.length; i++) {
            breadCrumb[i].style.backgroundColor = '#C7C5C5';
        }
        darkModeChanger.setAttribute('src', 'images/lightmode.png');
        return
    }
    if (isDarkModeOn === true) {
        isDarkModeOn = false;
        siteHeader.style.backgroundColor = 'white';
        siteFooter.style.backgroundColor = 'white';
        contentContainer.style.backgroundColor = 'white';
        navigationBar.setAttribute('style', 'background-color: #F8F9FA !important');
        document.body.style.backgroundColor = 'white';
        for (let i = 0; i < spaces.length; i++) {
            spaces[i].style.backgroundColor = 'white';
        }
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].style.backgroundColor = 'white';
        }
        for (let i = 0; i < breadCrumb.length; i++) {
            breadCrumb[i].style.backgroundColor = 'white';
        }
        darkModeChanger.setAttribute('src', 'images/nightmode.png');
    }
}

buttonHomepage.addEventListener( 'click' , ALARM );

function ALARM () {
    window.alert('I Bims \n Un du bimst nun gehackt!');
}
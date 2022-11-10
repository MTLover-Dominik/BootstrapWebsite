let doesHomepageButtonExist = !!document.getElementById('myButton');
let doesInfoAndHeadlineExist = !!document.getElementById('headlineAndInfo');

let buttonHomepage = document.getElementById('myButton');
let infoAndHeadline = document.getElementById('headlineAndInfo');
let siteHeader = document.getElementById('header');
let siteFooter = document.getElementById('footer');
let navigationBar = document.getElementById('navigationBar');
let contentContainer = document.getElementById('contentContainer');

let spaces = document.getElementsByClassName('breaks');
let cardList = document.getElementsByClassName('listOfCards');
let breadCrumb = document.getElementsByClassName('breadcrumbsDiv');
let pages = document.getElementsByClassName('pagination');

const darkModeChanger = document.getElementById("modeChanger");
let darkMode = localStorage.getItem("dark-mode");


const enableDarkMode = () => {
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
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.backgroundColor = '#838282';
    }
    if (doesInfoAndHeadlineExist === true) {
        infoAndHeadline.style.backgroundColor = '#838282';
        console.log('headlineAndInfo ist vorhanden');
    }
    darkModeChanger.setAttribute('src', 'images/lightmode.png');
    localStorage.setItem("dark-mode", "enabled");
};


const disableDarkMode = () => {
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
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.backgroundColor = 'white';
    }
    if (doesInfoAndHeadlineExist === true) {
        infoAndHeadline.style.backgroundColor = 'white';
        console.log('headlineAndInfo ist vorhanden');
    }
    darkModeChanger.setAttribute('src', 'images/nightmode.png');
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeChanger.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
        return
    }
    if (darkMode === "enabled") {
        disableDarkMode();
    }
});

if (doesHomepageButtonExist === true) {
    buttonHomepage.addEventListener( 'click' , ALARM );
}

function ALARM () {
    window.alert('I Bims \n Un du bimst nun gehackt!');
}


//modal for pictures --> Still working

/*function modalAppearance() {
    modal.style.display = "flex";
    modalText.innerHTML = "You Lost! You ate " + appleCounter + " Apples. <br> The size of your snake was: " + size + ".<br> You died because of: " + deathReason;
    modalCloseButton.onclick = function () {
        modal.style.display = "none";
    }
    modalResetButton.onclick = function () {
    }
}*/
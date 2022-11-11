let doesHomepageButtonExist = !!document.getElementById('myButton');
let doesInfoAndHeadlineExist = !!document.getElementById('headlineAndInfo');
let doesHeaderExist = !!document.getElementById('header');
let doesFooterExist = !!document.getElementById('footer');
let doesNavBarExist = !!document.getElementById('navigationBar');
let doesContentContainerExist = !!document.getElementById('contentContainer');
let doesSpacesExist = !!document.getElementsByClassName('breaks');
let doesCardlistExist = !!document.getElementsByClassName('listOfCards');
let doesBreadcrumbsExist = !!document.getElementsByClassName('breadcrumbsDiv');
let doesPagesExist = !!document.getElementsByClassName('pagination');
let doesDarkmodeChangerExist = !!document.getElementById('modeChanger');
let doesSearchpageHeadline = !!document.getElementById('searchHeadline');

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

let headLine = document.getElementById('searchHeadline');

const darkModeChanger = document.getElementById("modeChanger");
let darkMode = localStorage.getItem("dark-mode");


const enableDarkMode = () => {
    if (doesHeaderExist === true) {
        siteHeader.style.backgroundColor = '#838282';
    }
    if (doesFooterExist === true) {
        siteFooter.style.backgroundColor = '#838282';
    }
    if (doesContentContainerExist === true) {
        contentContainer.style.backgroundColor = '#838282';
    }
    if (doesNavBarExist === true) {
        navigationBar.setAttribute('style', 'background-color: #7D7B7B !important');
    }
    document.body.style.backgroundColor = '#C7C5C5';
    if (doesSpacesExist === true) {
        for (let i = 0; i < spaces.length; i++) {
            spaces[i].style.backgroundColor = '#838282';
        }
    }
    if (doesCardlistExist === true) {
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].style.backgroundColor = '#838282';
        }
    }
    if (doesBreadcrumbsExist === true) {
        for (let i = 0; i < breadCrumb.length; i++) {
            breadCrumb[i].style.backgroundColor = '#C7C5C5';
        }
    }
    if (doesPagesExist === true) {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.backgroundColor = '#838282';
        }
    }
    if (doesInfoAndHeadlineExist === true) {
        infoAndHeadline.style.backgroundColor = '#838282';
    }
    if (doesDarkmodeChangerExist === true) {
        darkModeChanger.setAttribute('src', 'images/lightmode.png');
    }
    if (doesSearchpageHeadline === true) {
        headLine.style.color = 'black';
    }
    localStorage.setItem("dark-mode", "enabled");
};


const disableDarkMode = () => {
    if (doesHeaderExist === true) {
        siteHeader.style.backgroundColor = 'white';
    }
    if (doesFooterExist === true) {
        siteFooter.style.backgroundColor = 'white';
    }
    if (doesContentContainerExist === true) {
        contentContainer.style.backgroundColor = 'white';
    }
    if (doesNavBarExist === true) {
        navigationBar.setAttribute('style', 'background-color: #F8F9FA !important');
    }
    document.body.style.backgroundColor = 'white';
    if (doesSpacesExist === true) {
        for (let i = 0; i < spaces.length; i++) {
            spaces[i].style.backgroundColor = 'white';
        }
    }
    if (doesCardlistExist === true) {
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].style.backgroundColor = 'white';
        }
    }
    if (doesBreadcrumbsExist === true) {
        for (let i = 0; i < breadCrumb.length; i++) {
            breadCrumb[i].style.backgroundColor = 'white';
        }
    }
    if (doesPagesExist === true) {
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.backgroundColor = 'white';
        }
    }
    if (doesInfoAndHeadlineExist === true) {
        infoAndHeadline.style.backgroundColor = 'white';
    }
    if (doesDarkmodeChangerExist === true) {
        darkModeChanger.setAttribute('src', 'images/nightmode.png');
    }
    if (doesSearchpageHeadline === true) {
        headLine.style.color = 'white';
    }
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

//API TestArea

const doesSearchResultsExist = !!document.getElementById('root');

if (doesSearchResultsExist === true) {
    const app = document.getElementById('root')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    let request = new XMLHttpRequest()
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function () {
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const h1 = document.createElement('h1')
                h1.textContent = movie.title
                h1.setAttribute('class', 'movieTitle');

                const p = document.createElement('p')
                movie.description = movie.description.substring(0, 300)
                p.textContent = `${movie.description}...`

                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(p)
            })
        }
        if (request.status < 200 || request.status >= 400){
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
    }

    request.send()
}

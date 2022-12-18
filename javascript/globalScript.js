import * as config from "./settings.js";
import {getDarkMode} from "./moduleDarkmode.js";
import {setupMechanisms} from "./decisionMaker.js";

if (config.doesDarkmodeChangerExist === true) {
    config.darkModeChanger.addEventListener("click", getDarkMode, false);
}

if (config.doesHomepageButtonExist === true) {
    config.buttonHomepage.addEventListener( 'click' , ALARM );
}

function ALARM () {
    window.alert('I Bims \n Un du bimst nun gehackt!');
}

if (config.doesBestaetigenButtonExist === true) {
    config.bestaetigenButton.addEventListener('click', setupMechanisms, false);
}

//Monitor navigationbar and add a sticky navigationbar

//doesNumbersExist();   //funktion zur abfrage ob element existiert



//API TestArea

if (config.doesSearchResultsExist === true) {
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

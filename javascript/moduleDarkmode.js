import * as config from "./settings.js";



let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    if (config.doesHeaderExist === true) {
        config.siteHeader.style.backgroundColor = '#838282';
    }
    if (config.doesFooterExist === true) {
        config.siteFooter.style.backgroundColor = '#838282';
    }
    if (config.doesContentContainerExist === true) {
        config.contentContainer.style.backgroundColor = '#838282';
    }
    if (config.doesNavBarExist === true) {
        config.navigationBar.setAttribute('style', 'background-color: #7D7B7B !important');
    }
    document.body.style.backgroundColor = '#C7C5C5';
    if (config.doesSpacesExist === true) {
        for (let i = 0; i < config.spaces.length; i++) {
            config.spaces[i].style.backgroundColor = '#838282';
        }
    }
    if (config.doesCardlistExist === true) {
        for (let i = 0; i < config.cardList.length; i++) {
            config.cardList[i].style.backgroundColor = '#838282';
        }
    }
    if (config.doesBreadcrumbsExist === true) {
        for (let i = 0; i < config.breadCrumb.length; i++) {
            config.breadCrumb[i].style.backgroundColor = '#C7C5C5';
        }
    }
    if (config.doesPagesExist === true) {
        for (let i = 0; i < config.pages.length; i++) {
            config.pages[i].style.backgroundColor = '#838282';
        }
    }
    if (config.doesInfoAndHeadlineExist === true) {
        config.infoAndHeadline.style.backgroundColor = '#838282';
    }
    if (config.doesDarkmodeChangerExist === true) {
        config.darkModeChanger.setAttribute('src', 'images/lightmode.png');
    }
    if (config.doesSearchpageHeadline === true) {
        config.headLine.style.color = 'black';
    }
    localStorage.setItem("dark-mode", "enabled");
};


const disableDarkMode = () => {
    if (config.doesHeaderExist === true) {
        config.siteHeader.style.backgroundColor = 'white';
    }
    if (config.doesFooterExist === true) {
        config.siteFooter.style.backgroundColor = 'white';
    }
    if (config.doesContentContainerExist === true) {
        config.contentContainer.style.backgroundColor = 'white';
    }
    if (config.doesNavBarExist === true) {
        config.navigationBar.setAttribute('style', 'background-color: #F8F9FA !important');
    }
    document.body.style.backgroundColor = 'white';
    if (config.doesSpacesExist === true) {
        for (let i = 0; i < config.spaces.length; i++) {
            config.spaces[i].style.backgroundColor = 'white';
        }
    }
    if (config.doesCardlistExist === true) {
        for (let i = 0; i < config.cardList.length; i++) {
            config.cardList[i].style.backgroundColor = 'white';
        }
    }
    if (config.doesBreadcrumbsExist === true) {
        for (let i = 0; i < config.breadCrumb.length; i++) {
            config.breadCrumb[i].style.backgroundColor = 'white';
        }
    }
    if (config.doesPagesExist === true) {
        for (let i = 0; i < config.pages.length; i++) {
            config.pages[i].style.backgroundColor = 'white';
        }
    }
    if (config.doesInfoAndHeadlineExist === true) {
        config.infoAndHeadline.style.backgroundColor = 'white';
    }
    if (config.doesDarkmodeChangerExist === true) {
        config.darkModeChanger.setAttribute('src', 'images/nightmode.png');
    }
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

export function getDarkmode () {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
        return
    }
    if (darkMode === "enabled") {
        disableDarkMode();
    }
}

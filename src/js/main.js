import fullpage from './fullpage';

class MainPage {
    constructor() {
        this.fullPageContainer = $('#fullpage');
        this.menuItem = $('#menu').find('li');
        this.init();
    }

    init() {
        this.initFullPagePlugin();
        this.handleNavClick();
        this.handleTopNavClick();
        this.hidePreloader()
    }

    hidePreloader() {
        $('#preloader').hide();
    }

    handleTopNavClick() {
        $('#main-link, #logo').on('click', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveTo('home');
        })
    }

    handleNavClick() {
        this.menuItem.on('click', (e)=> {
            e.preventDefault();
            var anchor = $(e.target).closest('li').attr('data-menuanchor');
            $.fn.fullpage.moveTo(anchor);
        });
    }

    initFullPagePlugin() {
        this.fullPageContainer.fullpage({
            //Navigation
            menu: '#menu',
            lockAnchors: true,
            anchors: ['home', 'about', 'skills', 'contacts'],
            scrollingSpeed: 700,
            verticalCentered: false,
            touchSensitivity: 5,
            sectionsColor: ['#edb336', 'rgb(75, 181, 234)', 'rgb(250,113,94)', 'rgb(76,214,188)'],
            sectionSelector: '.section'
        });
    }
}

$(document).ready(function () {
    new MainPage();
});
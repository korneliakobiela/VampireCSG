/**
 * Created by kornelia on 27.08.16.
 */
const remote = require('electron').remote;


var events = {
    /**
     * Getting buttons from HTML document
     * @param parent {string} Parent node name or id or class. If no param function return all buttons
     * @returns {NodeList} all buttons of parent
     */
    getButtons: function (parent) {
        parent = parent || '';
        var query = parent + ' button';
        return document.querySelectorAll(query);
    },
    /**
     * Event handler of main menu.
     */
    menuButtonHandler: function () {
        var buttons = this.getButtons('nav');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                document.querySelector('.active').classList.toggle('active', false);
                this.classList.toggle('active', true);
                switch (this.id) {
                    case 'random':
                        document.querySelector('#personal-form').style.display = 'none';
                        break;
                    case 'personal':
                        document.querySelector('#personal-form').style.display = 'block';
                        break;
                    default:
                        console.log('Unknown button clicked');
                }
            })
        }
    },
    /**
     * Event for close main window
     */
    closeProgram: function () {
        var closeEl = document.querySelector('#exit');
        closeEl.addEventListener('click', function () {
            var window = remote.getCurrentWindow();
            window.close();
        });
    }

};


module.exports = events;
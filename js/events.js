/**
 * Created by kornelia on 27.08.16.
 */
var events = {
    getButtons: function (parent) {
        parent = parent || '';
        var query = parent + ' button';
        return document.querySelectorAll(query);
    },

    menuButtonsChange: function () {
        var buttons = this.getButtons('header');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i] = buttons[i].id;
            buttons[i].addEventListener('click', function () {
                document.querySelector('.active').classList.toggle('active', false);
                this.classList.toggle('active', true);
            })
        }

    }
};


events.menuButtonsChange();
module.exports = events;
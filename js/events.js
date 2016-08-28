/**
 * Created by kornelia on 27.08.16.
 */
const  remote= require('electron').remote;


var events = {
    getButtons: function (parent) {
        parent = parent || '';
        var query = parent + ' button';
        return document.querySelectorAll(query);
    },

    menuButtonsChange: function () {
        var buttons = this.getButtons('nav');
        console.log(buttons);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i] = buttons[i].id;
            buttons[i].addEventListener('click', function () {
                document.querySelector('.active').classList.toggle('active', false);
                this.classList.toggle('active', true);
                switch (this.id){

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
   closeProgram: function () {
       var closeEl = document.querySelector('#exit');
       closeEl.addEventListener('click', function () {
           var window = remote.getCurrentWindow();
           window.close();
       });
   }
};

(function () {
    events.menuButtonsChange();
    events.closeProgram();
})();

module.exports = events;
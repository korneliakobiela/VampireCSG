var userdata = {

    /**
     * A Constructor for basic user form used to generate random character.
     * @param cname - character name
     * @param player - players name
     * @param chronicle - chronicle name
     * @param nature - nature of vampier
     * @param demeanor - demeanor of character
     * @param clan - clan of character
     * @param generation
     * @param haven
     * @param concept
     * @constructor
     */
    PlayerInput: function(cname, player, chronicle, nature, demeanor, clan, generation, haven, concept) {
        this.cname = cname || '';
        this.player = player || '';
        this.chronicle = chronicle || '';
        this.nature = nature || '';
        this.demeanor = demeanor|| '';
        this.clan = clan || '';
        this.generation = generation || '';
        this.haven = haven || '';
        this.concept = concept || '';
    },
    setRangeInput: function () {
        var input = document.querySelectorAll('input[type=range]');
        for(var i = 0; i<input.length;i++){
            input[i].min = 0;
            input[i].max = 5;
            if(input[i].parentNode.id == "attributes"){
                input[i].value = 1;
            }else if(input[i].parentNode.id == "abilities") {
                input[i].value = 0;
            }
        }
        return input;
    }



};

module.exports = userdata;
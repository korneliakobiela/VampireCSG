var userdata = {

    /**
     *
     * @param cname - character name
     * @param player -
     * @param chronicle
     * @param nature
     * @param demeanor
     * @param clan
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
    }


};

module.exports = userdata;
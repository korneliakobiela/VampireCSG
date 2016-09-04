/**
 * Created by kornelia on 27.08.16.
 */
var expect = require('chai').expect;
var should = require('chai').should();
var UserData = require('../js/userdata.js');

describe("UserData", function () {
    it('Module should exists', function () {
        expect(UserData).to.not.be.undefined;
    });
    describe("#PlayerInput()", function () {
        it('should exists', function () {
            var player = new UserData.PlayerInput();
            expect(player).to.not.be.undefined;
        });
        it('should return an object', function () {
            var player = new UserData.PlayerInput();
            expect(player).to.be.a('object');
        });
        it('should return PlayerInput object with values', function () {
            var playerinput = new UserData.PlayerInput('a','a','a','a','a','a','a','a','a');
            var expected = {
                cname : 'a',
                player: 'a',
                chronicle: 'a',
                nature: 'a',
                demeanor: 'a',
                clan: 'a',
                generation: 'a',
                haven: 'a',
                concept: 'a'
            };

            expect(playerinput).to.eql(expected);
        });
        it('should have default params',function () {
            var player = new UserData.PlayerInput();
            var defaultparam = new UserData.PlayerInput('','','','','','','','','');

            expect(player).to.eql(defaultparam)
        });
    });
    describe('setRangeInput()',function () {
        it('should exists', function () {
            var range = UserData.setRangeInput();
            should.exist(range);
        });
    });


});
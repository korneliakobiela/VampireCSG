/**
 * Created by kornelia on 29.08.16.
 */
var expect = require('chai').expect;
var events = require('../js/events.js');

describe("events", function () {
    it('Module should exists', function () {
        expect(events).to.not.be.undefined;
    });
    describe('#getButtons()', function () {
        it('Function should exists', function () {
            expect(events.getButtons()).to.not.be.undefined;
        });
        it('Function without parameter should return return node list', function () {
            var buttons = events.getButtons();
            expect(NodeList.prototype.isPrototypeOf(buttons)).to.equal(true);
        });
        it('Function with parameter should return return node list', function () {
            var buttons = events.getButtons('nav');
            expect(NodeList.prototype.isPrototypeOf(buttons)).to.equal(true);
        });
    });

});
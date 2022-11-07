var expect = require("chai").expect;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var request = require("request");
chai.should();
chai.use(sinonChai);

var getUsers = require('../get_users.js');

describe('GetUsers Tests', function() {
    it('Can call getUsers', function() {
        var spy = sinon.spy();
        getUsers(spy);
    });

    it('Calls the callback', function() {
        var spy = sinon.spy();
        getUsers.spy;
        spy.should.have.been.calledOnce;
    });
});
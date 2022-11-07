var expect = require("chai").expect;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var request = require("request");
chai.should();
chai.use(sinonChai);

var getUsers = require('../get_users.js');

describe('GetUsers Test', function() {
    it('Can call getUsers', function() {
        getUsers();
    })
});
// contract test code will go here
const assert = require('assert');
const {expect} = require('chai');
// Ethereum test network
const ganache = require('ganache-cli');
// how to communicate our code with that.
const Web3 = require('web3')

const localNetworkProvider = ganache.provider();
const web3 = new Web3(localNetworkProvider)

describe ('Inbox Contract tests', () => {
    let accountToDeploy, accounts
    beforeEach(async () => {
        // Get a list of all accounts
        accounts = await web3.eth.getAccounts();
    })
    it( 'obtain accounts from web3', () => {
       expect(accounts.length > 0).to.be.true;
    })
    it( 'with an account we deploy a contract', () => {})
})
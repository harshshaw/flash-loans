const { expect } = require('chai');
const { ethers } = require('hardhat');
const tokens = (n) => {
    return ethers.util.parseUnits(n.toString(), 'ether');
}

const ether = tokens;

describe('flashLoan', () => {
    beforeEach(async () => {
        //Setup accounts
        accounts = await ethers.getSigner();
        deployer = accounts[0];

        //Load Accounts
        const FlashLoan = await ethers.getContractFactory('FlashLoan');
        const FlashLoanReceiver = await ethers.getContractFactory('FlashLoanReceiver');
        const Token = await ethers.getContractFactory('Token');
        //Deploy Token
        const token = await Token.deploy('Dapp university', 'DAPP', '1000000');
        //Deploy FlashLoan
        const flashLoan = await FlashLoan.deploy(token.address);
    })

    describe('Deployment', () => {
        it('works', () => {
            expect(1 + 1).to.equal(2);
        })
    })
})
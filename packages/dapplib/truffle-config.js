require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain hole heavy kite surge shield'; 
let testAccounts = [
"0xfb9b2f541f6b7307132816c82af47000df1fd73ebf14204b7213adb0e117d25a",
"0x3e58bd0eb93d1f3e0e3c1cb995c6cf7cf296d5668c970ad7bcac9ca0f04bd860",
"0x2f800a7b1719286d0748315a5f17146a5a641e3ff617dc8eaea1f3a28a11a60c",
"0x5eac15897e6200c1da2d3fadc694cc1c6d3e969901cf7002c5262435f73f0d97",
"0xd4133ff1c5b63bedf2d6e2985779b1b00c672e4448ec184a4def92660b7c0771",
"0xfd9032d16abfeb64ea26c9c353c320e82e7fb977e68507c82fee7bf66ebb04af",
"0xc1536a56566d20358ee9f30f690966dbacec31d25e247dbd7f9159c4ca5ea0fb",
"0x12d604f2da1bec86ec9bf1b07fbe38b146404ca9ac9e8b99f24b0a0d90250788",
"0xe5f9b9683e5da22d12a87b814daec4607596d3ecb0c666383514ca7dbd3c9967",
"0x4971e4c5ed2ef4dab2a93c79d6d6c59c459d03c714b59bdc884f2898ba1af5f1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


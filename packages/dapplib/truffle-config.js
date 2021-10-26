require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard recipe night eternal grace dry equal gift'; 
let testAccounts = [
"0xaf4e96d35f9dcbd1c2958f9c1cdbc12d057f0d0e312a286ec6e1bcf1154a2ec5",
"0x01b39f93743ec313be1d741a7e6ad592340e31b67eb1029d4b8b72e20e0284f9",
"0xa8633f43afaf8cb60a027e1e1891c672adeca93574628cff749a310178e8b4ee",
"0xe2f0da08058723b490e71e78e3e14715bc66d0170a9787119584e50c28a50603",
"0xe44dbe7919075cb7a39b936306a3b4f2f9ce62812070c36e80f7091dd5d99d6c",
"0xc460268b714d011c01edef86f22f8ad81cd6dc5b7eee092e348efa32ed9e392d",
"0xe3e590ddff9bc7bbaf292be9341c13badde28c41fa9a52a392618248d16ab232",
"0xc8d10713df23dd441acaa2f8eae76f171bcbe11b270e25522ce530c38f7fff5b",
"0x7b6414d538c84b25df9d781fd45b1ea2cc79ae565ba9e0d2bfca8b48b75af344",
"0xa82086168b96da8be363c04c18ab457be9b956fa22f60176685a6d69664a0a8b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



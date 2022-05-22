require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.11',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/GX9Kw_O2Lf5VWqljSaCvTDbGwsJRlsaP',
      accounts: [
        'd627de5b92408e38a95b201b060bedb581af49aad2a0264661b057516b33fe85',
      ],
    },
  },
}
// 0x0f6B102318ec27fFEDC66Bc92B470468aF029096
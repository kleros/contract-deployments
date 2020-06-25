const NetworkIds = require('../util/network-ids');
const abi = require('../abis/LinguoToken.json');

module.exports = {
  contractName: 'LinguoToken',
  abi,
  networks: {
    [NetworkIds.KOVAN]: {
      address: '0x85f04B5251369606192F1ebC7072161F66E1Fe49',
    },
  },
};

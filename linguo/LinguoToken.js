const NetworkIds = require('../util/network-ids');
const abi = require('../abis/LinguoToken.json');

module.exports = {
  contractName: 'LinguoToken',
  abi,
  networks: {
    [NetworkIds.KOVAN]: {
      address: '0x74a45009e6E9A42705b477786F7Dc5405601077d',
    },
  },
};

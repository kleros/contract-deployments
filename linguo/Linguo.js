const NetworkIds = require('../util/network-ids');
const abi = require('../abis/Linguo.json');

module.exports = {
  contractName: 'Linguo',
  abi,
  networks: {
    [NetworkIds.KOVAN]: {
      address: '0x75c02D159C88B676172b884430Cfb007E17eD4Bd',
    },
  },
};

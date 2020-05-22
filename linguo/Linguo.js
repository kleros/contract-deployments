const NetworkIds = require('../util/network-ids');
const abi = require('../abis/Linguo.json');

module.exports = {
  contractName: 'Linguo',
  abi,
  networks: {
    [NetworkIds.KOVAN]: {
      address: '0x0825f16598AcB518851f8959b8267EF296c57f81',
    },
  },
};

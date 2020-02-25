const NetworkIds = require('../../util/network-ids');
const abi = require('../../abis/Linguo.json');

module.exports = {
  [NetworkIds.KOVAN]: {
    abi,
    address: '0x96920673eF681d55D935A4A3C9092dF2E730b69E',
  },
};

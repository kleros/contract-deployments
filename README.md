# Kleros Contract Deployments

Deployment information for Kleros interaction contracts.

## Installation

With NPM:

```sh
npm install --save @kleros/contract-deployments
```

With Yarn:

```sh
yarn add @kleros/contract-deployments
```

## Usage

### Import everything

Contracts are split by application:

```
import deployments from '@kleros/contract-deployments';

const Linguo = deployments.linguo.Linguo;
//                         A      A
//                         |      |
//                 App  ---+      +--- Contract name

console.log(Linguo);
// {
//   contractName: "Linguo",
//   abi: [...],
//   networks: {
//     '<network-id>': {
//       address: '0x9999999999999999999999999999999999999999',
//     }
//   }
// }
```

The reason they are organized this way is because most applications will have more than one contract related to them.

### Import from an specific application

Contracts are split by application:

```
import Linguo from '@kleros/contract-deployments/interactions/linguo';

console.log(Linguo);
// {
//   contractName: "Linguo",
//   abi: [...],
//   networks: {
//     '<network-id>': {
//       address: '0x9999999999999999999999999999999999999999',
//     }
//   }
// }
```

**Important**: Please notice the `/interactions/` subpath in the import above.

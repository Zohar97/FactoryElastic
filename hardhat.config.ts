import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

module.exports = {
  zksolc: {
    version: "1.3.13",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSync",

  networks: {
    zkSync: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "https://mainnet.era.zksync.io",
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
    },

    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "https://rpc.ankr.com/eth_goerli",
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
    },

  },
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ]
  },
};

require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  namedAccounts: {
      deployer: {
        default: 0
      },
    },
  defaultNetwork: "hardhat",
    networks: {
      hardhat: {
        forking: {
          url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
          //blockNumber: 15058412
        }
      },
      goerli: {
        chainId: 5,
        blockConfirmations: 6,
        url: process.env.GOERLI_URL || "",
        accounts:
          process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
      mainnet: {
        chainId: 1,
        blockConfirmations: 6,
        url: process.env.MAINNET_URL || "",
        accounts:
          process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      },
    },
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    },
};

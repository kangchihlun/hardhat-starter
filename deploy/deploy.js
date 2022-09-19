const { network } = require('hardhat')
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
module.exports = async function({ getNamedAccounts, deployments }) {
const { deploy, log } = deployments
const { deployer } = await getNamedAccounts()

const args = []

const contract = await deploy("Token", {
  from: deployer,
  args,
  logs: true,
  waitConfirmations: network.config.blockConfirmations || 1,
})
  log(`Token deployed at ${contract.address}`)
  // Automatically verify the contract on Etherscan
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY ) {
    await verify(contract.address, args)
  }
}
module.exports.tags = ["all"]
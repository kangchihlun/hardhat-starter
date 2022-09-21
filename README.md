# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
nvm use 16
# rename .env.example to .env
# replace alchemy url and private key in .env file
npm i 
yarn hardhat test

# delete the artifacts & cache folder
npx hardhat deploy --network goerli

### for testnet 
# after the deployment , fund link to the deployed contract
npx hardhat fund-link --contract ${apiConsumer.address} --linkaddress 0x326c977e6efc84e512bb9c30f76e30c160ed06fb --network goerli

#  run(replace your deployed contract address)
npx hardhat request-data --contract ${apiConsumer.address} --network goerli
npx hardhat read-data --contract ${apiConsumer.address} --network goerli

```

const ReactosNFTMarketplace = artifacts.require("ReactosNFTMarketplace");

module.exports = async (deployer) => {
  const accounts =  await web3.eth.getAccounts()
  await deployer.deploy(ReactosNFTMarketplace, 'Reactos NFTs', 'RAT', 10, accounts[1]);
};

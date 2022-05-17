
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";

export default {
  solidity: {
	version: "0.8.0",
	settings: {
		optimizer: {
			enabled: true,
			runs: 88888
		}
	}
  },
  mocha: {
    timeout: 200000
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET_API_KEY}`,
        blockNumber: 11853372,
      },
    },
  },
};

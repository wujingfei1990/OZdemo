import 'dotenv/config';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "./tasks"

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/rrfRwrWvxA5GVmJG6bXytKIxmzsHmvV2",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/Kp-x2UZgPbMVSdA9yiU2yOFypETZsOsd",
      // accounts: ["Kp-x2UZgPbMVSdA9yiU2yOFypETZsOsd"]
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/00NwoNhHrNPJ9Qu8Pt9Es5RVALFKc4Z6",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
  },
  etherscan: {
    apiKey:{
      goerli: process.env.ETHERSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
    }
  }
};

export default config;

const { ethers } = require("ethers");

// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

async function estimateGas(){

    const { abi } = require("./abi");
    const contract_address = "0x0d89a8f99d0a41b3f789af628b3094abf4e846e0";
    const erc20 = new ethers.Contract(contract_address, abi, provider);

    const recipient = "0x3b12aeAB64CFA8D9F03E2A2aC3b71E2381fE015B";
    let fromAddress = "0x63625d96E450693cA0b23D571134d47ff0885a03";

    const estimation = erc20.estimateGas;

    console.log(await provider.estimateGas({"from": fromAddress}));
    console.log(await provider.getBlockNumber());
    console.log(await provider.getBlockWithTransactions((await provider.getBlockNumber())));
    
}

estimateGas();
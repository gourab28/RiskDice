const Web3 = require("web3");

async function withdraw(){// In Node.js use:
// binance rPC layer node for listening
let bsc = "https://bsc-dataseed.binance.org/";
// #the web3 variable is now connected to Binance Smart Chain
var web3 = new Web3(new Web3.providers.HttpProvider(bsc));
// #status of connection. a true statement means proper connection

const { abi } = require("./abi");

const contract_address = "0x0d89a8f99d0a41b3f789af628b3094abf4e846e0";
let fromAddress = "0x63625d96E450693cA0b23D571134d47ff0885a03";
let privateKey = "0xab902a664544096981ad6672940e4156cca4afd5ddf29005655c41c541709869";
const toAddress = "0x3b12aeAB64CFA8D9F03E2A2aC3b71E2381fE015B";

// calculate ERC20 token amount ( 18 decimals )
let amount = 1000000;
let tokenAmount = web3.utils.toWei(amount.toString(), 'shannon')
// Get ERC20 Token contract instance
let contract = new web3.eth.Contract(abi, contract_address, {
    from: fromAddress
});
// How many tokens do I have before sending?
let balance = await contract.methods.balanceOf(fromAddress).call();
console.log(`Balance before send: ${balance}`);

// The gas price is determined by the last few blocks median gas price.
const gasPrice = await web3.eth.getGasPrice();
console.log(`Gas Price: ${gasPrice}`);
// current transaction gas prices from https://ethgasstation.info/
// const currentGasPrices = await web3.eth.getCurrentGasPrices();
// console.log(`Current Gas: ${currentGasPrices}`);
/**
 * With every new transaction you send using a specific wallet address,
 * you need to increase a nonce which is tied to the sender wallet.
 */
let nonce = web3.eth.getTransactionCount(fromAddress);
// Will call estimate the gas a method execution will take when executed in the EVM without.
let estimateGas = await web3.eth.estimateGas({
    // "value": contract_address, // Only tokens
    // "data": contract.methods.transfer(toAddress, tokenAmount).encodeABI(),
    "from": fromAddress,
    gasPrice
    // "to": toAddress
});
console.log({
    estimateGas: estimateGas
});
// Build a new transaction object.
const transaction = {
    "to": contract_address,
    "data": contract.methods.transfer(toAddress, tokenAmount).encodeABI(),
    "gas": estimateGas,
    "gasPrice": gasPrice,
    nonce
};
// Creates an account object from a private key.
const senderAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
/**
* This is where the transaction is authorized on your behalf.
* The private key is what unlocks your wallet.
*/
//const signedTransaction = await senderAccount.signTransaction(transaction);
console.log({
    transaction: transaction,
    amount: amount,
    tokenAmount: tokenAmount,
    signedTransaction: signedTransaction
});

// We're ready! Submit the raw transaction details to the provider configured above.
try {
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    console.log({
        receipt: receipt
    });
    
} catch (error) {
    console.log({
        error: error.message
    });
}
}

withdraw();
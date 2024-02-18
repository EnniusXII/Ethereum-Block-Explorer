const accountInput = document.querySelector('#account-number');
const checkBalanceButton = document.querySelector('#check-balance');
const displayBalance = document.querySelector('#balance');
const displayBlock = document.querySelector('#block-number');
const valueInput = document.querySelector('#amount');
const toAccountInput = document.querySelector('#to-account');
const sendButton = document.querySelector('#send-button');

const rpc = new Web3('HTTP://127.0.0.1:7545');

let account;

async function checkBalance() {
    account = accountInput.value;

    const balance = await rpc.eth.getBalance(account);
    displayBalance.textContent = `${rpc.utils.fromWei(balance, 'ether')} ETH`

    const blockNumber = await rpc.eth.getBlockNumber()
    displayBlock.textContent = `Latest Block: ${blockNumber}`;
}

async function sendTransaction() {
    const amount = valueInput.value;
    const toAddress = toAccountInput.value;

    try {
        const send = await rpc.eth.sendTransaction({
            from: account,
            to: toAddress,
            value: rpc.utils.toWei(amount, 'ether'),
            gas: 21000,
            gasPrice: 20000000000,
        });
    } catch (error) {
        console.log(error);
    }
}


checkBalanceButton.addEventListener('click', checkBalance)
sendButton.addEventListener('click', sendTransaction)
let accounts;

export async function checkBalance(account) {
  
  if (typeof ethereum !== undefined) {
    try {
      accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      
      const balance = await ethereum.request({ method: 'eth_getBalance', params : [account, 'latest']})
      
      const parseBalance = parseInt(balance) / Math.pow(10, 18);      
      return parseBalance;
    } catch(error) {
      console.log(error);
    }
  } else {
    console.log('No ethereum in wallet');
  }
}
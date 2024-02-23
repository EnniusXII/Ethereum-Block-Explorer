import { expect, it } from "vitest";
import { checkBalance } from "./checkBalance.js";

const ethereum = {
    request: async function(requestObj) {
      
      if (requestObj.method === 'eth_requestAccounts') {
        return ['0x1234567890123456789012345678901234567890'];
      } else if (requestObj.method === 'eth_getBalance') {
        
        return '0x16345785d8a0000'; // Example balance in hexadecimal
      }
    }
  };

  global.ethereum = ethereum;

it('should return balance of the account', async () => {
    const account = '0x1234567890123456789012345678901234567890';
    const balance = await checkBalance(account);
    expect(balance).toBe(0.1); // Balance in ETH based on hexadecimal value
  });
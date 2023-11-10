import { ethers } from "hardhat";

/**
 * 基于erc712的签名方法
 */

async function signPermit(tokenName: string, verifyAddr: string, owner: string, spender: string, value: number, deadline: number, chainId: number, nonce: number, privateKey: string) {
  const domain = {
    name: tokenName,
    version: '1',
    chainId: chainId,
    verifyingContract: verifyAddr
  };
  const permit = {
    owner: owner,
    spender: spender,
    value: value,
    nonce: nonce,
    deadline: deadline
  };
  console.log(permit);
  const types = {
    // EIP712Domain: [{
    //   name: 'name',
    //   type: 'string'
    // },
    // {
    //   name: 'version',
    //   type: 'string'
    // },
    // {
    //   name: 'chainId',
    //   type: 'uint256'
    // },
    // {
    //   name: 'verifyingContract',
    //   type: 'address'
    // },
    // ],
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' }
    ]
  };
  const message = {
    domain: domain,
    primaryType: 'Permit',
    types: types,
    message: permit
  };
  const signer = new ethers.Wallet(privateKey);
  const signature = await signer.signTypedData(domain, types, permit);
  return signature;
}


async function main() {
  const tokenName = 'MyToken';
  const verifyAddr = '0xeada766eb203d4A6d2809541488f4C6aAA10e9eE';
  const owner = '0x7F414fdDf6C0f14314f0099BBEc99c64c8E6D9F3';
  const spender = '0x1e4832aE74922a239268d627DEfB1860e736ca25';
  const value = 1;
  const deadline = 1701360000;
  const chainId = 5;
  const nonce = 0;
  const privateKey = '2451b007356bb258775e2d8f9cead74288ce8b0711b370d41909b68a90c20a01';
  const signature = await signPermit(tokenName, verifyAddr, owner, spender, value, deadline, chainId, nonce, privateKey);
  console.log(signature);
  const { v, r, s } = ethers.Signature.from(signature);
  console.log("v:", v);
  console.log("r:", r);
  console.log("s:", s);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

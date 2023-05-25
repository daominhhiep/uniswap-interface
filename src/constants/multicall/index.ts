import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.SEPOLIA]: '0x908c6E870161204C440469FfAC38330b283E7554',
  [ChainId.HARDHAT]: '0x21DD79cCC89F433cd1b4D08B8bc6fD03763A1C2d',
  [ChainId.TAIKO]: '0x21DD79cCC89F433cd1b4D08B8bc6fD03763A1C2d',
  [ChainId.TAIKO_INTERNAL_1]: '0x359E9b48D3BeF4315901C1ACaE25272a67124636',
  [ChainId.TAIKO_TESTNET]: '0x21DD79cCC89F433cd1b4D08B8bc6fD03763A1C2d'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

import {ChainId} from "../constants/chains";


const DEFAULT_NETWORKS = [
  ChainId.MAINNET,
  // SupportedChainId.ROPSTEN,
  // SupportedChainId.RINKEBY,
  // SupportedChainId.GOERLI,
  // SupportedChainId.KOVAN,
]

export function constructSameAddressMap<T>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<{ [chainId: number]: T }>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

import { V3_CORE_FACTORY_ADDRESSES as V3_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import { V3_MIGRATOR_ADDRESSES as V3_CORE_MIGRATOR_ADDRESSES } from '@uniswap/sdk-core'
import { MULTICALL_ADDRESSES as MULTICALL_CORE_ADDRESSES } from '@uniswap/sdk-core'
import { TICK_LENS_ADDRESSES as TICK_LENS_CORE_ADDRESSES } from '@uniswap/sdk-core'
import { QUOTER_ADDRESSES as QUOTER_CORE_ADDRESSES } from '@uniswap/sdk-core'
import { NONFUNGIBLE_POSITION_MANAGER_ADDRESSES as NONFUNGIBLE_POSITION_MANAGER_CORE_ADDRESSES } from '@uniswap/sdk-core'
import { SWAP_ROUTER_02_ADDRESSES } from '@uniswap/sdk-core'
import { ChainId } from 'constants/chains'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'

type AddressMap = { [chainId: number]: string }

// scroll_sepolia v3 addresses
const SCROLL_SEPOLIA_V3_CORE_FACTORY_ADDRESSES = '0xB856587fe1cbA8600F75F1b1176E44250B11C788'
const SCROLL_SEPOLIA_ROUTER_ADDRESS = '0x17AFD0263D6909Ba1F9a8EAC697f76532365Fb95'
const SCROLL_SEPOLIA_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0xbbAd0e891922A8A4a7e9c39d4cc0559117016fec'

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V3_FACTORY_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_V3_CORE_FACTORY_ADDRESSES,
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V3_CORE_MIGRATOR_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: '0x38E33D067F03a5cDc02C301b2c306cb0414549Bf',
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(MULTICALL_CORE_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: '0x8c181f4B9040F1a2C941EfD3b608712cF86F1957',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(SWAP_ROUTER_02_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_ROUTER_ADDRESS,
}

// /**
//  * The oldest V0 governance address
//  */
// export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
//   '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
// )
// /**
//  * The older V1 governance address
//  */
// export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
// }
// /**
//  * The latest governor bravo that is currently admin of timelock
//  */
// export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
// }

// export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

// export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
//   [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
// }

// export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
//   [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
// }

export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(QUOTER_CORE_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: '0xd5dd33650Ef1DC6D23069aEDC8EAE87b0D3619B2',
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(NONFUNGIBLE_POSITION_MANAGER_CORE_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
}

// export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
// }

// export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
//   [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
// }

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(TICK_LENS_CORE_ADDRESSES, [ChainId.SCROLL_SEPOLIA]),
  [ChainId.SCROLL_SEPOLIA]: '0x9804Da978427a49929f2E6Ea32A9594F03f9296e',
}

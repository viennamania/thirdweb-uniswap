import { defineChain } from "thirdweb"


/*
export default defineChain({
    id: 31337,
    name: "Anvil",
    rpc: "http://localhost:8545",
    testnet: true,
    nativeCurrency: {
        name: "Anvil Ether",
        symbol: "ETH",
        decimals: 18,
    },
});
*/


// polygon mainnet

export default defineChain({
    id: 137,
    name: "Polygon",
    chain: "polygon",
    shortName: "matic",
    chainId: 137,
    slug: "polygon",
    rpc: ["https://rpc-mainnet.maticvigil.com"],
    testnet: false,
    nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
    },
});

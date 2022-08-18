# Taycan mainnet 
Taycan, formerly known as "Hupayx", is an independent blockchain. The base coin is Shuffle(SFL) and it holds an equal value to that of "HPX." 

Taycan is a scalable, high-throughput Proof-of-Stake blockchain that is fully compatible and
interoperable with Ethereum. It's built using the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk/) which runs on top of [Tendermint Core](https://github.com/tendermint/tendermint) consensus engine. and is forked from [EVMOS](https://github.com/evmos/evmos/)

Taycan allows for running vanilla Ethereum as a [Cosmos](https://cosmos.network/)
application-specific blockchain. and it also supports every Ethereum hardfolks current. This allows developers to deploy EVM smart conrtracts on the Tendermint’s PoS implementation. 
Moreover, because Taycan is built on top of the Cosmos SDK, it will be able to exchange value with the rest of the Cosmos 
Ecosystem through the Inter Blockchain Communication Protocol (IBC). This means Taycan will be able to exchange all of EVM chains (Ethereum, Polygon, Avalanche and so on) and Cosmos chains (Cosmos, Osmosis, Evmos, CertiK and so on) and more blockchains

### Features

key features of Taycan:

* Next version of Hupayx (1:1 value with HPX)
* Web3 and EVM compatibility
* High throughput via [Tendermint Core](https://github.com/tendermint/tendermint)
* Horizontal scalability potential via [IBC](https://cosmos.network/ibc) and [Bridges](https://ethereum.org/en/bridges/)
* Fast transaction finality for payment service

Taycan enables these key features by:

* Fast and stabilized payment transaction than Hupayx(HPX)
* Provide more transparent and accurate amount of coin circulation
* Implementing Tendermint Core's Application Blockchain Interface ([ABCI](https://docs.tendermint.com/master/spec/abci/)) to manage the blockchain
* leveraging [modules](https://docs.cosmos.network/main/building-modules/intro.html) and other mechanisms implemented by the [Cosmos SDK](https://docs.cosmos.network/).
* Utilizing [`geth`](https://github.com/ethereum/go-ethereum) as a library to promote code reuse and improve maintainability.
* Exposing a fully compatible Web3 [JSON-RPC](./../../developers/json-rpc/server.md) layer for interacting with existing Ethereum clients and tools ([Metamask](https://github.com/evmos/evmos/tree/main/docs/users/wallets/metamask.md), [Remix](https://github.com/evmos/evmos/tree/main/docs/developers/tools/remix.md), [Truffle](https://github.com/evmos/evmos/tree/main/docs/developers/tools/truffle.md), etc).

Above features allow developers to leverage existing Ethereum ecosystem tools and
software to seamlessly deploy smart contracts which interact with the rest of the Cosmos
[ecosystem](https://cosmos.network/ecosystem)!
Also it gives chance to users can expect inflation reward and accurate data of chain status.

## Quick Facts Table

| Property                     | Value                                                |
|------------------------------|------------------------------------------------------|
 Taycan Testnet                | [2023](https://chainlist.org/chain/2023)        |
|Taycan Mainnet                | [22023](https://chainlist.org/chain/22023)                |
| Blockchain Explorer(s)       | [EVM Scan](https://taycan-evmscan.hupayx.io) / [Cosmos Scan](http://taycan-cosmoscan.hupayx.io/) |
| Block Time                   | ~2 seconds                                           |

**Note**: Requires [Go 1.18+](https://golang.org/dl/)

## Taycan Elements
Blockchain overview [README.md](https://github.com/hupayx-com/taycan-docs/README.md)

Install guide [Installguide.md](Installguide.md)

Source Code [Suffle Taycan Github](https://github.com/hupayx-com/evmos)


## ECOSYSTEM Documentation

[EVMOS Docs](https://docs.evmos.org/)

[Cosmos SDK Docs](https://docs.cosmos.network/)

[Ethereum Docs](https://ethereum.org/developers)

[Tendermint Core Docs](https://docs.tendermint.com/)


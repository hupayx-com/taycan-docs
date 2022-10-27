# install

Taycan mainnet forked from evmos so it has same way to installation with evmos.
For prerequisites and detailed build instructions please read the [EVMOS Docs](https://docs.evmos.org/) instructions. 

## start
- binary : https://github.com/hupayx-com/evmos/releases/download/v7.0.0-hupayx/evmosd
- checksum : https://github.com/hupayx-com/evmos/releases/download/v7.0.0-hupayx/checksum.txt
---
- binary : https://github.com/hupayx-com/evmos/releases/download/v8.0.0-hupayx/evmos_8.0.0-hupayx_Linux_amd64.tar.gz
- checksum : https://github.com/hupayx-com/evmos/releases/download/v8.0.0-hupayx/checksums.txt

|version|height| git |
|------|---|---|
|v7.0.0|1|tag : [v7.0.0-hupayx](https://github.com/hupayx-com/evmos/releases/tag/v7.0.0-hupayx) |
|v8.0.0|3343125| tag : [v8.0.0-hupayx](https://github.com/hupayx-com/evmos/releases/tag/v8.0.0-hupayx) |

## genesis.json
- https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/genesis.json

## snapshot
- https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/taycan_mainnet_08-18-2022.tar.gz
- https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/taycan_mainnet10-15-2022.tar.gz (height : 3343125)
* every sun day create new snapshot

---
## sentry_node.sh
```
#!/bin/bash
CHAINID="evmos_22023-1"
KEYRING="test"
KEYALGO="eth_secp256k1"
LOGLEVEL="info"
TRACE="--trace"
MONIKER="test"

# remove old setting
rm -rf $HOME/.evmosd

evmosd config keyring-backend $KEYRING

evmosd config chain-id $CHAINID

# init taycan
evmosd init $MONIKER --chain-id $CHAINID

# remove dummy genesis
rm $HOME/.evmosd/config/genesis.json

# get taycan genesis file
wget https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/genesis.json  -P $HOME/.evmosd/config/

# get snapshot
wget https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/taycan_mainnet_08-18-2022.tar.gz $HOME/.evmosd/

# remove old data
rm -rf $HOME/.evmosd/data

# unpack snapshot
tar xvfz taycan_mainnet_08-18-2022.tar.gz $HOME/.evmosd/

# seed change
sed -i '212s/seeds =.*/seeds = \"f879932bcb21a75ce979ff3da5a35ffd320ccaa0@3.239.217.15:26656,99d89e15b1716957e8e40876d9aa0490b234b11c@13.125.228.53:26656,bd2e13c0022e7808f53a74d5ff9ed858b534d48f@18.130.167.110:26656"/' $HOME/.evmosd/config/config.toml

# start evmos
evmosd start
```


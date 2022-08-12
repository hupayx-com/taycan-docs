# install

Taycan mainnet forked from evmos so it has same way to installation with evmos.
For prerequisites and detailed build instructions please read the [EVMOS Docs](https://docs.evmos.org/) instructions. 

## start
- binary : https://github.com/hupayx-com/evmos/releases/download/v6.0.1-hupayx/evmosd
- checksum : https://github.com/hupayx-com/evmos/releases/download/v6.0.1-hupayx/checksum

## genesis.json
- https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/genesis.json

## snapshot
- https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/taycan_mainnet07-21-2022.tar.gz

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
wget https://taycan-mainnet-snapshot.s3.ap-northeast-2.amazonaws.com/taycan_mainnet07-21-2022.tar.gz $HOME/.evmosd/

# remove old data
rm -rf $HOME/.evmosd/data

# unpack snapshot
tar xvfz taycan_mainnet07-21-2022.tar.gz $HOME/.evmosd/

# seed change
sed -i '212s/seeds =.*/seeds = \"f3671b8819cbc117c44c84e7200a68f603a51c3f@3.239.217.15:26656,74f39dc36c5810494fe3f6018247aeccdd144db5@13.125.228.53:26656,b884fe0cd83ac85ee275afa14d1ff26ab09e770d@18.130.167.110:26656"/' $HOME/.evmosd/config/config.toml

# start evmos
evmosd start
```


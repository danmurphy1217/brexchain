# brexchain
A Tutorial using Cosmos SDK and Starport built for Brex EPD Learning Day. This presentation was originally given on behalf of the Brex Crypto Paper Reading Group.

# Steps Taken

## Manual Installation
- To properly run Starport on your machine you'll need Go: https://go.dev/doc/install
- Install Starport with: `curl https://get.starport.network/starport\! | bash`
-   If this fails due to write permission issues, try `curl https://get.starport.network/starport | bash`
- Verify installation with `starport version`
- Add starport to `/usr/local/bin`: `sudo mv starport /usr/local/bin/`
-   If this fails then retry with this: `sudo curl https://get.starport.network/starport! | sudo bash`

## Installation with Brew
- `brew install tendermint/tap/starport`

## Creating a Blockchain
For step-by-step instructions see `TUTORIAL.md`. You can also run:

```bash
wget https://raw.githubusercontent.com/danmurphy1217/brexchain/main/bootstrap.sh

chmod +x bootstrap.sh

./bootstrap.sh
```

to run this blockchain on your computer.

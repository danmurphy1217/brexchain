# install starport CLI
brew install tendermint/tap/starport
# download repo and init blockchain w/ fresh genesis state
git clone https://github.com/danmurphy1217/brexchain.git
cd brexchain && starport chain serve -r

React template for building out experiments with Dapps/testing new libraries

Simplified template for Dapps- routing is implemented and single page style is already implemented in case you want to build it out more. Add more components and link them to the navbar at your convenience. Components folder is there to help you stay organized....good....good.....

Wallet connect component to Ethers.js allows you to access a provider, account, account balance easily- useContext passes info down to nested child components as needed within the App. 

For setup (other's use) after cloning the repo:

In src folder you need to create a folder (chain-info) with a .json file in it: src-> chain-info -> abi.json

abi.json will contain the abi for the smartcontract you want to interact with, it will look something like {"abi":{...}}, and you will destructure this variable out for use in App.js. Note, you can grab this info from any verified contract on etherscan! Or, if you are deploying locally to a chain you'll typically have the abi within something like a 'build' folder.

You also neeed to create a .env file at the top most level folder with the following variable, along with the address of the smart contract you want to interact with:

REACT_APP_CONTRACTADDRESS = '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

This will keep this info private to you- if that matters at all.  

Enjoy. 




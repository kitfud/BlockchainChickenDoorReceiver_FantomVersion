import React from 'react'
import { useState, createContext, useContext } from "react";
import {ContractContext } from '../App';
import WalletConnect from './usefulComponents/WalletConnect';
import { ethers } from 'ethers'

const FlowWallet = () => {

 const contractinfo = useContext(ContractContext)

 const [defaultAccount, setDefaultAccount] = useState(null);
 const [walletBalance, setWalletBalance] = useState(null);
 const [signer, setSigner] = useState(null);
 const [contract, setContract] = useState(null);
 const [provider, setProvider] = useState(null);
 const abi = contractinfo.abi;
 const contractaddress = contractinfo.address;


  return (
    <div>
       
        <WalletConnect
        defaultAccount={defaultAccount}
        setDefaultAccount={setDefaultAccount}
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        setSigner = {setSigner}
        setContract={setContract}
        provider = {provider}
        setProvider={setProvider}     
        />






    </div>
  )
}

export default FlowWallet
import React from 'react'
import { useState, createContext, useContext,useEffect } from "react";
import {ContractContext } from '../App';
import HardwareConnect from './usefulComponents/HardwareConnect';
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

//  useEffect(()=>{
//   setProvider(new ethers.providers.Web3Provider(window.ethereum))
//   let newcontract = new ethers.Contract(contractaddress,abi,provider)
//   setContract(newcontract)
//   console.log(contract)

//  },[])

  return (
    <div>
       
        <HardwareConnect
        contract={contract}
        defaultAccount={defaultAccount}
        setDefaultAccount={setDefaultAccount}
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
        setSigner = {setSigner}
        setContract={setContract}
        provider = {provider}
        setProvider={setProvider}   
        signer={signer}  
        />





   



    </div>
  )
}

export default FlowWallet
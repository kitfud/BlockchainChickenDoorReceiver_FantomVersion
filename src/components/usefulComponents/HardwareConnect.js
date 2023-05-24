import React, { useState, useEffect,useContext,createContext } from 'react';
import {  Button, CircularProgress, Box,  Typography, Card, CardContent} from "@mui/material"
import { ethers } from 'ethers'
import { ContractContext } from '../../App';
import {connect} from "simple-web-serial";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
export const WalletContext = createContext();

const HardwareConnect = ({
    contract,
    setContract,
    provider,
    setProvider,
}) => {

    const contractinfo = useContext(ContractContext);
    const [controlButtonColor,setControlButtonColor]= useState("primary")
    const [buttontext, setButtonText] = useState("Connect to Door Controller")
    const [connection, setConnection] = useState(null);
    const [doorStatus,setDoorStatus] = useState(null)

    const [data, setTxData] = useState(null)

    const abi = contractinfo.abi
    const address = contractinfo.address

    const handleConnect = async ()=>{
        setConnection(connect(9600))
        setControlButtonColor("success")
        setButtonText("Connected to Controller")
    }

    useEffect(()=>{
        updateEthers()
    },[])

    useEffect(()=>{
    if(provider){
    console.log("Contract Being Set")
    setContract(new ethers.Contract(address,abi,provider))
    }
    },[provider])

    useEffect(()=>{
    console.log("door status",doorStatus)
    },[doorStatus])

    useEffect(()=>{
        if(contract){
        console.log("Getting Door Status")
       setInterval(getDoorStatus,1000);
        }
    },[contract])

    
    const updateEthers = async () => {
        let tempProvider = await new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);
    
        let tempContract = await new ethers.Contract(address, abi, tempProvider);
        setContract(tempContract);
    
    }

    const getDoorStatus = async()=>{
        console.log("Getting the door status...")
        let status = await contract.getDoorStatus()
        setDoorStatus(status)
    }


    useEffect(()=>{
    console.log("DATA Recieved")
    if(contract){
    try{
        getDoorStatus() 
    }
    catch(error){
        console.log(error)
    }
      
    }     
    },[data])

useEffect(()=>{
if(connection){
console.log("door~> Satus Change")
    if(doorStatus ==1){
        console.log("sending Door Close")
        connection.send("door",1)
    }
    else{
        console.log("sending Door Open")
        connection.send("door",2)
    }
}
    },[doorStatus])



    useEffect(()=>{
        if (contract && provider){
    try{
        getDoorStatus()
    }
    catch(error){
        console.log(error)
    }
    
      contract.on("DoorTriggered",(status,event)=>{
      let data = {
        status: status.toString(),
        event:event
      }
      setTxData(data.status)
      //contract.removeListener("DoorTriggered",(status,event))
      })
      
      
      }},[contract])

  

  return (
      <>
     
           
            <Card>
            <Box>
                Door Status:
               {
                doorStatus==0?(
                    ("Open")
                ):(
                  ("Closed")
                )
               }
            </Box>
            </Card>

            
            <Box>
          {
            !connection?  <Button sx={{marginTop:'20px'}} variant="contained" color={controlButtonColor} onClick={handleConnect}>
            {buttontext}
            </Button>:
            <Box sx={{margin:'auto',height:"100px", width:"30%",marginTop:'70px',backgroundColor:"green"}}>
                <Typography color="white" fontSize={'20px'}>You Are Connected</Typography>
                <SentimentSatisfiedAltIcon sx={{color:'white'}} size="200%"></SentimentSatisfiedAltIcon>
            </Box>
          }
             </Box>  
         
      </>

    
  )
}

export default HardwareConnect
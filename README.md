<h1 align="center">The Blockchain Chicken Coop Door Concept</h1>

![diagram](https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/App_Diagram.png)

<a href="https://www.youtube.com/watch?v=GRRlAFD2J1c"><h3 align="center" >Click For YouTube Video Walkthrough </h3></a>

<h1 align="center">This is the Repo for the Receiver App</h1>

<p>
The purpose of the receiver app is to act as a state change listener for the smartcontract deployed to the Fantom Opera Mainnet-> <a href="https://ftmscan.com/address/0xD14EcfE4e1E5B7e9Bd1368Bbb3820061cE222133#code">DoorV3.sol</a>. When the state of the state of the door changes on the blockchain the contract 'emits' a signal which can be picke up on. Furthermore, the app regularly checks DoorV3.sol to see if the status of the door changes over time (this is to account for if the emitter signal is missed by the app).
  
When this application is paried with the <a href="https://github.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/tree/master">Blockchain Door Transmitter App</a> it will cause the remote chicken door (picture below) to open or close: 
<p>
  
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/AssembledDoor.jpg" alt="door"/>
</p>


<h1>Hardware for the Reciever App</h1>
<p>The reciever app relies on connectivity to an Arduino/xBee module which is listening for Serial signalling and in turn trasmitting to another remote wireless module (seen in the picture of the door above) via the serial port. The device (pictured below) must be plugged into a computer prior to use:</p>

 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/xBeeForReceiverApp.jpg" alt="wirelessteathered"/>
</p>

<h1>Using the Reciever App</h1>

1. When at the blockchain reciever app a user should navigate to the 'Connect to Door' route. Here they will be prompted with a button -"Connect to Door Controller." Prior to clicking this button a user must make sure to have plugged in their Arduino hardware device/xBee wireless transmitter via usb serial.
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup1.png" alt="setup1"/>
</p>

2. After clicking the button you'll see a list of posssible USB devices you can connect to. A user will want to select the port associated with their Arduino/Xbee wireless trasmitter module
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup2.png" alt="setup2"/>
</p>

3. After connecting the application is listening to the blockchain, specifically DoorV3.sol for a state change on the status of the door. When it recieves a signal it will push this out via the ARduino/Xbee wireless transmitter to a remote module which controls the chicken coop door. 
<p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup3.png" alt="setup3"/>
</p>

<h1 align="center">Remote Chicken Coop Door Module- How was it Made + Circuit</h1>

The original chicken coop door relied on a momentary push button to make a connection between two lines and toggle the door up/down between press. I exposed the endpoints for these lines and soldered two green jumpwer wires so the door functionality could be adapted for an Arduino microcontroller. 
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/SolderedWiresToggle.jpg" alt="make1"/>
</p>

The completed remote door module is pictured below- the Arduino with xBee wireless reciever listens for a signal being passed form the transitter (teathered to a computer and listening to the blockchain). When it get's a signal it transmitts a signal to toggle door. 
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/CloseUpDoorModule.jpg" alt="make2"/>
</p>

The tricky part about making this circuit was the use of a transistor to adapt the original momentary switch. Below is the diagram of how I hacked the original chicken coop door-
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/DoorCircuit.png" alt="make3"/>
</p>

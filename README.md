<h1 align="center">The Blockchain Chicken Coop Door Concept</h1>

![diagram](https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/App_Diagram.png)

<a href="https://www.youtube.com/watch?v=GRRlAFD2J1c">Click For YouTube Video Walkthrough</a>

<h1 align="center">This is the Repo for the Receiver App</h1>

<p>
The purpose of the receiver app is to act as a state change listener for a smartcontract deployed to the Fantom Opera Mainnet-> <a href="https://ftmscan.com/address/0xD14EcfE4e1E5B7e9Bd1368Bbb3820061cE222133#code">DoorV3.sol</a>. When the state of the door changes, as recorded on the blockchain (smart contract variable as either set too- 'open' vs. 'close) the contract emits a signal which can be picked up on by a web application/front-end. Furthermore, the web app regularly checks DoorV3.sol (the name of the smart contract used in my app) to see if the status of the coop door changes over time.
  
When this application is paried with the <a href="https://github.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/tree/master">Blockchain Door Transmitter App</a> it will cause the remote chicken door (picture below) to open or close: 
<p>
  
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorTransmitter_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/AssembledDoor.jpg" alt="door"/>
</p>


<h1>Hardware for the Receiver App</h1>
<p>The receiver app relies on connectivity to an Arduino/xBee module which is listening for serial response from the web app- and which will, in turn, transmit to another remote wireless module (seen in the picture of the door above) via xBee. The device (pictured below) must be plugged into a computer prior to use with the web app:</p>

 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/xBeeForReceiverApp.jpg" alt="wirelessteathered"/>
</p>

<h1>Using the Receiver App</h1>

1. When using the blockchain receiver app a user should navigate to the 'Connect to Door' route. Here they will be prompted with a button -"Connect to Door Controller." Prior to clicking this button a user must plug in their Arduino hardware device/xBee wireless transmitter via usb serial.
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup1.png" alt="setup1"/>
</p>

2. After clicking the button you'll see a list of posssible USB devices you can connect to. A user will want to select the port associated with their Arduino/Xbee wireless trasmitter module
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup2.png" alt="setup2"/>
</p>

3. After connecting, the application is listening to the blockchain- specifically DoorV3.sol for a state change on the status of the door. When it receives a signal it will transmit this out via the Arduino/Xbee wireless transmitter to another remote module (Arduino/Xbee pair) which controls the chicken coop door. 
<p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/ReceiverApp/setup3.png" alt="setup3"/>
</p>

<h1 align="center">Remote Chicken Coop Door Module- How was it Made/Circuit</h1>

The original chicken coop door relied on a momentary push button to complete a circuit and toggle the door up/down between button press. I exposed the endpoints for these lines (by cutting and stripping the wires) and then soldered two green jumpwer wires so the door functionality could be adapted for an Arduino microcontroller/xBee pair: 
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/SolderedWiresToggle.jpg" alt="make1"/>
</p>

The completed remote door module is pictured below- the Arduino with xBee wireless receiver listens for a signal being passed form the transitter (teathered to a computer and listening to the blockchain-specifically Fantom Opera Mainnet). When it get's a signal it transmitts a signal to toggle door. 
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/HardwarePics/CloseUpDoorModule.jpg" alt="make2"/>
</p>

The tricky part about making this circuit was the use of a transistor to adapt the original momentary switch. Below is the diagram of how I hacked the original chicken coop door using a transistor element:
 <p align="center">
  <img src="https://raw.githubusercontent.com/kitfud/BlockchainChickenDoorReceiver_FantomVersion/master/Blockchain_Door_Screenshots/DoorCircuit.png" alt="make3"/>
</p>

#include <SimpleWebSerial.h>
SimpleWebSerial WebSerial;

//Variables 
char incomingByte ; //Variable to store the incoming byte

String door;
void setup() {
  //Start the serial communication
  Serial.begin(9600); //Baud rate must be the same as is on xBee module
  pinMode(13, OUTPUT);
  pinMode(A0,OUTPUT);

   WebSerial.on("door", handleTrigger);
}
void handleTrigger(JSONVar data) {
 door = data;
}
void loop() {
  
WebSerial.check();
Serial.println(door);
}

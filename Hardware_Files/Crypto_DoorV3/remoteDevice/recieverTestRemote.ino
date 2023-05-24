char incomingByte ; //Variable to store the incoming byte
int togglePin = 7;
bool canTrigger = true;

void setup() {
  //Start the serial communication
  Serial.begin(9600); //Baud rate must be the same as is on xBee module
  pinMode(13, OUTPUT);
  pinMode(A0,OUTPUT);

  pinMode(togglePin,OUTPUT);
}

void triggerToggle(){
  digitalWrite(togglePin,LOW);
  delay(150);
  digitalWrite(togglePin,HIGH);
  delay(150); 
  digitalWrite(togglePin,LOW); 
}

void loop() {
  
  if (Serial.available()>0){
    //Read the incoming byte
    incomingByte = Serial.read();
    canTrigger = true;
 while (incomingByte == '1'){
   incomingByte = Serial.read();
  digitalWrite(13,HIGH);
  digitalWrite(A0,LOW);
  if(canTrigger==true){
    canTrigger=false;
    triggerToggle();
  }
 }
 canTrigger = true;
 while (incomingByte=='2'){
   incomingByte = Serial.read();
  digitalWrite(13,LOW);
  digitalWrite(A0,HIGH);
  if(canTrigger==true){
    canTrigger=false;
    triggerToggle();
  }
  
 }
 canTrigger = true;
 }
 

}

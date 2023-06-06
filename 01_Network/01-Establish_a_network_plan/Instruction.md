

### First speaker ; BILEL
We started by creating all asked LAN called 'Management with ip address within network 192.168.10.0- Study with ip address within network 192.168.20., support with ipaddress within network 192.168.40.0 ', by adding the asked numbers of end devices (PC'S) and adding  switches that will be connected to the main router. We added the main Router and connected our  LAN to said router (ipaddress of router equals the ipaddress of the connected networks ending with 1)
A network of servers wich is numbered as 192.168.60.0


We first wanted to start  a network with vlans to a switch but ended up using a router to the network becaus its easier to understand and more efficient to setup .


### Second speaker : SHAHMITU
Before configuring the second Network (Production). We decided to add a DHCP Server and the DNS server on a separate network, as to  automatically assign IP addresses of the End devices of our first LAN. The server is connected to the Main router by another switch.
To configure the DNS server ; Click on the server, Go to services , select DNS and assign an IP address to the server. 192.168.60.253 Add the hostnames and it's IP addresses to the DNS record. 		


THIRD SPEAKER OUSAMMA
To configure the server DHCP ; Click on the server , set the default gateway wich takes us to the main router and its ip address to right interface. 192.168.60.254
		Go to services , activate the DHCP service and configure the first pool, by configuring the right network address, sub net, number of users and set the default gateway (IP-address of the router)  and the DNS and click Save.
Configure the router so that our End devices can communicate with our DHCP server wich is on a separate network.
		To configure the router ; Click on the router, go to the CLI.
		Once in the CLI take following steps to configure the router so that the packages from an end device from your LAN get to the DHCP server and back.
			Router > enable 
							configure terminal
							interface 'name of the interface in question'
							ip helper-address 'ip address of the DHCP server'
							***do write memory***
Your network should be able now to communicate with the DHCP server and thus can  get the IPaddresses automatically assigned.

REPEAT THIS PROCES FOR EVERY SEPERATE NETWORK (Production, Study, Support)


### Step Four ; TRISTAN
Configure the FTP server as following ;
First we set the Default gateway to get us to the Router, the DNS ipaddress an it's own IP address. 192.168.60.252
Go to services ---> FTP ---> add username , password , the permissions with it.

You can go to the DNS server and add a record to the FTP server.










							
							
							
			
		
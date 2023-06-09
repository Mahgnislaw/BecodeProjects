# Establish a simple network
_Advanced network using DHCP, DNS, Storage server and a firewall_

## Cisco devices
- 4 computer
- 4 server
- 5 switch
- 2 router
- 1 ASA 5506

So for better understanding i just put 1 computer by department, if i put all the devices ask in the instruction that's gonna be non readable 
but i set the IP range with the right number of devices.

## Inside

First put the main router and all the end devices, between the router and the end devices add a switch for each departement.
I make a subnet for each departement. Now connected the device from a departement to his own swicth and connect this switch to the router.
**Don't forget to turn on each port of the router.**

First of all  made a plan of the futur network, giving a subnet for each department:

| Subnet     | Subnet          | Number of Posts |
|------------|-----------------|-----------------|
| Management | 192.168.10.0/   | 5               |
| Production | 192.168.20.0   | 10              |
| Study      | 192.168.30.0   | 8               |
| Support    | 192.168.40.0    | 2x30            |
| Server     | 192.168.100.0    | 3               |

### Configure the router
**Main router**
Set the correct ip on each port, those ip gonna be the DEFAULT GATEWAY for each subnet.

| Subnet     | ports       | ip             |
|------------|-------------|----------------|
| Management | Fa1/0       | 192.168.10.1/24   |
| Production |   Fa7/0     | 192.168.20.1/24   |
| Study      | Fa6/0       | 192.168.30.1/24   |
| Support    | Fa8/0       | 192.168.40.1/24   |
| Server     | Fa0/0       | 192.168.60.1/24   |

**Then setup the server before finishing his config**

When server DHCP is done,go to CLI interface from the router and put those command for each interfaces (exept the server interface)
```
enable 
configure terminal
interface 'name of the interface in question'
ip helper-address 'ip address of the DHCP server'
do write memory
```

Your network should be able now to communicate with the DHCP server and thus can get the IPaddresses automatically assigned.


### Configuration of the servers
All the server gonna be on a STATIC IP manually set

**1) The DNS : 192.168.100.3**

Click on the server , set the default gateway. 
Set ip address on the interface : 192.168.100.3

Go to services , select DNS set it on add an URL name and it's IP addresses to the DNS record. 
This URL gonna be _www.cisco.com_ for this exercice.

**2) The DHCP : 192.168.100.2**
Click on the server , set the default gateway. 
Set ip address on the interface : 192.168.100.2

Go to services, activate the DHCP service and configure each pool, by configuring the right network address, sub net, number of users and set the default gateway (IP-address of the router) and the DNS and click Save.
For the IP range i make them start at 10 so there is some free space on the network for other static devices.
When it's done go finish the setup of the router

**3) The Storage server : FTP : 192.158.100.4**
Click on the server , set the default gateway. 
Set ip address on the interface : 192.168.100.4 (this gonna be the access address of our server)

Go to services, activate the FTP service then can set users and permission to access this storage.
To make the access easier than using ip adress add a record to our DNS server and set _server_ as url for the ftp server so access the server using his url or his ip.

### ASA5506
I've try different things, but can't make it work. Maybe for later


 




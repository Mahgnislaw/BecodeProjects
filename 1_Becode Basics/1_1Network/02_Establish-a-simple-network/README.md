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

First of all  made a plan of the futur network, giving a subnet for each department:

| Subnet     | Subnet          | Number of Posts |
|------------|-----------------|-----------------|
| Management | 192.168.10.0/   | 5               |
| Production | 192.168.20.0   | 10              |
| Study      | 192.168.30.0   | 8               |
| Support    | 192.168.40.0    | 2x30            |
| Server     | 192.168.60.0    | 3               |

### Configuration of the servers
1 The DHCP
 




# Build a simple network

_An introduction to network_

## Cisco Devices :
- 3 Computer
- 1 Switch
- 1 router
- 1 Modem
- 1 Cloud
- 1 Server

The modem is here to simulate the ISP going outside and the Cloud and server simulate external world and the internet.

## Inside
### Physical overview
Link the 3 computer to the switch then the switch to the router and the router to the modem.

        +-----------------+
        |     Modem       |
        +-----------------+
                |
                |
                |
        +-----------------+
        |     Router      |
        +-----------------+
           |           |
    +-----------------+
    |    Switch       |
    +-----------------+
       |     |     |
       PC    PC    PC
       
### Configuration
1° The router
- Give it an IP : 192.168.1.254/24 _That's gonna be the defaultgateway for the other devices_
- Turn on the port used

2° The PC
- For each one set an ip, in order to the instruction
- Set the default gateway with the router IP

### Routing table

| Device            | LAN IP Address   | Subnet Mask       |
|-------------------|------------------|-------------------|
| Router            | 192.168.1.254    | 255.255.255.0     |
| PC-Robert         | 192.168.1.10     | 255.255.255.0     |
| PC-Camille        | 192.168.1.11     | 255.255.255.0     |
| PC-Renaud         | 192.168.1.12     | 255.255.255.0     |




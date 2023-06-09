# Gain ROOT privilege

First time to try gaining acces to the root privilège of the device.

## First attempt
I start by trying common password using like root | root or admin | admin and i finaly found the password like that.
In this case it was toor.

So the escalation was possible because of poor security and human mistake.

## Second attempt
It was ok to guess the password, but i wanted to find an other way to gain root privilege. 
So i start by doing a scan of the device with LinPEAS and after that just check the different CVE that was showed to me.

### How to

1. [Run LinPeas](https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS) 
2. Check for the RED/YELLOW  (not so much here)
3. Check the possible Exploit
	1. Try Dirtyc0w (not working)
	2. Try sudo Baron Samedit (not working)
	3. Try Pwnkit (working)
		1. Clone the github [CVE-2021-4034](https://github.com/berdav/CVE-2021-4034) on the device
		2. execute it `./CVE-2021-4034 make`
		3. make a `whoami` to verify
		4. it's done

![Alt text](https://camo.githubusercontent.com/6938b7b72057ec15b07e3e751d486ecfb812a6899a52957e8bdb944dd7cdceb3/68747470733a2f2f692e70696e696d672e636f6d2f373336782f62302f33332f38372f62303333383735353235376633343836386538383039313636623766313833362e6a7067)


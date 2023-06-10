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


## Third attempt

This time i try an other way to gain acces to root, so i found the setuid can be very help full for that.

### First things to know 
File Info :

`PERMISSIONS HARDLINKS OWNERSuSER OWNERgROUP FILESIZE LASTmODIFYtIME FILEnAME`

Permission for a file look like this : 

| --------------    | User   | Group       | Others |
|-------------------|------------------|-------------------|------|
| Permission           | -rws    | r-s    | r-x  |

Where 

| letter    | signification   |
|-------------------|------------------|
|      r      |  Read  | 
|      w      |  Write  | 
|       x     |  eXecute  | 
|       -     |   cant | 
|       s     |   Setuid | 

When a permission is set to setuid it means every users can run the file as the user owner of it. So if the user is ROOT anybody can run this file as the ROOT.

### How to :

So first find the file with setuid set : `find / -perm 4000 -ls 2>/dev/null`
	`- /4000` is the bitmask for the SetUID bit. 
	
can see the uid of current user with `id`
can 

then i search for SetUId permission on file who's allow me to launch others command or app like bash(or other shell), Python, Pearl, PhP, text editor. 

>For exemple if nano was SetUID set (it's not the case here).
>Can open `/etc/passwd`  and `/etc/shadow`with `nano` and then modify his content. And add a user.
>
>**1° passwd  :**
>-  create a new user with UID=0 (root).**
>user uid : 1000 root euid :0
>
>copy an existant user change name and value of the UID
>`user:x:1000:1000:user,,,:/home/user:/bin/bash` 
>
>to
>
>`newUserName:x:0:0:newUserName,,,:/home/user:/bin/bash`
>
>**2° shadow**
>
>set the same password  (from an user you know) for this new user. Just copy the line and change the name to the newUserName.
>
>**3°Root**
>
>Perform a `su newUserName`



I Can also look on GTFOBins the apps than can be used to privilige escalation. here i saw those possibility on GTFOBins :
- mount
- su
- pkexec
- at

but didn't find a way to gain root privilège like that




![Alt text](https://camo.githubusercontent.com/6938b7b72057ec15b07e3e751d486ecfb812a6899a52957e8bdb944dd7cdceb3/68747470733a2f2f692e70696e696d672e636f6d2f373336782f62302f33332f38372f62303333383735353235376633343836386538383039313636623766313833362e6a7067)


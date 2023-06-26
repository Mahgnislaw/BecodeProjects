**The password for Century3 is the name of the built-in cmdlet that performs the wget like function within PowerShell PLUS the name of the file on the desktop.**

- First i read help about the wget (who's an alias) to see the real name of the cmdlet
	- `get-help wget`
- The name is  "Invoke-WebRequest"
- Then i just make a ls to see files on the desktop, because i'm already on this current path. That return a uniq file named  `443`

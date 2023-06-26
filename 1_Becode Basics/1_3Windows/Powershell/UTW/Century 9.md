**The password for Century10 is the 161st word within the file on the desktop.** 


- so we need the 161st word and not line so need to make some adjustement
- first we want to print the word into the file so use `cat` and add a parameter to it `-raw` this parameter took the content of the file as a single line
- no we need to cut this line into words so use the parameter `-split '\s+'` . the `'\'s+'` part signify that the delimiter of words is a space.
- Now we need to print the 161st word so we use `select -index 160` (160 and not 161 because the index start at 0 and not 1)

> `(cat Word-File.txt -raw) -split '\s+' | select -index 160`
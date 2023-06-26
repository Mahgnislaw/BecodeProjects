**The password for Century8 is in a readme file somewhere within the contacts, desktop, documents, downloads, favorites, music, or videos folder in the user’s profile**

- First step find the readme file location. Don't check manually all directory. We can find it with the ls command like this `ls -path C:\users\century7\ -recurse readme.txt`
	- use `path` to specify the begining of the search and add after it the parameter `-recurse` to make a recursive search
	- add at the end of de command the name of the file we're looking for here `readme.txt` (probably a txt file bc the password is in it)

-  so that give us the location of the file just need to print it with a `cat C:\users\century7\Downloads\Readme.txt`

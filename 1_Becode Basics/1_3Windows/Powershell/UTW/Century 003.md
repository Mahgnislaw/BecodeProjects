**The password for Century4 is the number of files on the desktop.**

- I made a `ls` but there's a lot of files. So it's not working i need to use a cmdlet that gonna count that for me.
- I found that command `(ls | measure-object).count`
	- Need to use `()` to make sure we group the command and count the ls output (not strictly necessary here, but can be usefull to control order of operations. Good behavior to always use it)
	- `ls` alias for `get-childitem` that retrieve a list of item from the directory
	- `|` is a pipe like in linux and redirect the output from the previous command to the next one
	- `measure-object` calculate the number of objects in the input
	- `.count` parameter for `measure-object` so count the number of object in the input
- The response is `123`
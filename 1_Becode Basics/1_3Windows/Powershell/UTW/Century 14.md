**The password for Century15 is the number of times the word “polo” appears within the file on the desktop.**

- First i save the content of the file into a variable  where i use the split parameter. `$filecontent = (cat countpolos -raw) -split '\s+'`
- then i search for the word polo into this variable `$filecontent | select-string -pattern "polo"` in the result i saw some word with the sequence polo in it like "carPOLOgically" so if a count that i gonna have a bad count. Ok so i i put polo bewten \b it's seems working so the correct command is `$filecontent | select-string -pattern \bpolo\b`
- Now i need to count so as always use `measure-object` and `.count`

> `$filecontent = (cat countpolos -raw) -split '\s+'`
> `($filecontent | select-string -pattern \bpolo\b | measure-object).count`
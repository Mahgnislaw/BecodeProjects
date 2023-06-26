**The password for Century14 is the number of words within the file on the desktop.**

This one is not so complicated i use command part used before on the lvl 8 and 9

- We have a text file and we need to count the words in it. So first thing made a one line file and separate the word. So use `(cat countmywords -raw) -split '\s+'`  (like exercice 9)
- After that need to count each word so for that we use the command as exercice 8 `measure-object` with parameter `.count`
- Put everything between parenthese exept the `.count`

> `((cat countmywords -raw) -split '\s+' | measure-object ).count`
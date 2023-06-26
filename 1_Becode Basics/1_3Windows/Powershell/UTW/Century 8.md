**The password for Century9 is the number of unique entries within the file on the desktop.**

- We need to count so we gonna use the `measure-objet` and the `.count`
- We need to count that from the text in file so tha command should begon with the `cat namefile` command.
- Last need to just count the unique entrie for that use the command `select` with the parameter `-unique`

> `(cat unique.txt | select -unique | measure-object).count`

ps: Here no need to sort the list before using a -unique as we have to do in linux
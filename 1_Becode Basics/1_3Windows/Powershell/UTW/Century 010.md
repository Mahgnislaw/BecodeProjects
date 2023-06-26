**The password for Century11 is the 10th and 8th word of the Windows Update service description combined PLUS the name of the file on the desktop.**

Gonna use variable to stock information so to call a variable juste do a `$NameOfVariable =`

- first need to collect the information about windows update service for that use the command `get-wmiobject -class win32_seervice -filter "name = 'wuauserv'"` dont forget to store those informations into a variable so in the begining of this line of command something like `$service =`
- but there is much more information in this variable than the description so extract the description to another variable `$description = $service.description`
- The variable `$description` if full of a text and we just need some words so like before we have to cut this text into words and store that in a variable for that use the `-split`  parameter like this `$words = $description -split '\s+'`
- then we need to print the 10st and 8st word (don't forget the index begin at 0 not 1) so we just put `$words[9], $words[7]` 
- Finaly check for the name of the file on the desktop with `ls`
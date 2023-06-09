### 1. Search all sequences containing "Loxondota" in `/home/student/lorem.txt`
    `grep "Loxondota" /home/student/lorem/txt`
 > Flag : BC{GREP_ME_LOREM_FL4G}
    
### 2. Copy the file /etc/passwd to your home directory. Display the line starting with `student` name.
**How to:**

To search line starting with specific word use `grep` and just add a `^` in front of the word 

> Your commands : 1° copy `cp /etc/passwd /home/student`
 2° search `grep "^student" passwd`
    
### 3. Display the lines in the passwd file starting with login names of 3 or 4 characters.
**How to:**

- Use `grep` with the `-E` option that allo to specify a range of characters (here 3 or 4) and put this range betwen {}
- For line starting with something use again `^`
- the line as to start with a name so range of letter(lower or uppercase) so use `[a-zA-z]`
- ad `:` at the end of the grep research because in this field an user name end with it
- 
   
 > Your commands : `grep -E "^[a-zA-Z]{3,4}:" /etc/passwd`
    
### 4. In the file `/home/student/sample.txt` how many different values are there in the first column? in the second?
**How to**

**1° Takecolumn** 
- `cut`  command allow to isolate a column. Add it `-d` the option who's specify the character who's ending the column, here in this files its `,` then need to add an other option to specify the column we want using `-f numberOfColumn` . That giving us the first part `cut -d ',' -f 1` (for the first column, for the second one replace the `-f 1` by `-f 2`)
**2° Erase duplicata and count unique line**
Multiple actions so use pipe
- First pipe gonne be `sort -u`. `sort` put the content of the column in alphabetical order and the option `-u` remove duplicata.
- Second pipe we need to count so use the line so use `wc` but we just need the numbers of line and not the numbers of characters or whatever so use with the option `-l`

> Your response :  First column : 4 Second column : 4
 > Your command :
 > 1° column : `cut -d ' ' -f 1 /home/student/sample.txt | sort -u | wc -l`
 > 2° column : `cut -d ' ' -f 2 /home/student/sample.txt | sort -u | wc -l`

### 5. In the file `/home/student/sample.txt` sort the values in the second column by frequency of occurrence. (uniq -c can be useful)
**how to:**

**1° Take column**
- Like previously select the second column `cut -d ',' -f 2`
- Use `uniq -c` to count the the frequency of each unique value. **but** in order to use `uniq` need to sort the column first so puting a pipe with `sort` before the `uniq` pipe.
- Then need to sort the output by frequency so add a last pipe with `sort -r` i use the `-r` option to reverse the output of `sort` so the outpur gonna be in descending order.
    
  > Your response :    
 4 : 20
 2 : 10
 1 : 30
 1 : 11
 > Your command : `cut -d ',' -f 2 | sort | uniq -c | sort -r`
    
### 6. In the file `/home/student/iris.data` Change the column separator (comma) to tab (make sure that the changes are applied to the file)
**How to:**
- Use `sed` the command who's using for text manipulation the manipulation gonna be betwin `''`
- So we need to make a substitution of character so use `s`
- Use / the pattern to be match here `,` and tab who's write like `\t` so the command to replace comma by tab is `/,/\t/`
- need to do that for each occurence so add a `g` for global. (don't forget the /)

  > Your command : `sed 's/,/\t/g iris.data`
    
### 7. In the file `/home/student/iris.data`, extract from this file the column 3 (petal length in cm) (use cut )
**How to:**
- use `cut` to take a column, here we want the third one so `-f 3` because those column is separate by a tab no need to use `-d`
- put this entry in a new file 


 > Your command : `cut -f 3 iris.data > petal.txt`
    
### 8. In the file `/home/student/iris.data`, count the number of flower species (cut and uniq)
**How to:**

- Same as the exercices 4
 
 >your response : 3
 Your command : cut -f 5 iris.data | sort -u | wc -l
    
### 9. In the file `/home/student/iris.data`, sort by increasing petal length (see sort options)
**How to :**
- Use `sort` first need to specify the column we sort, like with `cut` we also need to specify the separaor but the synthax is different. With sort use `-t $'separator'` here the separator is tab sor `-t $'\t'` . Next the column, with sort specify the column like this `-knumberOfColumn,numberOfColumn`  here the third one so `-k3,3` 

 
> Your command :  `sort -t $'\t' -k3,3  iris.data`
    
### 10. In the file `/home/student/iris.data`, show only lines with petal length greater than the average size
    
 > Your response :  **BORING**
> Your command : 
    
### 11. Using `/etc/passwd`, extract the user and home directory fields for all users on your student machine for which the shell is set to `/bin/false`.
**How to :**
- use `awk` for scanning and set the field separator a bit like column separator with `cut` and `sort` the syntax here with awk is `-Fseparator` in this case the separator are : so `-F:` 
- the shell info are in the seventh column so need to check if the content of the seventh column = /bin/false to specify a column us `$numberOfColumn` here `$7` and his to check if the content is the one we need add `== "contentWeLook"` so `== "/bien/false"`
- we want to print the user and home directory so those value are respectivly on the first ans on the sixth column. To specify that add `{print $1, $6}`

 > Your command : `awk -F: '$7 == "/bin/false" {print $1, $6}' /etc/passwd`
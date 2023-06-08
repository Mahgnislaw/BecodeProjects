### 1. Create a file named `my-file.txt` with the touch command. Then execute the `locate my-file.txt` command. Do you find the file?
    
 > Your response : no
    
### 2. Run the command sudo `updatedb`. And run the locate my-file.txt command again. Do you find your file ?
    
 > Your response : yes `/home/student/my-file.txt/home/student/my-file.txt`
    
### 3. With the command `which`, find the executable file nc and indicate the path
    
> Path : `/bin/nc`
    
### 4. With the command `which`, find the executable file becode. What is the flag ?
    
> Flag : BC{WH1CH_FL4G_EXECUTLE_FILE}
    
### 5. Search with `find` command for a file that contains the name "Edgar Allan Poe". What is the flag ?

**How to :** 
**1° Find file**
- Need to use find to search on all directories so use `find /`
- Need to search for file so need to add `-type f`
- Want to search on each file if the word "Edgar Allan Poe" is there. So to apply a specific task to all file find use `-exec` than add to it what to do, here search for words so using grep `grep "Edgar Allan Poe"`  **but** we want to print those filename so we need to add an option to it, the -l gonna print the filename : `grep -l "Edgar Allan Poe"`.
- Then need to put `{}` a the of the command. This represent the file `find` gonne find and replace the bracket with the name of the file before the grep option go throught it.
- Add at the end `\;` that allows find to know the grep option is finished
- Can also add `2>/dev/null` at the end of it, just to not show the file with persmission denied

=> `find / -type f -exec grep -l "Edgar Allan Poe" {} \; 2>/dev/null`

 **2° Read file**
- Read the file and look for flag so here i make a `nano /var/www/index.html `

> Flag : BC{3d54r_4ll4n_P03_FL45}

### 6. Using the `find` command, find the file password.txt and specify the flag.
    
**How to:**
**1° Find the file**
- Use find and search for all file in all directories so as before `find / -type f`
- But need to fin a specific name so use the option `-name "nameOfFile"`
- and can add `2>/dev/null` to hidde file without permission 

 `file / -type f -name "password.txt" 2>/dev/null`

**2° Read the file**

`nano /var/www/html/a/b/c/d/e/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/password.txt`


> Flag : BC{PASSWORD_FILE}

### 7. With the command `find`, find a file that starts with `becode-` and ends with `.sh`.

**How to:**
**1°Find the file**
- As usual search on every directories for files
- Need partial name so use again `-name` but the syntax change when writing the name because i know the begining and the name of the file. In fact can use the * to represent any character so i write the name like `becode-*.sh`

 `find / -type f -name "becode-*.sh" 2>/dev/null`

> Flag : BC{FLAG_FIND_PARTIAL_PATH}


### 8. Using the `find` command to identify any file (not directory) modified in the last day, NOT owned by the root user and execute ls -l on them. **Chaining/piping commands is NOT allowed!**

**How to:**
- As usual `find / -type f`
- to find modified file the option is `-mtime` who need a time (last 24h, last 7days, 30days,...). 0=24hours  so here to see file modified the last 24hours i use `-mtime 0` . **Good to know** can search for file modified more than x days just put `+` before the number. To search a file modified in the last x days just put a `-` before the number
- Don't want the files owned by the root so, for a not use `!` and then the option so to specify a user juste use `-user nameOfUser`
- As in the exercice 5 we need to perform another task to find so i use `-exec` like before and add the second task `ls -l`
- /!\ don't forget the `{} \;`

> Your command : `find / -type f -mtime 0 ! -user root -exec ls -l {} \; 2>/dev/null`
    
### 9. With the find command, find all the files that have an authorization of `0777`.

**How to:**
- as usual `find / -type f`
- For specific permission use `-perm specificPermision`

> Your command : find / -type f -perm 0777

### 10. With the find command, find all the files in the folder `/home/student/findme/` that have an authorization of `0777` and change the rights of these files to `0755`
- Start like previous exercices but with a specific path rather than all directories so `find /home/student/findme/`
- the file with the permission 0777 `-perm 0777`
- Make another task so use `_grep_`
- Change permission of file using `-chmod newPermission` 
- /!\ dont forget `{} \;`

    > Your command :  `find /home/student/findme/ -type f -perm 0777 -exec chmod 0755 {} \;`

### 1. Write the message "hello everyone" in a file called "test" by redirecting the output of the echo command.
  
 > Your command : `echo "hello everyone" > test`
 
### 2. Write the message "goodbye" in the same file "test" by redirecting the output of the echo command and without overwriting the content of "test" and check with the cat command
    
> Your command : `echo "goodbye" >> test`
    
### 3. Make the `ls -la` command redirect to the `foo` file
    
> Your command : `ls -la > foo`
    
### 4. Execute `find /etc -name *conf*` command and redirect errors (only errors) to a file named err.txt
To redirect error just use `2>`

 > Your command :  `find /etc -name *conf* 2> err.txt`
    
### 5. Repeat the previous exercise, this time redirecting the errors to the linux nothingness.
The nothingness stay at `/dev/null` special place that discards data written to it and provide no output. Silence the error or unwanted file.

 > Your command : `find /etc -name *conf* 2> /dev/null`
    
### 6. Now redirect the standard output and the error output of the `find /etc -name *conf*` command to two different files (std.out and std.err)
Can make 2 redirection 

 > Your command : find /etc -name *conf* > std.out 2> std.err


### 7. Create a pipe named "MyNamedPipe". Then execute the pwd command which will transmit the data in this pipe. Then use the cat command to read the contents of your "MyNammedPipe" pipe.

>- 1°  Creates the pipe so use `mkfifo MyNamedPipe`
>- 2° need to be done in a second terminal session: `echo "$(pwd)" > MyNamedPipe`
>- 3° `cat < MyNamedPipe`

    
### 8. With cat command, add number the lines in the file /etc/passwd with the command `nl`
The `-n` option add numbers to the line, can be use without `cat` just by `nl fileName`
  > Your commands : `cat -n /etc/passwd`
    
### 9. Using the previous nl command, the head and tail commands, display the lines of /etc/passwd between line 7 and line 12
- the `head -n` command select the first line, here we want the 12 first line so write  `head -n 12`
- but we dont want the line one to six so we pipe a `tail -n +` that says to start at the seventh line `tail -n +7`
   
 > Your commands : `nl /etc/passwd | head -n 12 | tail -n +7`

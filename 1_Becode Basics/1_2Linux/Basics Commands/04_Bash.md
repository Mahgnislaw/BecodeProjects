### 1. On your student machine what is the value of the FLAG environment variable ?

> FLAG : BC{EXPORT_B4SH_FLAG}

### 2. Currently if you notice your machine, the variable you have created will be deleted. What should you do to make your variable persistent? (With a Bash shell).

- Need to export the variable to ~/.bashrc
- Open `~/.bashrc`  with nano and add the variable export a the end of the file `export My_Variable="My_Value"`
- run `source ~/.bashrc`
- As for `~/.bashrc` ad the export variable to `~/.bashrc.profile` and `~/.bashrc_login` and to make it persistent for all user can be do on `/etc/profile` too

### 3. **From a hacker's perspective**, look for information that might be useful to you in the `.history` file.

> Your answer

### 4. **From an analyst's perspective**, look for information that might be useful to you in the `.history` file.

> Your answer


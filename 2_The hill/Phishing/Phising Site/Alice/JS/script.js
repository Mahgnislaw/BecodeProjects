  function sendFormData() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
  
    fetch(form.action, {
      method: form.method,
      body: formData
    })
      .then(function(response) {
        if (response.ok) {
          console.log('Form data sent successfully!');
        } else {
          console.error('Error sending form data:', response.statusText);
        }
      })
      .catch(function(error) {
        console.error('Error sending form data:', error);
      });
  }
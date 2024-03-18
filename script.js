// JavaScript for Grow Trend Media website

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form inputs
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
  
    // Validate form inputs (you can add more validation as needed)
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return;
    }
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      return;
    }
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      return;
    }
  
    // Construct form data
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
  
    // You can now send this formData to your backend using AJAX/fetch or any other method
    // For example:
    /*
    fetch('https://example.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
      alert('Form submitted successfully!');
      // Optionally, reset the form after successful submission
      document.getElementById('contact-form').reset();
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    });
    */
  
    // For demonstration purposes, we'll just show an alert
    alert('Form submitted successfully!');
    // Optionally, reset the form after successful submission
    document.getElementById('contact-form').reset();
  }
  
  // Add event listener to form submit button
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
  
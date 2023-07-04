// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get form input values
    const venue = document.getElementById("venue").value;
    const date = document.getElementById("date").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const eventDetails = document.getElementById("eventDetails").value;
  
    // Perform validation and further processing
    if (validateEmail(email)) {
      // Display success message
      const availabilityDiv = document.getElementById("availability");
      availabilityDiv.innerHTML = `
        <p>Booking Successful!</p>
        <p>Details:</p>
        <ul>
          <li>Venue: ${venue}</li>
          <li>Date: ${date}</li>
          <li>Name: ${name} ${surname}</li>
          <li>Email: ${email}</li>
          <li>Event Details: ${eventDetails}</li>
        </ul>
      `;
    } else {
      // Display error message for invalid email
      const availabilityDiv = document.getElementById("availability");
      availabilityDiv.innerHTML = "<p>Please enter a valid email address.</p>";
    }
  }
  
  // Function to validate email address
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Add form submission event listener
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", handleSubmit);
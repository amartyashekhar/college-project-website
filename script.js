// Handles mobile hamburger menu toggle states
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// Automated API script to dispatch WhatsApp messages via CallMeBot on form submission
async function automatedWhatsApp(event) {
    event.preventDefault(); // Prevents the default browser form submission page reload
    
    // Extract input string values cleanly from the DOM elements
    const parentName = document.getElementById('parentName').value;
    const studentName = document.getElementById('studentName').value;
    const address = document.getElementById('address').value;
    const schoolInfo = document.getElementById('schoolInfo').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;

    // Construct a well-formatted, plain-text template message payload
    const message = `✨ *New Registration: Happiee Ride* ✨\n\n` +
                    `👤 *Parent:* ${parentName}\n` +
                    `👶 *Student:* ${studentName}\n` +
                    `📞 *Phone:* ${phoneNumber}\n` +
                    `📧 *Email:* ${emailAddress}\n` +
                    `🏠 *Address:* ${address}\n` +
                    `🏫 *School:* ${schoolInfo}`;

    // CONFIGURATION SETUP: Replace your API token here
    const apiKey = "YOUR_API_KEY"; 
    const phone = "919334411319"; // Target WhatsApp recipient phone number with country code
    
    // URL string compilation with standard text URI escaping
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    try {
        // Dispatches the background cross-origin web request without blocking interface execution loops
        await fetch(url, { mode: 'no-cors' });
        
        alert("Registration details submitted successfully via WhatsApp!");
        document.getElementById('parentForm').reset(); // Clear user text fields
        window.location.href = "index.html"; // Redirect user back to the home landing view
    } catch (error) {
        console.error("Submission Error Details:", error);
        alert("Something went wrong while executing submission. Please try again.");
    }
}

// Safely initializes and hooks the submit listener once the browser processes the document
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('parentForm');
    if (form) {
        form.addEventListener('submit', automatedWhatsApp);
    }
});
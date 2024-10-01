document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Validate password match
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        password: password,
        mobile: document.getElementById('mobile').value,
        nitrogen: document.getElementById('nitrogen').value,
        phosphorus: document.getElementById('phosphorus').value,
        potassium: document.getElementById('potassium').value,
        temperature: document.getElementById('temperature').value,
        humidity: document.getElementById('humidity').value,
        phLevel: document.getElementById('phLevel').value,
        rainfall: document.getElementById('rainfall').value
    };

    // Mock submitting to server (AJAX or fetch can be used here for real server interaction)
    console.log('Form Data Submitted:', formData);

    alert('Sign Up Successful!');

    // Reset form after submission
    document.getElementById('signupForm').reset();
});

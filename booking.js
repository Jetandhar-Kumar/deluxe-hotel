

// this will redirect to home screen
document.getElementById("home").addEventListener("click", function () {
    window.location.href = "index.html"
})

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Name validation
    let name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone validation (only numbers, 10+ digits)
    let phone = document.getElementById('phone').value;
    let phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Date validation
    let checkin = document.getElementById('checkin').value;
    let checkout = document.getElementById('checkout').value;
    if (checkout && checkin && new Date(checkout) <= new Date(checkin)) {
        document.getElementById('dateError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('dateError').style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
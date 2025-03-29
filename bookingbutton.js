
// this code adds an event listener to the button with the ID "header-but1". When the button is clicked, it redirects the user to "booking.html".
document.addEventListener("DOMContentLoaded", function () {
    const headerButton = document.getElementById("header-but1");
    headerButton.addEventListener("click", function () {
        window.location.href = "booking.html";
    });
});

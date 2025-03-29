// this code is shows and hides the contact form when the button is clicked
document.getElementById('showcontactform').addEventListener('click', function () {
    var form = document.querySelector('.contact-form');
    form.classList.toggle('hiddenform');
});
document.getElementById('header-but1').addEventListener('click', function () {
    window.location.href = 'booking.html';
});

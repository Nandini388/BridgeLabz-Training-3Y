let form = document.querySelector("#bookingForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let seats = Number(document.querySelector("#seats").value);

    let nameReg = /^[A-Za-z ]+$/;
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameReg.test(name) &&
        emailReg.test(email) &&
        Number.isInteger(seats) &&
        seats >= 1 && seats <= 10) {

        let booking = {
            name: name,
            email: email,
            seats: seats
        };

        document.querySelector("#result").innerHTML =
            `Name: ${booking.name}<br>
             Email: ${booking.email}<br>
             Seats: ${booking.seats}`;

    }
    else {
        alert("Invalid Details");
    }
});
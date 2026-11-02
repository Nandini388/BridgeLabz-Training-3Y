let form = document.querySelector("#myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let password = document.querySelector("#password");

    let nameReg = /^[A-Za-z]+$/;
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneReg = /^[0-9]{10}$/;
    let passReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$/;

    let fields = [
        [name, nameReg],
        [email, emailReg],
        [phone, phoneReg],
        [password, passReg]
    ];

    fields.forEach(function(item) {
        if (item[1].test(item[0].value)) {
            item[0].style.border = "2px solid green";
        }
        else {
            item[0].style.border = "2px solid red";
        }
    });
});
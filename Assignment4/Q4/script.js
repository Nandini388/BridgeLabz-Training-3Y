class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let form = "<form id='myForm'>";

        this.fields.forEach(field => {
            form += `
                <label>${field.label}</label><br>
                <input type="${field.type}" name="${field.label}"><br><br>
            `;
        });

        form += "<button type='submit'>Submit</button>";
        form += "</form>";

        document.querySelector("#formContainer").innerHTML = form;

        document.querySelector("#myForm").addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(this.getFormData());
        });
    }

    getFormData() {
        let data = {};

        this.fields.forEach(field => {
            data[field.label] = document.querySelector(
                `[name="${field.label}"]`
            ).value;
        });

        return data;
    }
}

let fields = [
    {type: "text", label: "Username"},
    {type: "email", label: "Email"},
    {type: "password", label: "Password"}
];

let form = new FormBuilder(fields);
form.createForm();
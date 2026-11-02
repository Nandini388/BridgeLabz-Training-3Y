class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}

let p1 = new Product(1, "Laptop", 50000, "Electronics");
let p2 = new Product(2, "Mouse", 500, "Electronics");
let p3 = new Product(3, "Phone", 20000, "Electronics");
let p4 = new Product(4, "Book", 300, "Education");

let products = [p1, p2, p3, p4];

p1.applyDiscount();
p2.applyDiscount();

let result = products.filter(product => product.price > 1000);

result.forEach(product => {
    console.log(product.displayDetails());
});
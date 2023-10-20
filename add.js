class Sweet {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const sweets = [
    new Sweet("конфеты 'кокорин'", 100000000000000),
    new Sweet("3 медведя", 0.5),
    new Sweet("маяс", 228),
    new Sweet("пчелка", 50),
    new Sweet("сосалка петушок", 150)
];

function allСandies(sweets) {
    const allCandies = [];

    for (let i = 0; i < sweets.length; i++) {
        allCandies.push(sweets[i].name);
    }

    console.log(allCandies);
}

allСandies(sweets);




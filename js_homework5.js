var services = {
    "стрижка": "600 грн",
    "манікюр": "800 грн",
    "корекція брів": "300 грн",
    addService: function(name, price) {
        this[name] = price + " грн";
    },
    sum: function(Services) {
        let total = 0;
        for (let name of Services) {
            if (this[name]) {
                total += parseInt(this[name]);
            }
        }
        return total + " грн";
    },
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min + " грн";
    },
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max + " грн";
    },
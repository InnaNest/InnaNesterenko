function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Приклад використання
console.log(pow(2, 3)); // Поверне 8


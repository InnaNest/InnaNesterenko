var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

var trustedEmails = arr
    .map(function(obj) {
        return obj.email; // Отримуємо лише email-адреси
    })
    .filter(function(email) {
        return /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-z]+\.(gmail\.com|yahoo\.com)$/.test(email); // Перевірка
    });

console.log(trustedEmails);
const emails = [
    "doctor@gmail.com",
    "Учитель@yahoo.com",
    "engineer@outlook.com",
    "artist@mail.ru",
    "chef@icloud.com",
    "lawyer@mail.ru",
    "designer@yahoo.com",
    "pilot@ya.ru",
    "writer@gmail.com"
];
const domainCheck = /@(gmail\.com|yahoo\.com)$/;
const validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validEmails = emails.filter(email => validationRegex.test(email) && domainRegex.test(email));
console.log(validEmails);

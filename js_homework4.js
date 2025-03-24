function checkProbabilityTheory(count) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    let oddPercentage = ((odd / count) * 100).toFixed(2);
    let evenPercentage = ((even / count) * 100).toFixed(2);
    return `Кількість згенерованих чисел: ${count}
Парних чисел: ${even}
Непарних чисел: ${odd}
Відсоток непарних чисел: ${oddPercentage}%
Відсоток парних чисел: ${evenPercentage}%`;
}




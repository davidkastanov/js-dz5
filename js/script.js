//Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const a = Number(prompt("Вибери число зі списка \n1. Кава\n2. Чай\n3. Сік"));
switch (a) {
    case 1:
        console.log(`Ти вибрав каву`);
        break;
    case 2:
        console.log(`Ти вибрав чай`);
        break;
    case 3:
        console.log(`Ти вибрав сік`);
        break;
    default:
        console.log(`Сталась помилка, спробуй пізніше :0`);
}





//Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const days = Number(prompt("Виберіть день числом: \n1. Понеділок\n2. Вівторок\n3. Середа\n4. Четвер\n5. П'ятниця\n6. Субота\n7. Неділя"));
switch (days) {
    case 1:
        console.log("Ти вибрали робочий день");
        break;
    case 2:
        console.log("Ти вибрали робочий день");
        break;
    case 3:
        console.log("Ти вибрали робочий день");
        break; 

    case 4:
        console.log("Ти вибрали робочий день");
        break;
    case 5:
        console.log("Ти вибрали робочий день");
        break;
    case 6:
        console.log("Ти вибрали вихідний день");
        break;

    case 7:
        console.log("Ти вибрали вихідний день");
        break;
    
    default:
        console.log("Сталась помилка, спробуйте пізніше");
}






//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const month = Number(prompt("Вибери місяц року"));
switch (month) {
    case 1:
        console.log("Це зима!");
        
        break;
    case 2:
        
        console.log("Це зима!");
        break;
    case 3:
        console.log("Це весна!");
        break;

    case 4:
        console.log("Це весна!");
        break;
    case 5:
        console.log("Це весна!");
        break;
    case 6:
        console.log("Ура, літо");
        break;
    case 7:
        console.log("Ура, літо");
        break;
    case 8:
        console.log("Ура, літ");
        break;
    case 9:
        console.log("Вже осінь :(");
        break;

    case 10:
        console.log("Вже осінь :(");
        break;

    case 11:
        console.log("Вже осінь :(");
        break;
    case 12:
        console.log("Це зима!");
        break;

    default:
        console.log("Сталась помилка, спробуй пізніше! :0");

}







//Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = Number(prompt("Введіть число: \n1. Червоний\n2. Зелений\n3. Жовтий"));
switch (color) {
    case 1:
        console.log("Стоп");
        break;
    case 2:
        console.log("Іди");
        break;
    case 3:
        console.log("Зачекай");
        break;
    default:
        console.log("Сталась помилка, спробуй пізніше");

}







// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const num1 = Number(prompt("Введи перше число "));
const operator = prompt("Вибери операцію \n+\n-\n*\n/");
const num2 = Number(prompt("Введи друге число "));

switch (operator) {
    case "+":
        console.log(`Результат ${num1 + num2}`);
        break;
    case "-":
        console.log(`Результат ${num1 - num2}`);
        break;
    case "*":
        console.log(`Результат ${num1 * num2}`);
        break;
    case "/":
        console.log(num2 === 0 ? "На нуль ділити не можна" : `Результат ${num1 / num2}`);
        break;
    default:
        console.log("Сталась помилка, спробуй пізніш! ");
}


let money = prompt('Сколько денег у тебя мразь', "");
let Date = prompt("Введите дату в формате YYYY-MM-DD", "");
let arr = [];
let func = {
     ras: prompt('Введите обязательную статью расходов в этом месяце', ""),
     total:prompt('Во сколько обойдется?', "")
}
let appData = {
    timeData: Date,
    Money: money,
    expenses: func,
    optionalExpenses: "",
    income: arr,
    savings: false
}


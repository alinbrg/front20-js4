// 1. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 50; i++) {
	console.log(i);
}

console.log("for end");
// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i < 20) {
	console.log(i);
	i++;
}
console.log("while end");

// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
let j = 0;
do {
	console.log(j);
	j++;
} while (j < 30);

console.log("do while end");

// 4. მოცემული გვაქვს მასივი const numbers = [1,2,5,7,8,10,23,24,26]. for ლუპის
// დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან
// მხოლოდ ლუწი რიცხვები.

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
const numbersLength = numbers.length;

for (let index = 0; index < numbersLength; index++) {
	if (numbers[index] % 2 === 0) {
		console.log(numbers[index]);
	}
}

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;
// currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის
// ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა
// 	მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის
// 	შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და
// 	ასე შემდეგ 6 - შაბათი.

const currentDay = new Date().getDay();
let day = "";

switch (currentDay) {
	case 0:
		day = "კვირა";
		break;
	case 1:
		day = "ორშაბათი";
		break;
	case 2:
		day = "სამშაბათი";
		break;
	case 3:
		day = "ოთხშაბათი";
		break;
	case 4:
		day = "ხუთშაბათი";
		break;
	case 5:
		day = "პარასკევი";
		break;
	case 6:
		day = "შაბათი";
		break;

	default:
		break;
}

console.log(day);

// 6. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი app.js სადაც გვაქვს
// ვალუტების მასივი (currencies). გადააკოპირეთ ეს მასივი თქვენთან. შემდეგ დაწერეთ
// loop (for ან while)  და მასივის თითოეულ ელემენტზე შეამოწმეთ rate   პარამეტრის
// მნიშვნელობა თუ არის მეტი 5-ზე. თუ 5-ზე მეტია, კონსოლში გამოიტანეთ ასეთი ვალუტების
// სახელი და rate   პარამეტრის მნიშვნელობა (მთლიანი ობიექტი არა).

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

const currenciesLength = currencies.length;

for (let index = 0; index < currenciesLength; index++) {
	if (currencies[index].rate <= 5) {
		console.log(currencies[index].name, currencies[index].rate);
	}
}

let someText = "text";

// scopes
if (true) {
	someText = "new text";

	console.log(someText);
}

console.log(someText);

const num = 10;

if (true) {
	const num = 30;
	if (true) {
		const num = 20;
	}
	if (true) {
		// const num = 15;
		console.log(num);
	}
}

// functions

function printHello(userName = "", userAge = 0) {
	console.log("hello", userName, userAge);
}

const userName = "lela";

printHello(userName, 26);
printHello("nika", 30);
printHello();
printHello("lasha");

console.log(sum(3, 10));

function sum(a, b) {
	return a + b;
}

const sumFunction = function (a, b) {
	console.log("sumfunction");
};

sumFunction();

const sumArrowFunction = (a, b) => {
	console.log("arrow function");
};

sumArrowFunction();

const sum1 = sum(2, 4);
const sum2 = sum;

console.log(sum(2, 6));

console.log(currencies);

// array methods
currencies.forEach((element, index, array) => {
	console.log(element.name, index);
});

const filteredCurrencies = currencies.filter((el) => {
	return el.rate > 5;
});

console.log(filteredCurrencies);

const firstElFind = currencies.find((el) => {
	return el.rate < 5;
});

console.log(firstElFind);

const newMappedCurrenciesArray = currencies.map((el, i, arr) => {
	return el.name;
});

console.log(newMappedCurrenciesArray);

const isSomeCurrencyMoreThan5 = currencies.some((el) => {
	return el.rate > 5;
});

console.log(isSomeCurrencyMoreThan5);

const isEveryCurrencyMoreTha5 = currencies.every((el) => {
	return el.rate > 5;
});

console.log(isEveryCurrencyMoreTha5);

const numberToString = numbers.join();
const numberToString2 = numbers.join("????");

console.log(numberToString2);

const chars = "ab cd ef gh ij kl,mop,qrstuvwxyz";

const stringToArr = chars.split(",");
const stringToUpperCase = chars.toUpperCase();
const stringToLowerCase = chars.toLowerCase();

console.log(stringToArr);

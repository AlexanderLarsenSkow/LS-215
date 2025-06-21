// Inventory Item Availability

/*
input: queryId (number) and list of transactions, array of objects
output: true or false

Rules:
	- return true if the sum of the queryId list is greater than 0
	- else return false

	if the movement property is 'out', it is negative
	else, it is positive.

Examples:
	const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false + 5, + 12, - 18 === -1
isItemAvailable(105, transactions);     // true + 10, + 25 === 35

Data Structures:
	- filter out which is nice.
	- map the array based on the quantity and movement properties.
	
Algo:
	- filter out which is nice.
	- map the array based on the quantity and movement properties.
	- if the movement prop is 'out', the quantity is negative
	- else, it's positive.
	- total the array with reduce and return true if greater than 0.
*/

function transactionsFor(queryId, transactions) {
	return transactions.filter(({id}) => queryId === id);
}

const addUp = numbers => numbers.reduce((total, num) => total + num);

function isItemAvailable(queryId, transactions) {
	const items = transactionsFor(queryId, transactions);
	let numbers = items.map(({movement, quantity}) => {
		if (movement === 'out') {
			return -quantity;
		} else {
			return quantity;
		}
	})

	return addUp(numbers) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
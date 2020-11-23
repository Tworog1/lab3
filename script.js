function createNewPass(length , isNumbers, isSymbols) {
	let resultString = '';
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	const symbols = ['!', '?', '@'];

	if (isNumbers) resultString = resultString.concat(setRandomArr(numbers));
	if (isSymbols)	resultString = resultString.concat(setRandomArr(symbols));
	for (let i = 0; i < length - 2; i++) resultString = resultString.concat(setRandomArr(characters));
	return  resultString.split('').sort(() => 0.5 - Math.random()).join('');
}

function setRandomArr(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

createNewPass(16, true, true, (res) => {
	console.log(res);
});

function passwordCallback(callback) {
	const result = createNewPass(16, true, true)
	setTimeout(() => {
		console.groupCollapsed('Task - 1, 2')
		callback(result);
	}, 500);
}

function callback(result) {
	console.log(result);
}

passwordCallback(callback);

function passwordPromis() {
	const promis = new Promise((resolve) => {
		setTimeout(() => {
			resolve(createNewPass(16, true, true));
		}, 500);
	});

	return promis;
}

passwordPromis()
.then(callback)
.catch((err) => console.log(err))
.finally(() => {
	console.groupEnd('Task - 1, 2');
});

const beforeSecondTask = Date.now();
Promise.all([
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback),
	passwordPromis(callback)
])
.then(res => {
	console.groupCollapsed('Task - 3: Promise');
	res.forEach(element => console.log(element));
})
.then(() => {
	const afterSecondTask = Date.now();
	console.log(`Time spend for task (Promise): ${afterSecondTask - beforeSecondTask}`);
	console.groupEnd('Task - 3: Promise');
})
.catch(err => {})

async function passwordAwait() {
	try {
		const res1 = await passwordPromis(callback),
					res2 = await passwordPromis(callback),
		 			res3 = await passwordPromis(callback),
		 			res4 = await passwordPromis(callback),
		 			res5 = await passwordPromis(callback),
		 			res6 = await passwordPromis(callback),
		 			res7 = await passwordPromis(callback),
		 			res8 = await passwordPromis(callback),
				 	res9 = await passwordPromis(callback),
		 			res10 = await passwordPromis(callback);

		console.groupCollapsed('Task - 3: Async/Await');
		console.log(`1 - ${res1}`);
		console.log(`2 - ${res2}`);
		console.log(`3 - ${res3}`);
		console.log(`4 - ${res4}`);
		console.log(`5 - ${res5}`);
		console.log(`6 - ${res6}`);
		console.log(`7 - ${res7}`);
		console.log(`8 - ${res8}`);
		console.log(`9 - ${res9}`);
		console.log(`10 - ${res10}`);
	} catch(err) {
		console.log(err);
	}
}

const beforeThirdTask = Date.now();
passwordAwait().then(() => {
	const afterThirdTask = Date.now();
	console.log(`Time spend for task (Async/Await) -  ${afterThirdTask - beforeThirdTask}`);
	console.groupEnd('Task - 3: Async/Await')
});
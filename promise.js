let stocks = {
	fruits: ['strawberry', 'grape', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanut'],
}

let isShopOpen = false

const order = (work, time) => {
	return new Promise((resolve, reject) => {
		if (isShopOpen) {
			setTimeout(() => {
				resolve(work())
			}, time)
		} else {
			reject(console.log('ice cream shop is closed...'))
		}
	})
}

order(() => console.log(`(${stocks.fruits[0]}) has been selected...`), 2000)
	.then(() => {
		return order(() => console.log('production has been started...'), 0)
	})
	.then(() => {
		return order(() => console.log('the fruit has been chopped...'), 2000)
	})
	.then(() => {
		return order(() => console.log(`(${stocks.liquid[0]}) and (${stocks.liquid[1]}) has been added...`), 1000)
	})
	.then(() => {
		return order(() => console.log('the machine has been started...'), 1000)
	})
	.then(() => {
		return order(() => console.log(`(${stocks.holder[1]}) has been selected for ice cream...`), 2000)
	})
	.then(() => {
		return order(() => console.log(`(${stocks.toppings[0]}) has been added as topping for ice cream...`), 3000)
	})
	.then(() => {
		return order(() => console.log('serving ice cream...'), 2000)
	})
	.catch(() => console.log('the customer left...')) // only runs when "isShopOpen" is "false"
	.finally(() => console.log('end of the day... shop is closing... c u tomorrow... :)')) // runs anyway

let stocks = {
	fruits: ['strawberry', 'grape', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanut'],
}

let isShopOpen = true

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

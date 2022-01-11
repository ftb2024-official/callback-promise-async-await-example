let stocks = {
	fruits: ['strawberry', 'grape', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanut'],
}

let isShopOpen = true

const time = (ms) => {
	return new Promise((resolve, reject) => {
		if (isShopOpen) {
			setTimeout(resolve, ms)
		} else {
			reject(console.log('ice cream shop is closed...'))
		}
	})
}

const order = async () => {
	try {
		await time(2000)
		console.log(`(${stocks.fruits[0]}) has been selected...`)

		await time(0)
		console.log('production has been started...')

		await time(2000)
		console.log('the fruit has been chopped...')

		await time(1000)
		console.log(`(${stocks.liquid[0]}) and (${stocks.liquid[1]}) has been added...`)

		await time(1000)
		console.log('the machine has been started...')

		await time(2000)
		console.log(`(${stocks.holder[1]}) has been selected for ice cream...`)

		await time(3000)
		console.log(`(${stocks.toppings[0]}) has been added as topping for ice cream...`)

		await time(2000)
		console.log('serving ice cream...')
	} catch (error) {
		console.log('the customer left...')
	} finally {
		console.log('end of the day... shop is closing... c u tomorrow... :)') // runs anyway
	}
}

order()

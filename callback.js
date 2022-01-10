let stocks = {
	fruits: ['strawberry', 'grape', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanut'],
}

const order = (fruitIndex, startProduction) => {
	setTimeout(() => {
		console.log(`(${stocks.fruits[fruitIndex]}) has been selected...`)
	}, 2000)

	startProduction()
}

const production = () => {
	setTimeout(() => {
		console.log('production has been started...')

		setTimeout(() => {
			console.log(`the fruit has been chopped...`)

			setTimeout(() => {
				console.log(`(${stocks.liquid[0]} and ${stocks.liquid[1]}) has been added...`)

				setTimeout(() => {
					console.log('the machine has been started...')

					setTimeout(() => {
						console.log(`(${stocks.holder[1]}) has been selected for ice cream...`)

						setTimeout(() => {
							console.log(`(${stocks.toppings[0]}) has been added as topping for ice cream...`)

							setTimeout(() => {
								console.log('serving ice cream...')
							}, 2000)
						}, 3000)
					}, 2000)
				}, 1000)
			}, 1000)
		}, 2000)
	}, 0)
}

order(2, production)

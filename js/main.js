const pricePerViewsData = [8, 12, 16, 24, 36]
const pricePerViewsDataYear = pricePerViewsData.map(x => x * 0.75 * 12)
const pageviewsPerPriceData = ['10K', '50K', '100K', '500K', '1M']
const priceRangeSlider = document.querySelector('#priceRange')
const changePriceInput = document.querySelector('#priceSwitch')
const TextareaPrice = document.querySelector('.slidecontainer__price')
const TextareaPageviews = document.querySelector('.slidecontainer__pageviews')
const windowMediaQuery = window.matchMedia('(min-width: 505px)')

function addDiscountText(e) {
	if (e.matches) {
		document.querySelector('.price-switch__text--discount').textContent = '-25% discount'
	} else {
		document.querySelector('.price-switch__text--discount').textContent = '-25%'
	}
}
addDiscountText(windowMediaQuery)
windowMediaQuery.addListener(addDiscountText)

function changePeriodPrice() {
	if (changePriceInput.checked == true) {
		document.querySelector('.slidecontainer__price--period').textContent = '/ year'
		priceRangeSlider.oninput = function () {
			TextareaPrice.textContent = '$' + pricePerViewsDataYear[this.value].toFixed(2)
			TextareaPageviews.textContent = pageviewsPerPriceData[this.value] + ' pageviews'
		}
		priceRangeSlider.oninput()
	} else {
		document.querySelector('.slidecontainer__price--period').textContent = '/ month'
		priceRangeSlider.oninput = function () {
			TextareaPrice.textContent = '$' + pricePerViewsData[this.value].toFixed(2)
			TextareaPageviews.textContent = pageviewsPerPriceData[this.value] + ' pageviews'
		}
		priceRangeSlider.oninput()
	}
}
changePeriodPrice()

changePriceInput.addEventListener('click', e => {
	const inputChecked = changePriceInput.checked

	switch (inputChecked) {
		case true:
			document.querySelector('.slidecontainer__price--period').textContent = '/ year'
			priceRangeSlider.oninput = function () {
				TextareaPrice.textContent = '$' + pricePerViewsDataYear[this.value].toFixed(2)
				TextareaPageviews.textContent = pageviewsPerPriceData[this.value] + ' pageviews'
			}
			priceRangeSlider.oninput()
			break
		case false:
			document.querySelector('.slidecontainer__price--period').textContent = '/ month'
			priceRangeSlider.oninput = function () {
				TextareaPrice.textContent = '$' + pricePerViewsData[this.value].toFixed(2)
				TextareaPageviews.textContent = pageviewsPerPriceData[this.value] + ' pageviews'
			}
			priceRangeSlider.oninput()
			break
	}
})

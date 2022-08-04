// pageviews
// price
// toggle

const pricePerViewsData = [8, 12, 16, 24, 36]
const pageviewsPerPriceData = ['10K', '50K', '100K', '500K', '1M']
const priceRangeSlider = document.querySelector('#priceRange')
const togglePricePerPeriod = document.querySelector('#priceSwitch')
const TextareaPrice = document.querySelector('.slidecontainer__price')
const TextareaPageviews = document.querySelector('.slidecontainer__pageviews')
const windowMediaQuery = window.matchMedia('(min-width: 505px)')

priceRangeSlider.oninput = function () {
	TextareaPrice.textContent = '$' + pricePerViewsData[this.value].toFixed(2)
}
priceRangeSlider.oninput()

function showPageviewsPerPrice() {
	for (let i = 0; pricePerViewsData.length; i++) {
		// 	TextareaPageviews.textContent = pageviewsPerPriceData[i]

		switch (changePageviews) {
			case 1:
				TextareaPageviews.textContent[i]
				break
		}
	}
}
showPageviewsPerPrice()

function addDiscountText(e) {
	if (e.matches) {
		document.querySelector('.price-switch__text--discount').textContent = '-25% discount'
	} else {
		document.querySelector('.price-switch__text--discount').textContent = '-25%'
	}
}
addDiscountText(windowMediaQuery)
windowMediaQuery.addListener(addDiscountText)

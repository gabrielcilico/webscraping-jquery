function getTitle(index) {
    return $(".product-card__title")[index].innerText;
}

function getDiscount(index) {
    return $(".promotion__tag-discount")[index].innerText;
}

function getValue(index) {
    return $(".promotion-price")[index].innerText;
}

function getJson() {
	let cards = $(".product-card__link");
	let jsonCards = [];
	
	for (let index = 0; index < cards.length; index++) {
		jsonCards.push({
			title: getTitle(index),
			value: getValue(index),
			discount: getDiscount(index)
		})
	}	
	
	return JSON.stringify(jsonCards)
}

getJson();
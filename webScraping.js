function getTitle(father) {
    return father.find(".product-card__title").text();
}

function getDiscount(father) {
    return father.find(".promotion__tag-discount").text();
}

function getValue(father) {
    return father.find(".promotion-price").text();
}

function getJson() {
	let cards = $(".product-card__link");
	let jsonCards = [];
	
	$.each($(".product-card"), function() {
		let currentCard = $(this);
		jsonCards.push({
			title: getTitle(currentCard),
			value: getValue(currentCard),
			discount: getDiscount(currentCard)
		})
	});
	
	return JSON.stringify(jsonCards, "", 2)
}

getJson();
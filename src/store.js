import { EventEmitter } from "events";

class Store extends EventEmitter {
	
	constructor() {
		super();
	
		// Variables
	    this.productDetails = {
	        "name" : "Castrol GTX High Mileage 5W-30 Synthetic Blend Motor Oil, 5 QT",
	        "quantity" : 1,
	        "subtotal" : {
	          key : "Subtotal",
	          value : 16.87
	        },
	        "pickup" : {
	          key : "Pickup savings",
	          value : -1.05
	        },
	        "tax" : {
	          key : "Est. taxes & fees (Based on 94085)",
	          value : 1.52
	        },
	        "promo" : {
	          key : "Promo",
	          value : 0
	        },
	        "total" : {
	          key : "Est. total",
	          value : 0,
	          isLastElement : true
	        }
	    }
	    this.setTotalProductValue();
	}

	setTotalProductValue() {
		this.productDetails.total.value = this.productDetails.subtotal.value + this.productDetails.pickup.value + this.productDetails.tax.value + this.productDetails.promo.value;
	}

	addPromo(discountPercentage) {
		console.log("setting promo value");
		this.productDetails.promo.value = parseFloat((this.productDetails.subtotal.value * (discountPercentage/100)).toFixed(2));
		this.setTotalProductValue();
		this.emit('promoAdded');
	}

	getProductDetails() {
		return this.productDetails;
	}
}

const store = new Store();

export default store;
function Prices() {

    function calculatedFinalPrice(basePrice, percentPassengerType, percentFlightType){
        let finalPrice = basePrice;

        finalPrice *= 1+percentPassengerType/100;
        finalPrice *= 1+percentFlightType/100;

        return finalPrice.toFixed(2);
    }

    return {calculatedFinalPrice};
}

module.exports = Prices();
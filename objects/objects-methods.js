let restaurant = {
    name: 'Namu',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        let seatsLeft = this.guestCapacity - this.guestCount
        return `There are ${seatsLeft} seats left`
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
        let seatsLeft = this.guestCapacity - this.guestCount
        return `There are ${seatsLeft} seats left`
    }
}
// seatParty - party size + guest count
// removeParty party size - guest count





console.log(restaurant.seatParty(72))
console.log(restaurant.checkAvailability(4));
console.log(restaurant.removeParty(5))
console.log(restaurant.checkAvailability(4));



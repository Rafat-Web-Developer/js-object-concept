const user1 = {
    id: 180230086,
    name: "Rafat Hossain",
    money: 10000,
    isRich: true,
    buyClothes: function(getExpenses){
        this.money = this.money - getExpenses;
        console.log(this);
    }
}

const user2 = {
    id: 180230106,
    name: "Jubair",
    money: 5000,
    isRich: false
}

const user3 = {
    id: 180230085,
    name: "Sagor",
    money: 15000,
    isRich: true
}


// user1.buyClothes(1000);

// bind method is used for excess method from an object and it's returns a function. 
const user2BuyClothes = user1.buyClothes.bind(user2);
user2BuyClothes(1500);
const user3BuyClothes = user1.buyClothes.bind(user3);
user3BuyClothes(10000);

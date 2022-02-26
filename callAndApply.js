const user1 = {
    id: 180230086,
    name: "Rafat Hossain",
    money: 10000,
    isRich: true,
    buyClothes: function(getExpenses){
        this.money = this.money - getExpenses;
        console.log(this);
    },
    buyFruits: function(getExpenses, getTax){
        this.money = this.money - getExpenses - getTax;
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

// call and apply method is used for excess method of an object. into the call method use parameters separate by coma and apply method use parameter into an Array. 

user1.buyClothes.call(user2, 1000);
user1.buyFruits.call(user2, 500, 50);
user1.buyClothes.apply(user2, [1000]);
user1.buyFruits.apply(user2, [500, 50]);

user1.buyClothes.call(user3, 1000);
user1.buyFruits.call(user3, 500, 50);
user1.buyClothes.apply(user3, [1000]);
user1.buyFruits.apply(user3, [500, 50]);
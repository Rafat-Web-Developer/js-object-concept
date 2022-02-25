const data = {
    id: 180230086,
    name: "Rafat Hossain",
    money: 10000,
    isRich: false,
    courseName: "CSE",
    subjects: ["C", "CF", "Math1", "Physics1"],
    bestFriend: {
        id: 18023106,
        name: "Jubair Ahmed",
        money: 5000,
        isRich: true,
        courseName: "CSE",
        subjects: ["C", "CF", "Math1", "Physics1"],
        takeExam: function(){
            console.log(this.name, "complete the exam");
        },
        buyClothes: function(getExpenses){
            const balance = this.money - getExpenses;
            const fullData = {name: this.name, balance: balance}
            return fullData;
        }
    },
    takeExam: function(){
        console.log(this.name, "complete the exam");
    },
    buyClothes: function(getExpenses){
        const balance = this.money - getExpenses;
        const fullData = {name: this.name, balance: balance}
        return fullData;
    }
}

data.takeExam();
let getResult = data.buyClothes(5000);
console.log(`${getResult.name} has ${getResult.balance}`);
data.bestFriend.takeExam();
getResult = data.bestFriend.buyClothes(4000);
console.log(`${getResult.name} has ${getResult.balance}`);
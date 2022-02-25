const first = {name: "Rafat Hossain", age: 22};
// console.log(first);

const second = new Object();
// console.log(second);

// const third = Object(null);
const third = Object(first);
// console.log(third);

class Test {
    constructor(getFirstData){
        // this.name = getFirstData.name;
        // this.age = getFirstData.age;
        getFirstData.name = "Test";
        getFirstData.age = 25;
    }
};

const forth = new Test(first);
// console.log(forth);
// console.log(first);

function Try(getFirstData){
    this.name = getFirstData.name;
    this.age = getFirstData.age;
}
const fifth = new Try(first);
// console.log(fifth);
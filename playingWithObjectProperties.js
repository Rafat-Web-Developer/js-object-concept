const test = {
    name: "Rafat",
    age: 22,
    salary: 50000,
    isValid: true
};

// for get all keys of test object
const keys = Object.keys(test);
// console.log(keys);

// for get all values of test object
const values = Object.values(test);
// console.log(values);

// for get all keys and values of test object
const pairs = Object.entries(test);
// console.log(pairs);

// after seal delete and add is not allowed but change the value of properties 
Object.seal(test);

// after freeze we can't modified any keys or values of keys of an object
// Object.freeze(test);

// delete the property of an object
// delete test.isValid;
// console.log(test);

test.isValid = false;
// console.log(test);
const test = {
    name: "Rafat Hossain",
    employeeId: 101,
    designation: 'Web Developer',
    salary: 50000
}

// const keys = Object.keys(test);
for (const key of keys) {
    // console.log(key+" = "+test[key]);
}

keys.forEach(key => {
    // console.log(key+" = "+test[key]);
});

// for in use for excess object keys
for (const key in test) {
    // console.log(key+" = "+test[key]);
}


const pairs = Object.entries(test);
for (const pair of pairs) {
    const [key, value] = pair;
    console.log(key+" = "+value);
}
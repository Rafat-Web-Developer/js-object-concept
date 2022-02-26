const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };

// can't compare object like as primitive data type. it's give wrong ans. Because object is a non-primitive data type. So it's create a reference on the memory for storing.
if(first === second){
    // console.log("Equal");
}else{
    // console.log("Not Equal");
}

// solution
function compareObject(obj1, obj2){
    obj1Length = Object.keys(obj1).length;
    obj2Length = Object.keys(obj2).length;
    if(obj1Length !== obj2Length){
        return false;
    }
    for (const property in obj1) {
        if(obj1[property] !== obj2[property]){
            return false;
        }
    }
    return true;
}
const isEqual = compareObject(first, second);
if(isEqual){
    console.log("Object's are equal.")
}else{
    console.log("Object's are not equal.")
}
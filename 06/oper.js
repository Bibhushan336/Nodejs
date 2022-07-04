

const add = (a, b) => {
    return a + b;
};


function sub(a, b){
    return a - b;
};


// module.exports = add


// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {add, sub}

// console.log(sub(10,5))
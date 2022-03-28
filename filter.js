const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'spresent'];
const adc = [1, 2, 3]

// const result1 = words.filter(val => val[0] === 's');

var res = [];
words.map(val => {
    if (val[0] == 's') {
        res = [...res, val];
    }
}
);


// console.log(result1);
console.log(res);

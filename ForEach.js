var array = [8, 2, 3, 4, 5];

// var result = array.forEach(function (val, index) {
//     console.log(index, val + 55);
// });

var result2 = array.map(
    function (val, index) {
        if (val == 4) {
            console.log(val + 55);
        }
        else {
            console.log(val, index);
        }
    }
)


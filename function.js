// // function declaration
// function greet()    //needs not to be called before calling function
// {
//     console.log("Hello there!");
// }


// // function expression
// const speak = function(name = 'luigi', time = 'night')    // needs to be declared before calling function
// {
//     console.log(`good ${time} ${name}`);
// };


// greet();
// greet();

// speak('mario', 'morning');
// speak();



// returning values
const calcArea = function(radius)
{
    // let area = 3.14*radius**2;
    // return area;

    //or


    return 3.14*radius**2;
};
const area = calcArea(5);
console.log(area);








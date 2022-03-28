// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius ** 2;

// order of operation - B I D M A S 

// let result = 5 * (10-3) ** 2;

// let likes = 10;
// likes = likes + 1;
// console.log(likes);
// likes--;
// console.log(likes);

// likes += 10;
// likes -= 5;
//likes *= 2;
// likes /= 5;
//console.log(likes);
//console.log(result);

// NaN - not a number

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template string 
const title = 'Best reads of 2020';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by '+ author+ ' has ' + likes + ' likes';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span> This blog has ${likes} likes</span>
`;
console.log(html);
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// people.forEach(function(person) {
//     console.log(person);
// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);




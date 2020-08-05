/* Demonstrate a higher order function (the JavaScript sort() function)
and how to use it to implement sorting an array by two different
sorting criteria.

Requires NodeJS to be installed on your computer

Run:
node funcs.js

*/

var cities = ['Cinncinati', 'Orem', 'Bethesda', 'San Francisco'];

function compare_by_string_lengths(s1,s2) {
    l1 = s1.length;
    l2 = s2.length;
    if (l1 >= l2) {
        return -1;
    } else {
        return 1;
    }
}

// Complete this function implementation
function compare_by_alphabetic_order(s1,s2) {

}


// Test one of the comparison functions
console.log(compare_by_string_lengths('a', 'aaa'));

// Sort cities by city name length
console.log(cities.sort(compare_by_string_lengths));

// Sort cities alphabetically


// Lucy recursive implementation of JSON.stringify()

// BTW I'm editing this file in VS Code and then using the 'node' executable to run it in the terminal
// I don't recall if you're using node...


// 'flat' (simple) object
const f = {
    a: 'somestring',
    b: 42
  };
console.log(JSON.stringify(f))

// object containing array
const a = {
    a: 'somestring',
    b: [1,2,3]
  };
console.log(JSON.stringify(a))

/* Recursion is only needed in the case where you have 'nested' objects: things inside of things.
  That's important to get.  A javascript object that simply contains a bunch of key value pairs,
  should not need recursion to be processed in any way.  But in javascript, objects can contain 
  other objects, which in turn can contain objects ... and you don't know how deeply that so-called
  nesting goes, and when you encounter a situation like that in computing, your brain needs to 
  recognize that recursion applies to such a situation, this notion of a sequence of identical 
  operations within other operations.  This doesn't come up often, but when it does it's important
  and it's the only clean/concise way to solve the problem.

  So I say all this to help you understand exactly where and why you'll apply the recursion
  in this code -- and that it won't "kick in" unless your input object contains nested objects.
*/

// nested object
const n = {
    a: {'a1': 1, 'a2': 2},
    b: 42
  };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
console.log(JSON.stringify(Object.entries(n)))

const obj = { foo: 'bar', baz: 42 };
// Using Array Destructuring, you can iterate through objects:
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"

/*
I have not written my own implementation of stringify yet, however this is how I would approach it:

1) Start with an empty string s.  Use the forEach() example above to iterate through the key/value pairs
2) Examine the value; if it's iterable (an object, or an array, versus a string or int),
   then you have to recurse and call this function on the value.
3) Use s.concat() as you go to concatenate output to s.
4) At the end, return s


pseudo code, this should handle nested objects, not sure about how it would handle other things like arrays
or nested arrays

function stringify(input_object) {
    const string_out = ''
    for each key, value in input_object {
        concat the key to the string_out with punctuation
        if the value is a scalar (string or integer):
            concat to string_out
        else if it is an Object:
            call stringify(value)
        else if it is an Array:
            <for you to figure out>
    }
    return string_out
}

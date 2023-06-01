1. What data type is the variable  x ?
```javascript
    var x = {};
```
- Function
- Array
- Object

2. What will be the output of running the following code?  

```javascript
    try {
console.log('hello)
} catch(e) {
console.log('caught')
}
```
- Uncaught SyntaxError: Invalid or unexpected token
- Caught

3. What value is printed when the following code runs?
```javascript
  var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);
```

- bun
- beef
- lettuce
- tomato sauce
- onion

4. In the following code, how many methods does the  bicycle  object have?
```javascript
 var bicycle = {
      wheels: 2,
      start: function() {

      },
      stop: function() {

      }
  };
```

- 1
- 2
- 3

5. When the following code runs, what will print out?
```javascript
  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }
```
- Hello
- Goodbye

6. If you mis-type some code in your JavaScript, what kind of error will that result in?

- RangeError
- SyntaxErrror
- TypeError

7. Will the following code execute without an error?

```javascript
    function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");
```
- Yes
- No

8. What will be printed when the following code runs?
```javascript
  var result;
  console.log(result);
```

- undefined
- null
- 0

9. What will be the output of the following code?
```javascript
    var str = "Hello";
    str.match("jello");
```
- null
- undefined
- empty string

10. What will be the output of the following code?
```javascript
try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
```
- RangeError
- 5
- e
- "There was an error"

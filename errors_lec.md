## Bugs and errors

- Bug - A bug causes program to run in an unintended way
- Error - An error causes program to stop running

## Syntax, logical and runtime errors

Here are some of the most common errors in JavaScript: 

- ReferenceError 

- SyntaxError 

- TypeError 

- RangeError

There are some other errors in JavaScript. These other errors include: 

- AggregateError 

- Error 

- InternalError 

- URIError

```javascript
console.log(a+b)
console.log('This line is never reached')

//throw new ReferenceError()
```

## try catch blocks - Error handling

```javascript
try {
    console.log(c+ d)
}catch(err){
    // do somethong here
    console.log(err)
    console.log('There was an error')
    console.log('The error was saved in the error log')
}
console.log('My program does not stop')
```
```javascript
try{
    throw new Error()
}catch(err){
    console.log(err)
}
console.log('My program does not stop')
```



## Undefined, null and empty values

```javascript
 var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  }
```

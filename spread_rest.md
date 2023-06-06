## Using Spread and Rest

In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

- Add new members to arrays without using the push() method,

- Convert a string to an array and

- Copy either an object or an array into a separate object 

**Recall that the push() and pop() methods are used to add and remove items from the end of an array.**

#### Join arrays, objects using the rest operator

Using the spread operator, it's easy to concatenate arrays:
```javascript
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
```
Here's the result:  
```javascript
['apple', 'pear', 'plum', 'blueberry', 'strawberry']
```

It's also easy to join objects:  
```javascript
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
```

#### Add new members to arrays without using the push() method
```javascript
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
```
```javascript
Here's the output:
```

#### Convert a string to an array using the spread operator
Given a string, it's easy to spread it out into separate array items:
```javascript
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
```
#### Copy either an object or an array into a separate one

Here's how to copy an object into a completely separate object, using the spread operator.
```javascript
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)
```
The output is 201, 200.

You can copy an array into a completely separate array, also using the spread operator, like this:
```javascript
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)
```
This time, the output is:
```javascript
This time, the output is:
```

Note that the spread operator only performs a shallow copy of the source array or object. 

There are many more tricks that you can perform with the spread operator. Some of them are really handy when you start working with a library such as React.

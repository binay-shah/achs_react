## Transpiling JSX

#### By the end of this reading, you will have learned how a component is built.

#### Introduction

Components are a nice way to build websites in React because they allow you to build more modular apps. However, how do you build components using React, JSX, and JavaScript? You'll learn how this works in this lesson item.

#### A browser cannot understand JSX syntax.

This means that making a browser understand React code requires a lot of supporting technologies.

An example of such a technology is a **transpiler.**

A **transpiler** takes a piece of code and transforms it into some other code.

To understand why this is done, here is an example of an ES6 variable declaration:

```javascript
const PI = 3.14
```
This is perfectly valid ES6 syntax.

However, if you were using a very old computer, that computer will have an old browser. Perhaps that browser was built before ES6 came out in 2015.

This means that the JavaScript engine that is built into your old computer's browser is likely to be an ES5 JavaScript engine.

In ES5, the only way to declare a variable is the following:
```javascript
var pi = 3.14
```

What this means is that for this old browser to understand the ES6 code, the only way to do it is by **transpiling** it.

If you feel like it, you can try transpiling ES6 to ES5 code yourself, using 
the es6console website

Now, let’s move the focus to another example of transpiling.

Let's say that you want to use a brand new, most modern ECMAScript syntax in an app. The only problem is that this new syntax is currently not supported by any browser; even an up-to-date browser.

However, by transpiling the new most-modern JavaScript syntax into something that modern browsers can understand, it is able to convert some code that the browser cannot comprehend, into code that it can comprehend, run, and produce a result from.

Likely the most popular site that shows off how this works is 
[Babel](https://babeljs.io/)
. As the heading of the website reads, "Babel is a JavaScript Compiler".

This finally brings you to the point of this discussion about transpiling JavaScript code.

What Babel does is this: it allows you to transpile JSX code (which cannot be understood by a browser) into plain JavaScript code (which can be understood by a browser).

This is where React and JSX come in.

For React code to be understood by a browser, you need to have a **transpiling step** in which the JSX code gets converted to plain JavaScript code that a modern browser can work with.

To demonstrate how this works, let’s use the **Heading** component from the previous lesson.

Add the JSX code into 
the [online Babel repl](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACQKYEMAmMwHMAUADgE5yEDOAlIgN4BQijixqUIxSAPABYCMAfDRJlyAOlhQANqgC-nAPR9-dGUA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.18.5&externalPlugins=&assumptions=%7B%7D)
. Repl stands for "read-eval-print loop" and it accepts code you write, evaluates it, and produces some result. In the specific case of 
the online Babel repl
, that result is some transpiled code. Here's a more detailed explanation.

If you've visited the above-linked URL, you'll find a web page that has two panels. On the left, there's source JSX code:
```javascript
function Heading(props) {
    return <h1>{props.title}</h1>
}
```
... and on the right, there's the transpiled, plain JavaScript code:
```javascript
"use strict";

function Heading(props) {
  return /*#__PURE__*/React.createElement("h1", null, props.title);
}
```
If you now analyze the difference between the source JSX code and the transpiled, plain JavaScript code, dis-regarding the comment, here's the body of the Heading function:
```javascript
React.createElement("h1", null, props.title);
```
So, here you have a React object, and this object has a createElement() method on it. The method is invoked with three arguments:

1. "h1" 

2. null 

3. props.title 

The first argument is the DOM element to render - in this case, an h1 element. The second property is any HTML attribute that should be added, and there's a null here - meaning, there should be an object with some data, but there isn't any data so instead of the object there's the null value. The third property is the contents of the inner HTML of the DOM element specified as the first argument - in this case, the contents of the inner HTML of the h1 element.

Now let’s use Babel again, and this time transpile the render syntax for the Heading component:
```javascript
<Heading title="This is the heading text!"></Heading>
```
Again using 
the Babel repl
, and as can be confirmed in 
the link
, the output of the tranpilation is the following code:
```javascript
"use strict";

/*#__PURE__*/
React.createElement(Heading, {
  title: "This is the heading text!"
});
```
Again, you have the **React.createElement()** method call, and this time, the first item to render is Heading, and then you have an object as the second argument (instead of a null that you had in the previous transpilation example).

This brings me to an interesting question: What is the minimum code that a component must have to be able to show something on the screen when rendered?

You can see the answer below:
```javascript
function Example() {
    return <div>An element</div>
}
export default Example
```
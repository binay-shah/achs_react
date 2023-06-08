## Customizing the project

So far, you’ve learned about React components, but now you will focus on learning how to customize the project. You will learn about the software development approach, detailing the creation of separate associated files, the requirements gathering and the subsequent folder structure to be created.

## Building a Layout
magine that you've been given the task of building a somewhat more complex website layout using React.

At this point, you still don't know too much about how React works, but even with your limited knowledge, you can still build some relatively interesting designs.

Currently, you need to build a simple typography-focused layout for a coding blog.

This means that you will not have to use images, which simplifies your task significantly.

The layout you're supposed to build will consist of the following sections:

- Main navigation 

- Promo (main advertisement)

- A list of newest posts' previews (intros)

- The footer 

## Organizing Your Code

Keeping in mind the above structure, how would you organize your code?

This is where React docs can help. They suggest two approaches:

- Grouping by features 

- Grouping by file type 

They also advise not to nest folders too deep, and to keep things simple and not overthink it.

They even say that if you're just starting out, you shouldn't spend more than five minutes setting up a project.

Taking this advice into account, you might say that for a small project like this, you could keep it as simple as just adding a **components** folder and moving all your components into it. This is exactly what you’ll do next.

## Building The App

Since this is app's focus is on customization, let’s name the app **customizing-example.** 

What follows is the command to run **in a suitable folder on your own computer.** By "a suitable folder", I mean: "a folder where you feel comfortable installing a boilerplate React application". This also includes that the folder you chose will need to be accessible for your user on your OS (Operating System).
```javascript
npm init react-app customizing-example
```
This will produce a brand-new starter app with a familiar structure.

Inspecting the src folder of the starter app, it looks like this:
```javascript
src/
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```
Then simply add a components folder to it, like this:
```javascript
src/
    components/
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```
Since the components folder is currently empty, you can add a component for each of the sections of the typography-focused blog. Here's the structural update:
```javascript
src/
    components/
        Nav.js
        Promo.js
        Intro1.js
        Intro2.js
        Intro3.js
        Footer.js
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```
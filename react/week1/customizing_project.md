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

At this point, there's no need to complicate things. You have the **Nav** component, the **Promo** component, the **Intro1, Intro2,** and the **Intro3** component. Finally, there's also a **Footer.js** component.

This means you've fully planned the app, based on some best practices as suggested by the official React docs website, and based on the level of complexity of the project itself. Since this project is relatively simple, this structure feels right.

In this reading, you’ll just build all the components inside the components folder, and then, in the upcoming lesson items, import them into the **App.js** file.

#### Building Components
For now, let’s just build those components. After you've added the **components** folder, you’ve also added all the functional component files. Since they are all currently empty, you can start adding them, one by one.

Heres' the contents of the **Nav.js** file:
```javascript
function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;
```
Next, you can focus on the Promo.js file:
```javascript
function Promo() {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
};

export default Promo;
```

Once you’ve finished the promo section, you can focus on the Intro components.

Here's **Intro1.js:**
```javascript
function Intro1() {
    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro1;
```
Here's the code for the **Intro2.js** component:
```javascript
function Intro2() {
    return (
        <div className="blog-post-intro">
            <h2>Why I love front-end web development</h2>
            <div>
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;
```
You can finish the previews for my blog posts with the code for **Intro3.js** component:
```javascript
function Intro3() {
    return (
        <div className="blog-post-intro">
            <h2>What's the best way to style your React apps?</h2>
            <div>
                <p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro3;
```
There's just one more thing left to code, the **Footer** component, so here it is:
```javascript
function Footer() {
    return (
        <div className="copyright">
            <p>Made with love by Myself</p>
        </div>
    );
};

export default Footer;
```
Now that you have completed all the components for the app, here are a few more interesting things about the syntax.

These are:

- The use of the className attribute in JSX

- The use of separate components for repetitive code

- Where are all the props?

- Why was I not using the <a> element for empty links? 


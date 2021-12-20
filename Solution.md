#### Setup

1. We will use `npm` to create our React app, manage all the dependencies and run our application.

2. To create a React application, we will run the following command from `yarn`. We will be creating a cookie shop website, so I'll call my app `cookieshop`. Keep in mind that capital letters are not allowed in the app name.

   ```shell
   $ npx create-react-app cookieshop
   ```

3.  Viola! Our app is created. But how can we run it?
The terminal is giving us some instructions to run our application. All we need to do is go inside the application folder and run `yarn start` !

 ```shell
   $ cd cookieshop
   $ npm start
   ```

5. Note that the browser opened automatically for us! Take a look at the browser's URL: `localhost:3000`. To see what our code looks like we need to host it on a server, and since we're still in development we don't anyone to have access to the website yet.

6. `yarn start` runs the application on the local host which is my laptop. So in this case my device (my laptop) will act as my host and will run the application.

7. `3000` is the port number, which is a certain location in the host. Think of it this way, if the host is the area in an address, the port is the house number.

#### Home Page

1. Remove all the JSX code and the logo import and start building our website's home page.

   ```jsx
   import "./App.css";

   function App() {
     return (

     );
   }

   export default App;
   ```

2. Add a title and description for your website. Don't forget to wrap your tags with a `div` tag.

   ```jsx
   function App() {
     return <h1>Cookies and Beyond</h1>;
   }
   ```

3. Note that when we save our code, the website is automatically updated! And that ladies and gentlemen is the first super power of React.

4. Now let's add a description of our website under the title. 

   ```jsx
   function App() {
     return (
            <div>
                <h1>Cookies and Beyond</h1>
                <h4>Where cookie maniacs gather</h4>
            </div>
     );
   }
   ```

5. Now let's add an image of a cookie shop, so we will use an `img` tag. For now, we will take our images from the internet. Choose your image, copy its address and paste it in the `src` attribute. Don't forget to add alternative text using the `alt` attribute.

 ```jsx
return (
  <div>
    <h1>Cookies and Beyond</h1>
    <h4>Where cookie maniacs gather</h4>
    <img
      alt="cookie shop"
      src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
    />
  </div>
);
 ```

#### Styling

1. Our website needs styling! Let's start with centering the title. Create a class in your `App.css` that centers your text.

 ```css
.text {
    text-align: center;
}
 ```

2. Now call the class in your `h1` to center the title.

 ```jsx
<h1 className="text">Cookies and Beyond</h1>

 ```
3. Let's also center the description.

 ```jsx
<h4 className="text">Where cookie maniacs gather</h4>
 ```

4. Now let's center the image.

 ```css
.shop-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
 ```

7. Call `shop-image` in your `img` tag.

 ```jsx
  <img
    alt="cookie shop"
    src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
    className="shop-image"
  />
 ```

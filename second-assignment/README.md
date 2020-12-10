# :page_facing_up: Second Assignment of the course - React basic syntax

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

## :fire: How to run

To start the **project** clone this repository:
```bash 
$ git clone https://github.com/jesspsilva/react-udemy
```
Then use the commands bellow:
```bash
cd react-udemy/second-assignment
npm install
npm start
```
After this process the `localhost: 3000` page will automatically open in your browser or access <a href="http://127.0.0.1:3000" target="_blank">http://127.0.0.1:3000</a>

## :arrow_right: Preview
<p align="center">
<img src="https://user-images.githubusercontent.com/24191107/101831069-60e32c80-3b2d-11eb-9831-2450cdf7aff9.png" alt="second-assignment"/>
</p>

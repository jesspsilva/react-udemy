# :computer: React

This repository serves as a complement to the knowledge acquired in the Udemy react course. Here I will put information that I think is pertinent and all the projects I am doing throughout the course.

##### :books: Course: https://www.udemy.com/course/react-the-complete-guide-incl-redux
##### :page_facing_up: React Official Documentation: https://reactjs.org/docs/getting-started.html

# :books: Table of Contents

- [Tools](#tools)
- [Create React App](#createapp)
- [Dynamic Content With props](#dynamic-content)

<a id="tools"></a>

## :star: Tools

<p>Dependency Management: npm (or yarn)</p>
<p>Bundler: Webpack</p>
<p>Compiler: Babel</p>
<p>Development Server</p>

<a id="createapp"></a>

## :fire: Create React App

GitHub Repo: https://github.com/facebook/create-react-app
Install Node: https://nodejs.org/en/

```bash
npm install -g create-react-app
npx create-react-app name-of-app
cd name-of-app
npm start
```

<a id="dynamic-content"></a>

## :arrow_forward: Dynamic Content With props

Official doc: https://reactjs.org/docs/components-and-props.html

![1](https://user-images.githubusercontent.com/24191107/101199953-908dc280-365d-11eb-8e5d-606b5d2559a7.png)

1. The App component calls the Person component with name and age as props.
2. The Person component returns a div with a p tag element as the result.

![2](https://user-images.githubusercontent.com/24191107/101200063-b74bf900-365d-11eb-91ca-41309ed5c303.png)



### Children props

Official doc: https://reactjs.org/docs/composition-vs-inheritance.html

![3](https://user-images.githubusercontent.com/24191107/101200068-b87d2600-365d-11eb-813c-c8d51eba49c8.png)

1. The App component calls the Person component with name and age as props. And the text with hobbies has a children element.
2. The Person component returns a div with a second p tag element that holds the children content.

![4](https://user-images.githubusercontent.com/24191107/101200070-b915bc80-365d-11eb-872c-94e6068be87e.png)


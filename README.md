# Origami React App

## 🧶 The Project

➡️ ➡️ [GO TO WEBSITE PROJECT]() ⬅️ ⬅️

I love crafting, journaling, making origamis, with this project I can combine both my passion of coding and practice my coding skills and share origamis pictures.
This project was also a way to play with svg animation for the first time.

### 👟 Steps

- Started by watching some SVG animations projects on Youtube
- Created the origami on Figma from scratch
- Created another origami with different wings head body position and direction to recreate the flying bird animation
- Drafted the overall design of the website using mock data
- Fixed animation issues
- Mapped through data to display the different origami
- Filtered images
- Created an active categorie for the list of origamis
- Added the function to change the flying origami color options

🍐 [@beyondthefruit (Kevin Hanard)](https://github.com/beyondthefruit)

### 🎥 Overview

![mockup-origami-project]()

**Demo:**

🚀 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

🧚🏻 Tech stack:

- ReactJS
- JavaScript
- Styled-components
- HTML
- CSS
- SVG Animation

## 🪄 Testing

- [] Unit tests with [Testing Library](https://testing-library.com/)
- [x] Tested manually using developer tools - Firefox / Chrome
- [x] Media query tests: Ipad - IphoneSE/Pro/PRO MAX/MINI - Galaxy Note 20/520

## 📈 Performance

- For a full performance report https://www.webpagetest.org/result/230720_BiDc6S_SC/
- First Byte: 0.492s
- Start Render: 1.000s
- Speed Index: 1.002s
- LCP: 0.995s
- CLS: 0
- TBT: 0.000s
- Total Bytes: 187kb

## 📱 Media Queries

- mobileS:`@media screen and (min-width: 320px)`
- mobileM:`@media screen and (min-width: 400px)`
- mobileL:`@media screen and (min-width: 600px)`
- tablet: `@media screen and (min-width: 768px)`
- laptop: `@media screen and (min-width: 960px)`
- laptopL: `@media screen and (min-width: 1440px)`
- desktop: `@media screen and (min-width: 2560px)`

## 🌵 Challenges

- First time using SVG, some SVG parameters such as Viewbox can't be used on CSS or Javascript, for example to update the size of the origami, I had to use transform: scale(..) on CSS
- SVG difficult to manipulate expecially for complex animation: Animate can't be manipulated on JS or CSS.
- Designing the SVG on Figma: I had to draw several origamis before getting the result that I wanted.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🛸 Improvement / Next Steps

- [] Create test files with [Testing Library](https://testing-library.com/)
- [] Create other design to upload
- [] Create a button to end animation see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/end

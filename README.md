# Wordle Game Clone

## Available Scripts
In the project directory, you can run:

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

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)


### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

******************************************************************************

Project: Wordle Clone
Description: Frontend Clone of a Wordle Game Web Application 
Features: 
  1. Size of each solution word = 5
  2. Total chances for each solution word = 6
  3. Color coding of guessed characters:
    a. Green -- correct character at correct position
    b. Yellow -- correct character but not at correct position
    c. Grey -- wrong character i.e., not present in the word at all
  4. WIN:  word is guessed correctly before chances are over
     LOOSE: word is not guessed correctly before all chances are over
  5. Result modal box appears on displaying WIN or LOOSE
  6. A new solution word is expected on every tab refresh
  7. Characters can be entered from system keyboard only
  8. Press 'Enter' to check if the guessed word is correct or not for each guess


*************************************************************** 
  Solution words data: Location --> data/db.json
    (Host the json file locally before fetching data from it:
       Run following command on terminal from project folder:
       >>  json-server data/db.json --port [any free port no., ex: 8000] 
    )
****************************************************************
Tech used: HTML, CSS, Javascript, React, JSON, WebAPI
Hooks used: useState, useEffect, useWordle -->(custom hook)
*****************************************************************






![Wordle Clone1](https://user-images.githubusercontent.com/39863626/221696867-95717a06-c217-4ff8-b353-872c89c7201c.png)


![Wordle Clone2](https://user-images.githubusercontent.com/39863626/221696923-aab8810f-902c-436a-91f5-f679a2b21c99.png)
![Wordle Clone3](https://user-images.githubusercontent.com/39863626/221696935-ec371845-6613-458e-a4d0-869bc491fb4d.png)

![Wordle Clone4](https://user-images.githubusercontent.com/39863626/221696967-565086d3-929d-4542-984c-ec10faed0164.png)
![Wordle Clone5](https://user-images.githubusercontent.com/39863626/221696986-dbe41dd2-56f9-48be-a8da-a6f7082cf601.png)

![Wordle Clone6](https://user-images.githubusercontent.com/39863626/221697008-1caad07b-43e9-4467-9ca2-d6f1db316a1b.png)



*******************************************************************************

## Tournaments project description.

This tech stack was used in this project.

1. Redux - as state management architecture
2. Redux-persistent - for solving problem of persistence of the store.
3. Redux-saga - for managing side-effects in state management.
4. Immer - for reducing boilerplate code in reducers, and for immutability.
5. Reselect - as a selector library for redux.
6. Axios for API calls.
7. Semantic-UI for fast and responsive UI.

As a base for creating this project I've chosen create-react-app, as 
it gives all needed tools for building maintainable
and extensible project. Also it is much more faster to use this tool
that to configure building, bundling, scaffolding and other tasks
from scratch.

For side effects I used redux-saga, as it separates side effects from
action creators. So every part of application now does the job
which it should.



## For running project

In the project directory, you run:

### 1. `yarn`

Runs package manager for installing and linking all dependencies.

### 2. `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

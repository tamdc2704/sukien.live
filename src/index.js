import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux'

import examsReducer from './exams/reducers'
import resultsReducer from './results/reducers'

import data from './data.json'

const rootReducer = {
  results: resultsReducer,
  currentIndex: examsReducer
}

const initstore = {
  currentIndex: 0,
  results: data.questions.reduce((acc, {id, options}) => {
    acc[id] = options.reduce((acc2, {key}) => {
      acc2[key] = 0
      return acc2
    }, {})
    return acc
  }, {})
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initstore
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

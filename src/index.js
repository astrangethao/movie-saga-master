import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
// Import axios
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_GENRES", getGenres);
  yield takeEvery("UPDATE_MOVIES", updateMovies);
}

// Create updateMovies generator function
function* updateMovies(action) {
  try {
    yield axios.put(`/api/movie/${action.payload.id}`, action.payload);
    yield put({ type: "GET_GENRES" });
  } catch (error) {
    console.warn(`Error with updateMovies`, error);
  }
}

// Create getMovies generator function
function* getMovies(action) {
  try {
    const response = yield axios.get("/api/movie");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.warn(`Error with getMovies`, error);
  }
}

// Creat getGenres generator function
function* getGenres(action) {
  try {
    const response = yield axios.get("/api/movie/genre");
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    console.warn(`Error with getGenres`, error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

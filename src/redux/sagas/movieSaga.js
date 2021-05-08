import { movieActions } from "../types";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { firestore } from "../../firebase/utils";
import { fetchMoviesSuccess } from "../actions";

export function* fetchMovies() {
  try {
    // create Movies Collection Reference
    const moviesRef = firestore.collection("movies");
    const moviesFromDB = yield moviesRef.get();

    let movies = [];
    yield moviesFromDB.forEach((movie) => {
      movies.push({ id: movie.id, ...movie.data() });
    });

    yield put(
      fetchMoviesSuccess({
        recommends: [...movies.filter((movie) => movie.type === "recommends")],
        newDisney: [...movies.filter((movie) => movie.type === "new")],
        originals: [...movies.filter((movie) => movie.type === "original")],
        trending: [...movies.filter((movie) => movie.type === "trending")],
        allMovies: movies,
      })
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function* onFetchMoviesStart() {
  yield takeLatest(movieActions.FETCH_MOVIES_START, fetchMovies);
}

export default function* MovieSaga() {
  yield all([call(onFetchMoviesStart)]);
}

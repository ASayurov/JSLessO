"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film = prompt("Один из последних просмотренных фильмов?", ""),
      points = +prompt("На сколько оцение его?", "");

personalMovieDB.movies[film] = points;

console.log(personalMovieDB);
"use strict";

// Задача 1
let NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');3

// Задача 3
let last_film1 = prompt('Один из последних просмотренных фильмов?', ''),
mark_film1 = +prompt('На сколько вы его оцените', ''),
last_film2 = prompt('Один из последних просмотренных фильмов?', ''),
mark_film2 = +prompt('На сколько вы его оцените', '');

// Задача 2
let personaMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personaMovieDB.movies[last_film1] = mark_film1;
personaMovieDB.movies[last_film2] = mark_film2;
console.log(personaMovieDB);


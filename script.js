let numberOfFilms = prompt('Сколько фильмов вы постмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const func = () => {
    for (i = 0; i < 2; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?');
        let stars = prompt('на сколько оцените его?');
        personalMovieDB.movies[movie] = stars
    }
}
func()
console.log(personalMovieDB)
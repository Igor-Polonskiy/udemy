const numberOfFilms = +prompt('Сколько фильмов вы постмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', '');
    let stars = prompt('на сколько оцените его?', '');

    if (movie != null && movie != '' && movie.length < 50 && stars != null && stars != '') {
        personalMovieDB.movies[movie] = stars;
    } else {
        i--
    }

}

if (personalMovieDB.count < 10) {
    console.log('мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('классика')
} else if (personalMovieDB.count >= 30) {
    console.log('много')
} else {
    console.log('ошибка')
}


console.log(personalMovieDB)
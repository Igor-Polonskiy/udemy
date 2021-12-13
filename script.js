let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы постмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы постмотрели?', '');
    }
}
//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?', '');
        let stars = prompt('на сколько оцените его?', '');

        if (movie != null && movie != '' && movie.length < 50 && stars != null && stars != '') {
            personalMovieDB.movies[movie] = stars;
        } else {
            i--
        }

    }
}
//rememberMyFilms()



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('классика')
    } else if (personalMovieDB.count >= 30) {
        console.log('много')
    } else {
        console.log('ошибка')
    }
}

//detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр родномером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres()
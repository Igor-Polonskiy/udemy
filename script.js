const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы постмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы постмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let movie = prompt('Один из последних просмотренных фильмов?', '');
            let stars = prompt('на сколько оцените его?', '');

            if (movie != null && movie != '' && movie.length < 50 && stars != null && stars != '') {
                personalMovieDB.movies[movie] = stars;
            } else {
                i--
            }

        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('классика')
        } else if (personalMovieDB.count >= 30) {
            console.log('много')
        } else {
            console.log('ошибка')
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this)
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр родномером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat
    }

}


personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDB();
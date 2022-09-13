import React from 'react'
import {Movie} from './Movie'


// получаем массив с карточками фильмов
function Movies (props) {
    const { movies = [] } = props;
// выводим фильмы по одному по ключу imdbID
    return (
           <div className='movies'>
            {/* проверяем по длине если есть данные, выводим список фильмов */}
               {movies.length ? (
                   movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
               ) : (
            // если нет  выводим Nothing found<
                   <h4>Nothing found</h4>
        )}
    </div>
    );
}

export {Movies};
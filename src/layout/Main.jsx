import React, {useState, useEffect} from 'react';
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
   
// функция для обновления state, принимает параметры str(поисковая строка), которая приходит с сайта с фильмами и type со значением 'all'
// this.setState({movies: data.Search})) методом setState перекладываем в movies данные data которые расположены под в ключе Search
    const searchMovies = (str, type = 'all') => {
// в начале исполненнения функции активируем загрузку, в конце переводим в значение false 
        setLoading(true);
        //если значение ключа type не равно 'all', получаем данные по дополнительному get - параметру type}
        fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
             .then((response) => response.json())
             .then((data) => {
                setLoading(false);
                setMovies(data.Search);
             })
            // /добавляем исключения
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }; 

    useEffect (() => {
        // в начале исполненнения функции активируем загрузку, в конце переводим в значение false 
              
                //если значение ключа type не равно 'all', получаем данные по дополнительному get - параметру type}
                fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=matrix`)
                     .then((response) => response.json())
                     .then((data) => {                        
                        setMovies(data.Search);
                        setLoading(false);
                    })
                    // /добавляем исключения
                    .catch((err) => {
                        console.error(err);
                        setLoading(false);
                    });
            }, []); 

        return (
            <main className="container content">
               <Search searchMovies={searchMovies} />
{/* проверяем если идёт выводим  Preloader, если нет страницу с фильмами  */}
               {loading ?  <Preloader /> :  <Movies movies={movies} />}  
            </main>
        );
    }



export { Main };
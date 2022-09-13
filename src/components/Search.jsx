import React, { useState } from 'react';

const Search = (props) => {
    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');      
       

    const handleKey = (event) => {
            if (event.key === 'Enter') {
// если нажат Enter вызываем метод searchMovies и передаём ему текущие state и type
                searchMovies(search, type);
            }
    };


    const handleFilter = (event) => {   
           setType(event.target.dataset.type);   
           searchMovies(search, event.targret.dataset.type);                
       
    };
 
   return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
{/* кнопкой вызываем метод searchMovies и передаём ему текущие state и type */}
{/* className='btn search-btn' - добавляем стиль абсолютное позиционирование */}
                    <button
                        className="btn search-btn"
                        onClick={() =>
                            searchMovies(search, type)
                        }
                    >
                        Search
                    </button>
        </div>
        <div>
            <label>
                <input
                     className='with-gap'
                     name='type'
                     type='radio'
                     data-type='all'
                     onchange={handleFilter}                     
                    //  если в state стоит all выведется данное значение, переключения страниц под срокой поиска
                    checked={type === 'all'}
                />
                <span>All</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='movie'
                    onchange={handleFilter}
                    //  если в state стоит movie выведется данное значение, переключения страниц под срокой поиска
                    checked={type === 'movie'}                   
               />
               <span>Movies only</span>
            </label>
            <label>
                <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='series'
                    onchange={handleFilter}
                   //  если в state стоит series выведется данное значение, переключения страниц под срокой поиска 
                   checked={type === 'series'}
               />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );

};

export {Search};
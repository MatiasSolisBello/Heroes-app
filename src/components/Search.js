import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getByName } from '../selectors/getByName';
import { HeroCard } from './HeroCard';
import { useForm } from '../hooks/useForm';

export const Search = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getByName(q), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div className="container">
            <h1>Busqueda</h1>
            <hr />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Encuentra tu heroe"
                    className="form-control text-center"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                />

                <button type="submit"
                    className="btn btn-block btn-outline-primary"
                >Buscar</button>
            </form>




            <hr />

            {
                (q === '')
                &&
                <div className="alert alert-info">
                    Busca un heroe
                </div>
            }

            {
                (q !== '' && heroesFiltered.length === 0)
                &&
                <div className="alert alert-danger">
                    There is no a hero with {q}
                </div>
            }

            {
                heroesFiltered.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>

    )
}

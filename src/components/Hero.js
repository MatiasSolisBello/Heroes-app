import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../selectors/getById';

const heroImages  = require.context('../assets/heroes', true);

export const Hero = ({ history }) => {

    const {heroeId} = useParams();
    const hero  = useMemo(() => getHeroesById( heroeId ), [ heroeId ]);

    if(!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack(); //volver atras
        }

    }

    const{superhero, publisher, alter_ego, first_appearance, characters} = hero;

    return (
        <div className="row mt-5">
            <div className="col-6">
                <img src={ heroImages(`./${heroeId}.JPG`).default } alt={ superhero } 
                className="img-thumbnail"/>
            </div>
            <div className="col-6">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>


                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
        
        
    )
}

import React from 'react'
import { HeroList } from './HeroList'

export const Marvel = () => {
    return (
        <div>
            <h1>Marvel</h1>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
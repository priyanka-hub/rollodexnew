//Card Component.js
import './Card.styles.css'

const Card = (props) => {
    const {monster} = props
    const {id,name,email} = monster
    return(
        <div className='card-container'>
            <img
            alt='monster'
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2> {name} </h2>
            <p> {email} </p>
        </div>
    )
}

export default Card

//Card-List Component.js
import Card from '../Card/Card.component'
import './Card-List.styles.css'
import { Component } from 'react/cjs/react.production.min'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        <Card key={index} monster={monster} />
                    )
                )
            }
       </div>
   )
}

export default CardList


//Search Component.js
import React from 'react'

const Search = (props) =>{
    return(
        <input
            name='search'
            className='search-box'
            type='password'
            placeholder='search monsters'
            onChange = {props.handleSearch}
        />
    )
}

export default Search
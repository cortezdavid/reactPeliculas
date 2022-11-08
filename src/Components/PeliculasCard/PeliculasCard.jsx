import React from 'react'
import './PeliculasCard.css'
import { Link } from 'react-router-dom'


const PeliculasCard = (props) => {

    const { id, pelicula } = props
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + pelicula.poster_path


    return (
        <li key={id} className='movieCard'>
            <div className='rela'>
                <img src={imgUrl} alt={pelicula.title} className='movieImage' />
                <Link to={`pelicula/${pelicula.id}`} className='absolute'>
                    <img src="../play.svg" alt="play" className='icon' />
                </Link>
            </div>
            <div>{pelicula.title}</div>

        </li>
    )
}

export default PeliculasCard
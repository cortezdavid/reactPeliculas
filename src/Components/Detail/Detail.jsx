import React from 'react'
import './Detail.css'
import { Link } from 'react-router-dom'

const Detail = (props) => {

    const { pelicula } = props
    const imgUrl = 'https://image.tmdb.org/t/p/w300/' + pelicula.poster_path

    return (
        <>
            <div className='cardDetails'>
                <img src={imgUrl} alt={pelicula.title} className='detailImage' />
                <div className='details'>
                    <h2>{pelicula.title}</h2>
                    <div className='video'>
                        <img src="../play.svg" alt="play" className='icon' />
                    </div>
                    <p className='overview'>{pelicula.overview}</p>
                    <div className='buttonContainer'>
                        <Link className='button' to='/'>Volver</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
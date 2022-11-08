import React from 'react'
import peliculas from '../../peliculas.json'
import Detail from '../Detail/Detail'
import { useParams } from 'react-router-dom'


const DetailContainer = () => {

    const { id } = useParams()
    const peliculaID = peliculas.find(pelicula => pelicula.id === parseInt(id))

    return (
        <Detail pelicula={peliculaID} />
    )
}

export default DetailContainer
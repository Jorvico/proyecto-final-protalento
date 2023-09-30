import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header';

function Home() {
    const [peliculas , setPeliculas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/peliculas')
        .then((response) => {
            console.log(response.data)
            setPeliculas(response.data)
        })
    }, [])

  return (
    <>  
    <Header />
        {
            peliculas.map((pelicula) => {
                return(
                    <h3 key={pelicula._id}>{pelicula.nombre}</h3>
                )
            })
        }
    </>
  )
}

export default Home
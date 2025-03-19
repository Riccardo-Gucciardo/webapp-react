import MovieCard from "../components/MovieCard"
// import Review from "../components/Review"
import axios from "axios"
import { useState,useEffect } from "react"

export default function HomePage(){

    const [movies,setMovies] = useState([])

    const fetchMovies = () => {
        axios.get('http://localhost:3000/movies')
        .then(res => {setMovies(res.data)})
        .catch(err => {console.log(err);
        })
    }

    useEffect( fetchMovies,[] )

    const renderMovies = () => {
        return(
            movies.map( (movie) => {
                return(
                    <div className="col" key={movie.id}>
                        <MovieCard movie={movie}/>
                    </div>
                )
            })
        )
    }

    return(
        <>
        <h1 className="text-primary">Bool books</h1>
        <div className="row row-cols-3">
            {/* <MovieCard/> */}
            {/* <Review/> */}
            {renderMovies()}
        </div>
        </>
    )
}
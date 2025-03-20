import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

export default function FilmPage(){

    const {id} = useParams()

    const [movie,setMovie] =useState({});

    const fetcMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(fetcMovie,[id]);

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review}/>
            })
        
    }

    return(
        <>
        <h1>{movie?.title}</h1>
        <img src={movie?.image} alt={movie?.title} />

        <section>
            <h4>our comments</h4>
            {renderReviews()}
        </section>
        </>
    )
}
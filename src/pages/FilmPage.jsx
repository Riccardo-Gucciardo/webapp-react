import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

export default function FilmPage(){

    const {id} = useParams()

    const [movie,setMovie] = useState({})

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then(res => setMovie(res.data))
        .catch(err => console.log(err));
    }

    const renderReview = () => {
        movie.reviews?.map(review => {
            return(
                <ReviewCard key={review.id} review={review}/>
            )
        })

    }

    useEffect(fetchMovie,[id])
    return(
        <>
        <h1>{movie.title}</h1>
        <section>
            <h4>our comunity reviews</h4>
            {renderReview()}
        </section>
        </>
    )
}
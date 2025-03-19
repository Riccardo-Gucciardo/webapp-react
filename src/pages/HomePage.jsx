import MovieCard from "../components/MovieCard"
// import Review from "../components/Review"

export default function HomePage(){
    return(
        <>
        <h1 className="text-primary">Bool books</h1>
        <div className="row row-cols-3">
            <MovieCard/>
            {/* <Review/> */}
        </div>
        </>
    )
}
import { Link } from "react-router-dom"

export default function MovieCard(){
    return(
        <>
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">titolo film</h5>
                <span>regista</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore labore delectus maiores quisquam, facilis soluta laborum, in, dolore earum dignissimos! Doloremque minima et itaque ratione molestias, rem suscipit vitae?</p>
                <Link to={'movies/2'}>leggi di piu</Link>
            </div>
        </div>
        </>
    )
}
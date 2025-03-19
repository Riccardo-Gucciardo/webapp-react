export default function ReviewCard(review)
{
    const {id, movie_id ,name,vote,text} = review
    
    
    return(
        <>
        <div className="card mb-4">
            <div className="card-body">
                <h5>{name}</h5>
                <p className="card-text">{text}</p>
                <section>
                    <h4>or reviews {vote}</h4>
                </section>
            </div>
        </div> 
        </>
    )
}
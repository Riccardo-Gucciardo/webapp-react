import axios from "axios"
import { useState } from "react"

export default function ReviewForm({movie_id,reloadReviews}){

    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`

    const initialValue = {
        name: "anonimo",
        text: "loremo ipsum",
        vote: 3
    }

    const [formData,setFormData] = useState(initialValue)

    const handleSubmit = (e) => {
        
        e.preventDefault();

        axios
        .post(endpoint,formData,{
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(() => {
            setFormData(initialValue)
            
            reloadReviews()
        })
        .catch((err) => console.log(err))        
    }

    const setFieldValue = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <>
        <div className="card">
            <h5>add reviews</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>test</label>
                        <textarea name="text" className="form-control" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>vote</label>
                        <input type="number" min={1} max={5} name="vote" className="form-control" value={formData.vote} onChange={setFieldValue}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">crea recensione</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
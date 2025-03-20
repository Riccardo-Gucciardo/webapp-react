import axios from "axios"
import { useState } from "react"
import { useNavigate, Link, Navigate } from "react-router-dom"



export default function createMoviePage(){

    const initialData ={
        title: "",
        director: "",
        image: null,
        abstract: ""
    }

    const navigate = useNavigate()

    const [formData,setFormData] = useState(initialData)

    const setFieldValue = (e) => {
        const {name,value} = e.target
        if(name === "image"){
            setFormData({
                ...formData,
                image: e.target.files[0]
            })
            
        }else{
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    const handleSbmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/movies', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then( () => {navigate("/")})
        .catch(err => console.log(err))

    }

    return(
        <>
        <h1>qui andra il form</h1>

        <section id="movie-form">
            <form onSubmit={handleSbmit}>
                <div className="mb-4">
                    <label>Titolo:</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={setFieldValue} required />
                </div>
                <div className="mb-4">
                    <label>director:</label>
                    <input type="text" className="form-control" name="director" value={formData.director} onChange={setFieldValue} required />
                </div>
                <div className="mb-4">
                    <label>image:</label>
                    <input type="file" className="form-control" name="image" onChange={setFieldValue} required />
                </div>
                <div className="mb-4">
                    <label>abstract:</label>
                    <textarea type="text" className="form-control" name="abstract" value={formData.abstract} onChange={setFieldValue} required></textarea>
                </div>
                <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                    <Link className="btn btn-secondary" to="/">back</Link>
                    <button className="btn btn-succes" type="submit">
                        add film
                    </button>
                    

                </div>
            </form>

        </section>
        </>
    )
}
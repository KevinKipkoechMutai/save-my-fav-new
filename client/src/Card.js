import React from "react"
import EditData from "./EditData"

export default function Card({id, image_url, title, category, description, cardData, setCardData, handleUpdateItem}) {
    
    function handleDelete(id) {
        const newCardData = cardData.filter(lst => lst.id !== id)
        setCardData(newCardData)
        fetch(`/my_favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    return (
        <div className="card">
            <img className="card--image" alt='described card' src={image_url}/>
            <div className="card--details">
                <p className="bold">{title}</p>
                <p>Category:</p>
                <p>{category}</p>
            </div>
            <p className="desc">{description}</p>
            <div className="card--btn">
                <EditData 
                    title = {title}
                    category = {category}
                    description = {description}
                    image_url = {image_url}
                    handleUpdateItem = {handleUpdateItem}
                />
                <button className="btn btn-primary red btn-danger" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}
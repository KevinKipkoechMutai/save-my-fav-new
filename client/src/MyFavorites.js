import React from "react"
import Card from "./Card"
import CreateData from "./CreateData"

export default function MyFavorites() {
    const [cardData, setCardData] = React.useState([])

    React.useEffect(() => {
        fetch('/my_favorites')
        .then(res => res.json())
        .then(data => {
            console.log(data)
           return (setCardData(data))
        })
      }, [])

    console.log(cardData)
    const cardInfo = Array.from(cardData).map((item) => {
        return (
            <Card 
                key = {item.id}
                {...item}
                cardData = {cardData}
                setCardData = {setCardData}
            />
        )
    })


    return (
        <div className="my-favs">
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <CreateData 
                cardData = {cardData}
                />
            </div>
            <div className="cards--section">
                    {cardInfo}
            </div>
        </div>
    )
}
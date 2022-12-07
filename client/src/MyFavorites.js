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
    
    function handleAddItem(newItem) {
        setCardData([...cardData, newItem])
    }

    function handleUpdateItem(updatedItem) {
        const updatedItems = cardData.map((item) => {
            if (item.id === updatedItem.id) {
                return updatedItem
            } else {
                return item
            }
        })
        setCardData(updatedItems)
    }

    console.log(cardData)
    const cardInfo = Array.from(cardData).map((item) => {
        return (
            <Card 
                key = {item.id}
                {...item}
                cardData = {cardData}
                setCardData = {setCardData}
                handleUpdateItem = {handleUpdateItem}
            />
        )
    })



    return (
        <div className="my-favs">
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <CreateData 
                    onAddItem= {handleAddItem}
                />
            </div>
            <div className="cards--section">
                    {cardInfo}
            </div>
        </div>
    )
}
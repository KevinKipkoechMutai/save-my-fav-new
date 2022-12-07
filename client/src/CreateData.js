import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreateData({cardData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [image_url, setImageUrl] = React.useState("")


  function handlePost(e) {
    e.preventDefault()
    fetch('/my_favorites', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        category: category,
        description: description,
        image_url: image_url
      }),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <>
      
      <button className="btn btn-primary" onClick={handleShow}>Add New Fav</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Fav</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editform'>
          <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                    Title
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={(e) => setTitle(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" value={cardData.title} name="title" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                    Category
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={(e) => setCategory(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="category" type="text" value={cardData.category} name="category" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                    Description
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={(e) => setDescription(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" type="text" value={cardData.description} name="category" required/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image_url">
                    Image Url
                </label>
                </div>
                <div className="md:w-2/3">
                <input onChange={(e) => setImageUrl(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="image_url" type="text" value={cardData.image_url} name="image_url" required/>
                </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='btn btn-primary' form='editmodal' onClick={handlePost}>Create</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
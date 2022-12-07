import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditData({id, title, category, description, image_url, handleUpdateItem}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUpdate() {
    fetch(`/my_favorites/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        category: category,
        description: description,
        image_url: image_url,
      }),
    }).then(res => res.json())
    .then(updatedItem => handleUpdateItem(updatedItem))
  }

  return (
    <>
      
      <button className="btn btn-primary" onClick={handleShow}>Edit</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Fav Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='editform' onSubmit={handleUpdate}>
          <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
                    Title
                </label>
                </div>
                <div className="md:w-2/3">
                <input  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" value={title} name="title" defaultValue='title' />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="category">
                    Category
                </label>
                </div>
                <div className="md:w-2/3">
                <input  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="category" type="text" value={category} name="category" defaultValue='category'/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                    Description
                </label>
                </div>
                <div className="md:w-2/3">
                <input  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" type="text" value={description} name="category" defaultValue='description'/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image_url">
                    Image Url
                </label>
                </div>
                <div className="md:w-2/3">
                <input  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="image_url" type="text" value={image_url} name="image_url" defaultValue='image_url'/>
                </div>
            </div>
            <button className='btn btn-primary' form='editmodal' onClick={handleUpdate}>Update</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

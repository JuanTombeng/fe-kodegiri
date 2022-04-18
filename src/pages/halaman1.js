import React, { useState } from 'react'
import "../App.css"
import sha256 from 'crypto-js/sha256';

const Halaman1 = () => {
  const [viewData, setViewData] = useState(false)
  const [fetchedPost, setFetchedPost] = useState(null)
  const personalData = [
    {
      id : 1,
      full_name : "user1",
      age : 21,
      nationality : "Indonesian",
      address : "Palembang"
    },
    {
      id : 2,
      full_name : "user2",
      age : 21,
      nationality : "Indonesian",
      address : "Palembang"
    },
    {
      id : 3,
      full_name : "user3",
      age : 21,
      nationality : "Indonesian",
      address : "Palembang"
    }
  ]
  const handleViewData = () => {
    setViewData(!viewData)
  }

  const fetchData = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    setFetchedPost(data)
    console.log(data)
  }
  
  const handleFetchData = () => {
    fetchData()
  }

  const deletePost = (id) => {
    const indexPost = fetchedPost.indexOf(i => i.id == id)
    console.log(id)
  }

  const hashString = () => {
    const nonce = 10
    const message = '18042022juanpriaifabula'
    const result = sha256(nonce, message)
    console.log(`Hashed result = ${result.toString()}`)
  }
  hashString()
  return (
    <>
      <div className="container">
        <div className="viewData">
          { viewData &&  
            personalData.map((item) => {
              return <div className='data-wrapper' key={item.id}>
                <label htmlFor="id">Id :</label>
                <div className="id">{item.id}</div>
                <label htmlFor="name">Name :</label>
                <div className="name">{item.full_name}</div>
                <label htmlFor="age">Age :</label>
                <div className="age">{item.age}</div>
                <label htmlFor="nationality">Nationality :</label>
                <div className="nationality">{item.nationality}</div>
                <label htmlFor="address">Address :</label>
                <div className="address">{item.address}</div>
              </div>
            })
          }
        </div>
        <button className='btn' onClick={handleViewData}>JSON Array Data</button>
        <button className='btn' onClick={handleFetchData}>Console Fetched Data</button>
        <div className="postTable">
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
            {
              fetchedPost != null && fetchedPost.map((item) => {
                return  <tr>
                          <td>{item.userId}</td>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.body}</td>
                          <td><button onClick={() => {
                            const selected = fetchedPost.findIndex(i => i.id == item.id)
                            fetchedPost.splice(selected, 1)
                            setFetchedPost(fetchedPost)
                          }}>Delete</button></td>
                        </tr>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Halaman1
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
  
    <div className='hero'>
      <div className="hero-image"></div>
        <div className="hero-content">
            <h1 className='hero-text'>Random Meals & Recipes</h1>
            <p className='hero-description'>
                Are you ready to answer the never ending question of the day.... What's for Dinner?
                </p>
        </div>
        
    </div>
    




    <div className='posts_container'>
      <h2 className='recipelog'>Recipe Log</h2>
      {
        posts.map(post => (
          <Link to={`/post/${post._id}`} className='post'> 
          
          <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
          <div className='post_text'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          
          </Link>
        ))
      }
    </div>
    </>
  )
}


  


export default Home
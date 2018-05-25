import React from 'react'
// import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='people-list'>
      <h1>Select the culture you most closely identify with:</h1>
      <ul>
        <li key='samoan'>Samoan</li>
        <li key='fijian'>Fijian</li>
        <li key='tongan'>Tongan</li>
      </ul>
    </div>
  )
}

export default Home


<style>
div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.gallery:hover {
    border: 1px solid #777;
}

div.gallery img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}
</style>



<div class="gallery">
  <a target="_blank" href="fjords.jpg">
    <img src="fjords.jpg" alt="Fjords" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="forest.jpg">
    <img src="forest.jpg" alt="Forest" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="lights.jpg">
    <img src="lights.jpg" alt="Northern Lights" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="mountains.jpg">
    <img src="mountains.jpg" alt="Mountains" width="300" height="200">
  </a>
  <div class="desc">Add a description of the image here</div>
</div>
 

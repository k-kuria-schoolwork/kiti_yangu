import React from 'react'

function Home() {
  return (
    <div>
      <div className='homename'>
      <h2>Interior </h2>
      <p>Signatures</p>

      <div>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img id='cimg' src="../Images/interiordeco3.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img id='cimg' src="../Images/interiordeco2.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img id='cimg' src="../Images/interiordeco.jpg" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    </div>

    <div className='home2'>
      <h2>TAILOR-MADE INTERIOR LIKE NO OTHER</h2>
      <p className='collection'>Our Collection</p>
    </div>
      
    </div>
  )
}

export default Home

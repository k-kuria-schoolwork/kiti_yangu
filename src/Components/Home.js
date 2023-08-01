import React from 'react'

function Home() {
  return (
    <div>
      <div className='homename'>
      <h2>Interior </h2>
      <p>Signatures</p>

      <div>
          <div id="carouselExampleAutoplaying2" class="carousel2 slide" data-bs-ride="carousel">
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
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    </div>

    <div className='home2'>
      <div className='home2head'>
      <h2>TAILOR-MADE INTERIOR LIKE NO OTHER</h2>
      <p className='collection'>Our Collection</p>
      </div>
      <div className='homecards'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="../Images/sofa2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../Images/plant1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../Images/deco5.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  </div>
  
</div>
      </div>
    </div>

    <div>
      <div className='home5header'>
        <p className='h5p'>Latest collection</p>
        <h2 className='h5h2'>ESSENTIAL ITEMS</h2>
       </div>

        <div className='home5'>
        <div className='home5wrapper'>
        <div class="card" >
        <img src="../Images/lightshade.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Halima </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">project manager</h6>
            <p class="card-text">My first time in this clinic and the services were exemplary ,i highly recommend anyone in search of a dental clinic.. </p>
            
          </div>
        </div>

        <div class="card" >
        <img src="../Images/utensils.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">kevin Gitonga</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Enterprenuer</h6>
            <p class="card-text">The receptionist was so welcoming,the services were professional and the prices were fair.How can you not love it there. </p>
          </div>
        </div>
        <div class="card" >
        <img src="../Images/sofa10.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Bunny kanosh</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Fashion designer</h6>
            <p class="card-text">Shout out to my bwoy ya diig.The doctor gold platted me some dope shit.Thats wozzap</p>
           
          </div>
        </div>
        <div class="card" >
        <img src="../Images/plant3.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Barbie Doll</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Spicey Wifey</h6>
            <p class="card-text">Heyyy guuurl.I got some shiny dimy on my teeth.PS i also got some braces.ahaaa.You thought i was feeling you. </p>
          </div>
        </div>

    
        </div>

      </div>
      
    </div>
    
    </div>
  )
}

export default Home

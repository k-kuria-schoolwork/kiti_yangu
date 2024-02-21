import React from 'react'

function About() {
  return (
    <div>
      <div className='firstabout'>
        <div className='content1'>
          <h2>ABout us</h2>
          <p>deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
             error sit voluptatem accusantium doloremque laudantium, totam. Excepteur sint occaecat cupidatat
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam. Sed ut perspiciatis unde omnis iste natus error sit 
              .voluptatem accusantium doloremque laudantium, totam.</p>
        </div>
        <img src='../Images/interiordeco.jpg' alt='aboutimg' className='aboutimg'></img>
      </div>

      <div className='team'>
        <div className='teamhead'>
          <h2>Meet The Team</h2>
        </div>
        <div className='teamcard'>
        <div class="card-group">
  <div class="card2">
    <img src="../Images/teamman2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Amos Kamunya</h5>
      <p class="card-text">Photograper in charge of aesthetic photos and images of the furniture.</p>
    </div>
    
  </div>
  <div class="card2">
    <img src="../Images/teamman1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Musaa</h5>
      <p class="card-text">Incharge of  furniture modelling and creation</p>
    </div>
    
  </div>
  <div class="card2">
    <img src="../Images/womanteam1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Mary Chelangat</h5>
      <p class="card-text">She is incharge of marketingand sales of furnitures.</p>
    </div>
  </div>
</div>      
  </div>
      </div>

      <div className='clients'>
        <div className='teamhead'>
          <h2>Our Clients</h2>
        </div>
        <div className='clientimages'>

        <div class="card-group">
          <div class="card3">
            <img src="../Images/refined.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/worldstudio.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/creativet.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/tcafe.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/urbanl.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/systeml.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/kingrefined.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/idea.png" class="card-img-top2" alt="..."/>
          </div>
          <div class="card3">
            <img src="../Images/bigdonut.png" class="card-img-top2" alt="..."/>
          </div>
          
        </div>
        </div>
      </div>

      <div className='about3'>
          <div className='contheader'>
            <p>Get In Touch With Us</p>
            <h2>GOT ANY QUESTIONS?</h2>
            <h5>Nam nec tellus a odio tincidunt auctor 
              a ornare odio. Sed non mauris vitae erat consequat 
              auctor eu in elit.
              </h5>
          
          <div className='findname'>
              <div className='office'>
                <h2>OFFICE</h2>
                <p>2132 Kahawa Wendani</p>
                <p>Ruiru CA 9091</p>
                <p>+254 768 696 986</p>
                <p>Kungukuria5724@gmail.com</p>
              </div>
              <div className='office'>
                <h2>STORE</h2>
                <p>3133 Town Centre</p>
                <p>Nairobi County 2233</p>
                <p>+254 768 696 986</p>
                <p>kitiyangu@gmail.com</p>
              </div>
          </div>
          </div>
          <div className='aboutform'>
            <h2 className='cotitle'>Contact Us</h2>
            <input type="text" placeholder='Your name' className='input'></input>
            <input type="number" placeholder='Your number' className='input'></input>
            <textarea placeholder='Your message'></textarea>
            <button>Submit</button>
          </div>
      </div>
    </div>
  )
}

export default About

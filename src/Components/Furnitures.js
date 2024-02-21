import React from 'react'
import { Link } from 'react-router-dom'
function Furnitures() {
  return (
    <div className='furncontainer'>
      <div className='category'>
      <h5>Categories</h5>
        <ul>
          <li>
            <Link>All</Link>
          </li>
          <li>
            <Link>Chandelier</Link>
          </li>
          <li>
            <Link>Sofas</Link>
          </li>
          <li>
            <Link>Cutlery</Link>
          </li>
          <li>
            <Link>Art Pieces</Link>
          </li>
          <li>
            <Link>Plants</Link>
          </li>
          <li>
            <Link>Chairs</Link>
          </li>
        </ul>
      </div>

      <div className='cardcont'>
        <div className='search'>
          <div className='start'>
            <h5>Get Started</h5>
          </div>
          <div className='searchbar'>
          <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>
        </div>
      <div class="card-group">
  <div class="card4">
    <img src="../Images/womanteam1.jpg" class="card-img-top3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card4">
    <img src="../Images/womanteam1.jpg" class="card-img-top3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>

    </div>
  </div>
  <div class="card4">
    <img src="../Images/womanteam1.jpg" class="card-img-top3" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Furnitures

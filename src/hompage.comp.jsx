import React from "react"

import "./homepage.style.scss"

function Homepage() {
 return (
  <div className="homepage">
   <h1>Welcome to my homepage</h1>
   <div className="directory-menu">
    <div className="menu-item">
     <div className="content">
      <div className="title">Hats</div>
      <span className="subtitle">Shop Now</span>
     </div>
    </div>
    <div className="menu-item">
     <div className="content">
      <div className="title">Jackets</div>
      <span className="subtitle">Shop Now</span>
     </div>
    </div>
    <div className="menu-item">
     <div className="content">
      <div className="title">Shoes</div>
      <span className="subtitle">Shop Now</span>
     </div>
    </div>
    <div className="menu-item">
     <div className="content">
      <div className="title">Womens</div>
      <span className="subtitle">Shop Now</span>
     </div>
    </div>
    <div className="menu-item">
     <div className="content">
      <div className="title">Mems</div>
      <span className="subtitle">Shop Now</span>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Homepage

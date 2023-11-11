import React from "react"

import "./homepage.style.scss"
import Directory from "../comp/directory/directory.comp"

function Homepage() {
 return (
  <div className="homepage">
   <h1>Welcome to my homepage</h1>
   <Directory />
  </div>
 )
}

export default Homepage

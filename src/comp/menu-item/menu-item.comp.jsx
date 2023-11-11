import React from "react"
import {withRouter} from "react-router-dom/cjs/react-router-dom.min"

import "./menu-item.styles.scss"

function MenuItemComp({title, imageUrl, size, history, linkUrl, match}) {
 return (
  <div
   className={`${size} menu-item`}
   onClick={() => history.push(`${match.url} ${linkUrl}`)}
  >
   <div
    className="background-image"
    style={{
     backgroundImage: `url(${imageUrl})`,
    }}
   />
   <div className="content">
    <div className="title">{title.toUpperCase()}</div>
    <span className="subtitle">Shop Now</span>
   </div>
  </div>
 )
}

export default withRouter(MenuItemComp)

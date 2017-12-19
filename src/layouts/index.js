import React from "react"
import Link from 'gatsby-link'

export default ({ children }) => {
  return (
    <div>
      <Link to='/'>首页</Link> &nbsp;
      <Link to='/about'>关于</Link>
      {children()}
    </div>
  )
}

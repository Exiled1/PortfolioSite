import React from "react"
import Header from "../components/header"
import { Link } from "gatsby";

export default function Home() {
  return(
    
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <Link to="/contact.">Contact</Link>
      <Header headerText = "Learning stuff is cool" />
      <p>Hello World!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

import React from "react";
import Link from "./Link";


const Header = () => {


  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">Accordion</Link>
      <Link href="/list" className="item">Encyclopaedia</Link>
      <Link href="/dropdown" className="item">Dropdown</Link>
      <Link href="/translate" className="item">Translate</Link>
      <Link href="/video" className="item">Video</Link>
      <Link href="/yelpcamp" className="item">Yelpcamp</Link>
    </div>
  )
}

export default Header;
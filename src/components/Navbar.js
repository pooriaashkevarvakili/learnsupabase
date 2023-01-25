import React from "react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">daisyUI</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="text-white">home</Link></li>
          <li >
            <Link to="/create" className="text-white">
              create
            </Link>

          </li>
          <li >
            <Link to="/login" className="text-white">
              login
            </Link>

          </li>
          <li><Link to="/:id" className="text-white">update</Link></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
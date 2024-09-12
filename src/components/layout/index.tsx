import Navbar from "../navbar"
import { Outlet } from "react-router-dom"

function Layout() {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="px-10">
        <Outlet/>
      </div>
    </>
  )
}

export default Layout
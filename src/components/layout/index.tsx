import Navbar from "../navbar"
import { Outlet } from "react-router-dom"

function Layout() {
  
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  )
}

export default Layout
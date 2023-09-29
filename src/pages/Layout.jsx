import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
// import imgBack from '../assets/background.jpg'
import '../index.css'


const Layout = () => {
  return (
    <section className="min-h-screen min-w-[371px] flex flex-col flex-nowrap justify-between content-center top-0 m-0 p-5 bg-hero-pattern backdrop-opacity-90 bg-cover bg-top w-full h-full">
      <div className="contents font-common tracking-wider">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </section>
  )
};

export default Layout
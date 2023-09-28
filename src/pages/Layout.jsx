import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
// import imgBack from '../assets/background.jpg'
import '../index.css'


const Layout = () => {
  return (
    <section className="min-w-min flex flex-col flex-nowrap content-center top-0 m-0 p-5 bg-hero-pattern bg-cover bg-top w-full h-full">
      <div className="contents absolute">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </section>
  )
};

export default Layout
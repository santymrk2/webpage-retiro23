import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
// import imgBack from '../assets/background.jpg'
import '../index.css'


const Layout = () => {
  return (
    <section className="flex flex-column flex-wrap justify-center	 bg-hero-pattern bg-cover bg-top h-full">
      <div className="contents font-sans">
        <Navbar className="flex-initial"/>
        <Outlet className="flex-auto"/>
        <Footer className="flex-[0_1_40%]"/>
      </div>
    </section>
  )
};

export default Layout
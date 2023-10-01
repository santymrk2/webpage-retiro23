import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu.jsx'
import logoMenu from '../assets/menu.svg'
import logoExit from '../assets/cross.svg'


const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return(
    <nav className="flex flex-row self-center w-11/12 h-16 m-10 justify-around items-center text-xl font-bold rounded-lg top-5 bg-gray-50">
      <NavLink to='/'>
        <h1 className="text-2xl text m-3">RETIRO23</h1>
      </NavLink>
      <ul className="flex flex-row gap-6 list-none font-medium no-underline">
        <li >
          <NavLink className="lg:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/rules">Normas</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/calendar">Agenda</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/songs">Canciones</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/messages">Devocionales</NavLink>
        </li>
      </ul>
      <div className="block lg:hidden m-2">
        <img className={menu ? 'hidden' : 'block h-10'} onClick={handleClick} src={logoMenu}></img>
        <img className={menu ? 'block h-10' : 'hidden'} onClick={handleClick} src={logoExit}></img>
        {menu && <Menu className="transition duration-300 ease-in-out" makeClick={handleClick}/>}
      </div>
    </nav>
  )
}

export default Navbar
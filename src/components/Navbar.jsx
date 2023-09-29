import { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu.jsx'
import logoMenu from '../assets/menu.svg'
import logoExit from '../assets/equis.svg'


const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    const toogle = menu
    setMenu(!toogle)
  }

  return(
    <nav className="flex flex-row self-center w-11/12 h-16 m-10 justify-around items-center text-xl font-bold rounded-lg top-5 bg-gray-50">
      <Link to='/'>
        <h1 className="text-2xl text">RETIRO23</h1>
      </Link>
      <ul className="flex flex-row gap-6 list-none font-medium no-underline">
        <li >
          <Link className="md:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/">Inicio</Link>
        </li>
        <li >
          <Link className="md:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/rules">Reglas</Link>
        </li>
        <li>
          <Link className="md:block md:hover:bg-slate-300 md:rounded-lg md:p-2 hidden" to="/calendar">Calendario</Link>
        </li>
      </ul>
      <div className="block md:hidden">
        <img className={menu ? 'hidden' : 'h-8'} onClick={handleClick} src={logoMenu}></img>
        <img className={menu ? 'h-5' : 'hidden'} onClick={handleClick} src={logoExit}></img>
        {menu ? <Menu /> : ''}
      </div>
    </nav>
  )
}

export default Navbar
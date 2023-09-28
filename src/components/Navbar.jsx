import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoMenu from '../assets/menu.svg'
import logoExit from '../assets/equis.svg'


const Navbar = () => {
  const [menu, setMenu] = useState(true)

  const handleClick = () => {
    const toogle = menu
    setMenu(!toogle)
  }

  return(
    <nav className="flex flex-row h-16 w-10/12 m-14 justify-around items-center text-xl font-bold rounded-lg sticky top-5 bg-gray-50">
      <Link to='/'>
        <h1 className="text-2xl text">RETIRO23</h1>
      </Link>
      <ul className="flex flex-row gap-6 list-none font-medium no-underline">
        <li >
          <Link className="hover:bg-slate-300 rounded-lg p-2" to="/">Inicio</Link>
        </li>
        <li >
          <Link className="hover:bg-slate-300 rounded-lg p-2" to="/rules">Reglas</Link>
        </li>
        <li>
          <Link className="hover:bg-slate-300 rounded-lg p-2" to="/calendar">Calendario</Link>
        </li>
      </ul>
      <div className="hidden">
        <img className={menu ? 'block' : 'hidden'} onClick={handleClick} src={logoMenu}></img>
        <img className={menu ? 'hidden' : 'block'} onClick={handleClick} src={logoExit}></img>
      </div>
    </nav>
  )
}

export default Navbar
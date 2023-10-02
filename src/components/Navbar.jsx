import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import logoMenu from '../assets/menu.svg'

const links = [
  { href: '/remember', label: 'Recordá' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/songs', label: 'Canciones' },
  { href: '/messages', label: 'Devocionales' },
]

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }
  const handleLogo = () => {
    if (!menu) return
    setMenu(!menu)
  }

  return(
    <nav className="flex flex-row self-center w-11/12 h-16 m-10 justify-around items-center text-xl font-bold rounded-lg top-5 bg-white">
      <NavLink onClick={handleLogo} to='/'>
        <h1 className="text-2xl text m-3">RETIRO23</h1>
      </NavLink>
      <ul className="flex flex-row gap-6 list-none font-medium no-underline">
        <li >
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden select-none transition ease-in-out delay-50" to="/remember">Recordá</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden select-none transition ease-in-out delay-50" to="/agenda">Agenda</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden select-none transition ease-in-out delay-50" to="/songs">Canciones</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden select-none transition ease-in-out delay-50" to="/messages">Devocionales</NavLink>
        </li>
      </ul>
      <Menu >
        <Menu.Button as={React.Fragment}>
          <div className='block lg:hidden m-2'>
            <img className={/*menu ? 'hidden' : */'block h-10 hover:bg-slate-200 hover:rounded-lg'} onClick={handleMenu} src={logoMenu}></img>
          </div>
        </Menu.Button>
        <Transition
        className='bg-white absolute rounded-lg p-5 top-32 right-9 md:right-12 lg:right-16 z-40 flex flex-col gap-6 list-none font-medium no-underlin'
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
          <Menu.Items>
          {links.map((link) => (
                  /* Use the `active` state to conditionally style the active item. */
                  <Menu.Item className='block hover:bg-slate-200 rounded-lg p-2 select-none' key={link.href} as={Fragment}>
                    {() => (
                      <NavLink
                        to={link.href}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </Menu.Item>
                ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  )

}

export default Navbar
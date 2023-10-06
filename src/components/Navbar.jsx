import { Fragment } from 'react'
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
  return(
    <nav className="flex flex-row self-center w-11/12 h-16 m-10 justify-around items-center text-xl font-bold rounded-lg top-5 bg-white z-40 transition ease-in-out delay-50 drop-shadow-xl">
      <NavLink to='/'>
        <h1 className="text-2xl text m-3 transition ease-in-out delay-50">RETIRO23</h1>
      </NavLink>
      <ul className="flex flex-row gap-6 list-none align-center self-center font-medium no-underline">
        <li >
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden self-center select-none transition ease-in-out delay-50" to="/remember">Recordá</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden self-center select-none transition ease-in-out delay-50" to="/agenda">Agenda</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden self-center select-none transition ease-in-out delay-50" to="/songs">Canciones</NavLink>
        </li>
        <li>
          <NavLink className="lg:block md:hover:bg-slate-200 md:rounded-lg md:p-2 hidden self-center select-none transition ease-in-out delay-50" to="/messages">Devocionales</NavLink>
        </li>
      </ul>
      <Menu >
        {({open})=> (
          <>
          <Menu.Button className='lg:hidden m-1'>
              <img className='relative h-10 focus:bg-slate-200 rounded-lg' src={ logoMenu }></img>
          </Menu.Button>
          {open ? (
            <Transition
                  className='bg-white absolute rounded-lg p-5 z-40 top-20 right-1  flex flex-row list-none font-medium backdrop-blur-xl'
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
              <Menu.Items>
              {links.map((link) => (
                      <Menu.Item key={link.href} as={Fragment}>
                        {({active}) => (
                          <NavLink
                            className={`${
                              active ? 'block bg-slate-200 rounded-lg p-2 m-1 select-none' : 'block rounded-lg p-2 m-1 select-none'
                            }`}
                            to={link.href}
                          >
                            {link.label}
                          </NavLink>
                        )}
                      </Menu.Item>
                    ))}
              </Menu.Items>
            </Transition>
          ) : ""}
          </>
        )}
      </Menu>
    </nav>
  )

}

export default Navbar
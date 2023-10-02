import { NavLink } from 'react-router-dom'

const Menu = ( { makeClick } ) => {
  return(
    <>
      <div className='bg-white absolute rounded-lg p-5 top-32 right-14 z-40'>
        <ul className="flex flex-col gap-6 list-none font-medium no-underline">
          <li >
            <NavLink className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/rules">Normas</NavLink>
          </li>
          <li>
            <NavLink className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/calendar">Agenda</NavLink>
          </li>
          <li>
            <NavLink className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/songs">Canciones</NavLink>
          </li>
          <li>
            <NavLink className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/messages">Devocionales</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu

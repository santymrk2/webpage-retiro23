import { Link } from 'react-router-dom'

const Menu = () => {
  return(
    <>
      <div className='bg-white rounded-lg p-5'>
        <ul className="flex flex-col gap-6 list-none font-medium no-underline">
          <li >
            <Link className="block hover:bg-slate-300 rounded-lg p-2" to="/">Inicio</Link>
          </li>
          <li >
            <Link className="block hover:bg-slate-300 rounded-lg p-2" to="/rules">Reglas</Link>
          </li>
          <li>
            <Link className="block hover:bg-slate-300 rounded-lg p-2" to="/calendar">Calendario</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
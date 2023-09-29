import { Link } from 'react-router-dom'

const Menu = ( makeClick ) => {
  return(
    <>
      <div className='bg-white absolute rounded-lg p-5 top-32 right-11 z-40'>
        <ul className="flex flex-col gap-6 list-none font-medium no-underline">
          <li>
            <Link className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/">Inicio</Link>
          </li>
          <li>
            <Link className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/rules">Reglas</Link>
          </li>
          <li>
            <Link className="block hover:bg-slate-300 rounded-lg p-2" onClick={makeClick} to="/calendar">Calendario</Link>
          </li>
          <li>
            <Link className=" hover:bg-slate-300 rounded-lg p-2 hidden" onClick={makeClick} to="https://drive.google.com/drive/folders/1dTHK0tTr26BM4F9REs_Fj7de9xhR-UJK?usp=sharing">Calendario</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
import { Link } from 'react-router-dom'
import logoTel from '../assets/telegram.svg'
import logoIns from '../assets/instagram.svg'

const Footer = () => {
  return(
    <footer className="flex flex-auto flex-row justify-around items-center self-center h-16 w-11/12 md:w-8/12 m- gap-8 text-black rounded-lg bg-gray-50">
      <p className="text-lg md:text-xl">Nuestras redes:</p>
      <div className="">
        <Link to="https://t.me/areopago23">
          <img className="inline-block no-underline m-1 h-8" src={logoTel} />
        </Link>
        <Link to="https://www.instagram.com/jovenes_icep/">
          <img className="inline-block no-underline m-1 h-8" src={logoIns} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
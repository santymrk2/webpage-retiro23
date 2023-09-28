import { Link } from 'react-router-dom'
import logoTel from '../assets/telegram.svg'
import logoIns from '../assets/instagram.svg'

const Footer = () => {
  return(
    <footer className="min-w-min flex flex-auto flex-row justify-around items-center self-center h-16 w-6/12 m-5 gap-8  text-black rounded-lg bg-gray-50">
      <p className="text-xl">Nuestras redes:</p>
      <div className="">
        <Link to="https://t.me/areopago23">
          <img className="inline-block no-underline m-2 h-8" src={logoTel} />
        </Link>
        <Link to="https://www.instagram.com/jovenes_icep/">
          <img className="inline-block no-underline m-2 h-8" src={logoIns} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
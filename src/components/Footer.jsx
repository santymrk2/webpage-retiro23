import { Link } from 'react-router-dom'
import logoTel from '../assets/telegram.svg'
import logoIns from '../assets/instagram.svg'

const Footer = () => {
  return(
    <footer className="flex flex-row justify-around items-center w-8/12 m-5  gap-8 bottom-0 text-black rounded-lg no-underline bg-gray-50">
      <p className="text-xl">Nuestras redes:</p>
      <div className="">
        <Link to="https://t.me/areopago23">
          <img className="inline-block no-underline m-2 h-10" src={logoTel} />
        </Link>
        <Link to="https://www.instagram.com/jovenes_icep/">
          <img className="inline-block no-underline m-2 h-10" src={logoIns} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
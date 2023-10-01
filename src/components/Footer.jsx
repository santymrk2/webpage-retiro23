import { Link } from 'react-router-dom'
import logoTel from '../assets/telegram.svg'
import logoIns from '../assets/instagram.svg'
import logoPontifexBlack from '../assets/Logo_Originals_Black.svg'

const Footer = () => {
  return(
    <footer className="flex mt-auto flex-row justify-evenly md:justify-around items-center self-center h-16 w-11/12 md:w-8/12 gap-8 text-black rounded-lg bg-gray-50">
      <img className="h-6 m-2 fill-black" src={logoPontifexBlack}></img>
      <div className="flex flex-row items-center self-center">
        <p className="text-lg hidden md:block md:m-3 md:text-xl">Nuestras redes:</p>
        <Link to="https://t.me/+tY-e7-C-MH9iODQx">
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
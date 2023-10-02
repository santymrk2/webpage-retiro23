import imgClock from '../assets/clock_white.svg'
import { Link } from 'react-router-dom'
//import Trip from '../components/Trip.jsx'

const Calendar = () => {
  return(
    <main className="grid grid-row justify-items-center lg:grid-cols-2 lg:self-center gap-10 m-5 text-white">
      <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-md sm:text-xl">
        <div className=' flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className=" w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Viernes</h2>
        </div>
        <p>07:00hs - Salida desde ICEP</p>
        <p>12:00hs - Almuerzo en viaje</p>
        <p>13:00hs - Llegada estimada al predio</p>
        <Link> {/*className='hover:text-gray-200'*/}
          <p>14:30hs - Excursión</p>
        </Link>
        <p>18:00hs - Deportes / Libre</p>
        <p>Tiempo para bañarse</p>
        <p>20:00hs - Encuentro</p>
        <p>21:00hs - Cena</p>
      </div>
      <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-md sm:text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Sábado</h2>
        </div>
        <p>08:00hs - Desayuno</p>
        <p>08:30hs - Devocional</p>
        <Link>
          <p>10:00hs - Excursión</p>
        </Link>
        <p>13:00hs - Almuerzo en el dique</p>
        <p>18:00hs - Deportes / Libre</p>
        <p>Tiempo para bañarse</p>
        <p>20:00hs - Encuentro</p>
        <p>21:00hs - Cena</p>
      </div>
      <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-md sm:text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Domingo</h2>
        </div>
        <p>08:00hs - Desayuno</p>
        <p>08:30hs - Devocional</p>
        <Link>
          <p>10:00hs - Excursión</p>
        </Link>
        <p>14:00hs - Almuerzo en el predio</p>
        <p>Deportes / Libre</p>
        <Link>
          <p>17:00hs - Excursión</p>
        </Link>
        <p>Tiempo para bañarse</p>
        <p>21:00hs - Cena</p>
        <p>22:00hs - Encuentro & Fogón</p>
      </div>
      <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-md sm:text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Lunes</h2>
        </div>
        <p>08:00hs - Desayuno</p>
        <p>08:30hs - Devocional conjunto</p>
        <p>10:00hs - Partida</p>
      </div>
    </main>
  )
}
export default Calendar
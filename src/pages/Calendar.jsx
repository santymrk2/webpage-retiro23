import imgClock from '../assets/clock_white.svg'

const Calendar = () => {
  return(
    <main className="grid grid-row justify-items-center lg:grid-cols-2 lg:self-center gap-10 m-5 text-white">
      <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className=' flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className=" w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Viernes</h2>
        </div>
        <p>08:00hs - Salida</p>
        <p>11:30hs - Llegada</p>
        <p>14:30hs - Almuerzo</p>
        <p>17:30hs - Libre</p>
        <p>21:00hs - Reunión</p>
        <p>22:00hs - Cena</p>
      </div>
      <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Sábado</h2>
        </div>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
      </div>
      <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Domingo</h2>
        </div>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
      </div>
      <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className='flex flex-row mb-4 items-center content-center justify-left m-0'>
          <img className="w-12 mr-4" src={imgClock}></img>
          <h2 className=" text-3xl font-bold">Lunes</h2>
        </div>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
        <p>14:30hs - Comida</p>
      </div>
    </main>
  )
}
export default Calendar
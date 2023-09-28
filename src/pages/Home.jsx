import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgMaps from '../assets/maps.svg'

const CURRENT_DATE_BETWEEN = `https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires`

function Home() {
  const [days, setDays] = useState(false)

  useEffect(() => {
    fetch(CURRENT_DATE_BETWEEN)
      .then(response => response.json())
      .then( data => {
        const { datetime } = data
        const date = datetime.slice(0, 10)

        function getNumberOfDays(start, end) {
          const date1 = new Date(start);
          const date2 = new Date(end);

          // One day in milliseconds
          const oneDay = 1000 * 60 * 60 * 24;

          // Calculating the time difference between two dates
          const diffInTime = date2.getTime() - date1.getTime();

          // Calculating the no. of days between two dates
          const diffInDays = Math.round(diffInTime / oneDay);

          return diffInDays;
        }

        setDays(getNumberOfDays(date, "2023/10/14"));
      })
  }, [])

  return(
    <main className='flex flex-col flex-auto justify-center gap-5  text-white'>
      <div className='m-20 p-20 text-center rounded-lg drop-shadow-2xl'>
        <h2 className='m-0 font-bold text-5xl'>FALTAN</h2>
        <h2 className='m-0 font-black leading-none text-6xl'>{days}</h2>
        <h2 className='m-0 font-bold text-5xl'>DÍAS</h2>
      </div>
      <div className='grid justify-items-center gap-5 relative bg-opacity-70 m-10 p-5 bg-black rounded-lg'>
        <h1 className='font-black text-5xl'>Ubicacion: </h1>
        <p className='text-xl'>Av. Don Bosco 2627, B7000</p>
        <p className='text-xl'>Tandil, Provincia de Buenos Aires</p>
        <Link className='bg-white hover:bg-gray-400 m-5 p-2 flex flex-row gap-2 text-center text-2xl  rounded-lg ' to="https://maps.app.goo.gl/dto2kL9TvgbcudtR7">
          <img className="w-6" src={imgMaps}></img>
          <p className='text-black font-bold text-xl '>GoogleMaps</p>
        </Link>
      </div>
    </main>
  )
}
export default Home
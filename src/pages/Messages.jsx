import { useEffect, useState } from 'react'
import imgCup from '../assets/cup_white.svg'
import { getDaysForEvent } from '../services/days'

const Messages = () => {
  const [days, setDays] = useState(null)
  useEffect(() => {getDaysForEvent().then(setDays)}, [])
  return(
    <main className="grid grid-row justify-items-center lg:self-center gap-10 m-5 text-white">
      {days>0 && <h1 className='text-5xl font-bold'>Muy pronto</h1>}
      {days==0 && <h1 className='text-3xl font-bold'>Estas preparado?</h1>}
      {days==-1 &&
        <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
          <div className='flex flex-row items-center content-center justify-left m-0'>
            <img className="w-12 mr-4" src={imgCup}></img>
            <h1 className="text-3xl font-bold">Dia 1</h1>
          </div>
        </div>
      }
      {days==-2 &&
        <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
          <div className='flex flex-row items-center content-center justify-left m-0'>
            <img className="w-12 mr-4" src={imgCup}></img>
            <h1 className="text-3xl font-bold">Dia 2</h1>
          </div>
        </div>
      }
        {days==-3 &&
          <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
          <div className='flex flex-row items-center content-center justify-left m-0'>
            <img className="w-12 mr-4" src={imgCup}></img>
            <h1 className="text-3xl font-bold">Dia 3</h1>
          </div>
        </div>
      }


    </main>
  )
}
export default Messages
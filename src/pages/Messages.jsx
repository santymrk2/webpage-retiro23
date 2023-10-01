import { useEffect, useState } from 'react'
import imgCup from '../assets/cup_white.svg'
import imgCrossHair from '../assets/crosshair_white.svg'
//import { getDaysForEvent } from '../services/days'

const Messages = () => {
  const [days, setDays] = useState(null)
  const [dev, setDev] = useState(Array(3).fill(false))
  const handleClick1 = () => {
    console.log(dev)
    setDev( !dev[0])
    console.log(dev)
  }
  //useEffect(() => {getDaysForEvent().then(setDays)}, [])
  useEffect(() => {setDays(-3)}, [])

  return(
    <main className="grid grid-row justify-items-center self-center lg:self-center gap-10 m-5 text-white">
      <h1 className='self-center text-5xl'>Principios revalorizados</h1>
      {days>0 && <h1 className='text-5xl font-bold'>Muy pronto</h1>}
      {days==0 && <h1 className='text-3xl font-bold'>Estas preparado?</h1>}
      {days<=-1 &&
        <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
          <div className='flex flex-row items-center content-center justify-left m-0' onClick={handleClick1}>
            <img className="w-12 mr-4" src={imgCup}></img>
            <h1 className="text-3xl font-bold pointer-events-none">Dia 1</h1>
          </div>
          {dev[0] &&
            <div className=''>
              <p>{"{ Mat 5.1-12 }"}</p>
              <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>1. Que cualidades son las que Jesús revaloriza?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>2. Nuestro entorno, como ve esas cualidades?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>3. Como afectan estas cualidades a mi vida?</p>
              </div>
            </div>
          }
        </div>
      }

      {days<=-2 &&
        <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className='flex flex-row items-center content-center justify-left m-0' onClick={handleClick1}>
          <img className="w-12 mr-4" src={imgCup}></img>
          <h1 className="text-3xl font-bold pointer-events-none">Dia 2</h1>
        </div>
        {dev[0] &&
          <div className=''>
            <p>{"{ Mat 5.21-22; 27-28; 33-34 }"}</p>
            <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>1. Estas normas que Jesus establecio, sirven para algo?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>2. En este momento, algo de esto me pasa a mi?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2' src={imgCrossHair}></img>
                <p className='text-xl self-center'>3. Que herramientas nos da Jesus para combatir esta forma de pensar</p>
              </div>
          </div>
        }
      </div>
      }

      {days<=-3 &&
        <div className="hover:scale-110 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div className='flex flex-row items-center content-center justify-left m-0' onClick={handleClick1}>
          <img className="w-12 mr-4" src={imgCup}></img>
          <h1 className="text-3xl font-bold pointer-events-none">Dia 3</h1>
        </div>
        {dev[0] &&
          <div className=''>
            <p>{"{ Mat 5.38-48 }"}</p>
          </div>
        }
      </div>
      }
    </main>
  )
}
export default Messages
import { useEffect, useState } from 'react'
import imgCup from '../assets/cup_white.svg'
import imgCrossHair from '../assets/crosshair_white.svg'
import Button from '../components/Button.jsx'
import { getDaysForEvent } from '../services/days'

const Messages = () => {
  const [days, setDays] = useState(null)
  const [dev, setDev] = useState(Array(3).fill(false))
  const handleClick = (index) => {
    if (dev[index]) {
      const newDev = [...dev]
      newDev[index] = !newDev[index]
      setDev(newDev)
    } else {
    const newDev = Array(3).fill(false)
      newDev[index] = !newDev[index]
      setDev(newDev)
    }
  }
  //useEffect(() => {getDaysForEvent().then(setDays)}, [])
  useEffect(() => {setDays(-3)}, [])

  return(
    <main className="grid grid-row justify-items-center lg:self-center gap-2 m-5 text-white">
      {days>0 && <h1 className='text-5xl font-bold'>Muy pronto</h1>}
      {days==0 && <h1 className='text-3xl sm:text-4xl font-bold'>¿Estas preparado?</h1>}
      {days<0 && <div className='drop-shadow-lg'><h1 className='self-center text-3xl text-center sm:text-5xl'>Principios revalorizados</h1></div>}
      {days<=-1 &&
      <Button
        updateBoard={handleClick}
        title="Día 1"
        index={0}
        state={dev}
        imgURL={imgCup}
      >
        {dev[0] &&
          <div className='block w-11/12 self-center'>
            <p className='text-2xl'>{"{ Mat 5.1-12 }"}</p>
            <div className='flex flex-row'>
              <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
              <p className='text-base self-center'>1. ¿Que cualidades son las que Jesús revaloriza?</p>
            </div>
            <div className='flex flex-row'>
              <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
              <p className='text-base self-center'>2. Nuestro entorno, ¿como ve esas cualidades?</p>
            </div>
            <div className='flex flex-row'>
              <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
              <p className='text-base self-center'>3. ¿Como afectan estas cualidades a mi vida?</p>
            </div>
          </div>
        }
      </Button>
      }
      {days<=-2 &&
        <Button
          updateBoard={handleClick}
          title="Día 2"
          index={1}
          state={dev}
          imgURL={imgCup}
        >
          {dev[1] &&
            <div className='block w-11/12 self-center'>
              <p className='text-xl'>{"{ Mat 5.21-22; 27-28; 33-34 }"}</p>
              <div className='flex flex-row'>
                <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
                <p className='text-base self-center'>1. Estas normas que Jesús establecio, ¿sirven para algo?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
                <p className='text-base self-center'>2. En este momento, ¿algo de esto me pasa a mi?</p>
              </div>
              <div className='flex flex-row'>
                <img className='w-6 m-2 self-start' src={imgCrossHair}></img>
                <p className='text-base self-center'>3. ¿Que herramientas nos da Jesús para combatir esta forma de pensar</p>
              </div>
            </div>
          }
        </Button>
      }
      {days<=-3 &&
        <Button
          updateBoard={handleClick}
          title="Día 3"
          index={2}
          state={dev}
          imgURL={imgCup}
        >
          {dev[2] &&
            <div className='block w-11/12 self-center'>
              <p className='text-xl'>{"{ Mat 5.38-48 }"}</p>
            </div>
          }
        </Button>
      }
    </main>
  )
}
export default Messages
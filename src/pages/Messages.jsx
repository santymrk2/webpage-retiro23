import { useEffect, useState } from 'react'
import imgCup from '../assets/cup_white.svg'
import imgCrossHair from '../assets/crosshair_white.svg'
import Button from '../components/Button.jsx'
import { getDaysForEvent } from '../services/days'

const SHEETS_API = 'https://script.google.com/macros/s/AKfycbzp5JTfyxDU4b8W-UR1JlOZK7MrZW1JKYFqsw_ts-cG8ZsVoLv2x4cTLtDuDiAEhLcA/exec'

const Messages = () => {
  const [days, setDays] = useState(null)
  const [dev, setDev] = useState(Array(3).fill(false))
  const [list, setList] = useState(null)
  const [group, setGroup] = useState(Array(8))
  const [groups, setGroups] = useState(null)

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

  const getMessageSplitting = () => {
    return fetch(SHEETS_API)
      .then(response => response.json())
      .then( data => {
        setList(data.data)
        const groupSet = new Set(data.data.map(({Group})=>Group))
        const arrayGroup = Array.from(groupSet)
        setGroup(arrayGroup)
      })

  }

  useEffect(() => {getDaysForEvent().then(setDays)}, [])
  useEffect(() => {
    getMessageSplitting()
  }, [])

  //useEffect(() => {setDays(-3)}, [])

  return(
    <main className="grid grid-row justify-items-center lg:self-center gap-2 m-5 text-white">
      {days>0 && <h1 className='text-5xl font-bold'>Muy pronto</h1>}
      {days==0 && <h1 className='text-3xl sm:text-4xl font-bold'>¿Estas preparado?</h1>}
      {days<0 && <div className='flex flex-col items-center w-full sm:w-10/12 xl:w-11/12 hover:scale-100 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-sm sm:text-xl'>
        {days<0 &&
            <div className='drop-shadow-lg'><h1 className='self-center my-6 text-2xl text-center sm:text-5xl'>Principios revalorizados</h1></div>
        }
        {days<=-1 &&
        <>
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
        </>
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
                  <p className='text-base self-center'>3. ¿Que herramientas nos da Jesús para combatir esta forma de pensar?</p>
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
      </div>}

      {(days<0) &&
        <div className='flex flex-col items-center w-full my-10'>
          <div onClick={() => setGroups(!groups)} className='w-11/12 bg-black bg-opacity-25 backdrop-blur-xl m-6 p-2 gap-2 text-2xl rounded-lg'>
            <p className='text-white font-bold text-4xl text-center m-2 px-3 select-none self-center'>Grupos</p>
          </div>

          {groups && group.map((group, index_group)=>(
            <div key={index_group} className="flex flex-col w-11/12 justify-center content-center self-center items-center text-white text-xl gap-3  m-2 sm:m-2 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10">
              <h1 className="font-bold text-3xl md:text-4xl tracking-widest">{`Grupo ${group+1}:`}</h1>
              <div className='grid sm:grid-cols-3 gap-4 w-full'>
              {list.map((person, index_person)=>{
                {if(person.Group==group) {
                  return(
                  <div key={index_person} className={person.Role=='Modera' ? 'bg-white  p-2 rounded-lg text-center self-center text-black' : 'bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'}>
                    <p>{person.Name}</p>
                    <p>{person.Surname}</p>
                  </div>
                  )
                }}
              })}
              </div>
            </div>
          ))
          }
        </div>
      }
    </main>
  )
}
export default Messages
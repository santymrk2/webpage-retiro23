import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgMaps from '../assets/maps.svg'
import imgDrive from '../assets/drive.svg'
import imgSpotify from '../assets/spotify.svg'
import imgYTMusic from '../assets/youtube-music.svg'
import { getDaysForEvent } from '../services/days'


function Home() {
  const [days, setDays] = useState(null)

  useEffect(() => {getDaysForEvent().then(setDays)}, [])

  return(
    <main className='flex flex-col flex-auto justify-center gap-5  text-white'>
      {days==1 &&
        <div className='m-10 sm:m-20 p-15 text-center rounded-lg drop-shadow-2xl'>
          <h2 className='m-0 font-bold text-5xl my-10 z-0'>FALTA</h2>
          <h2 className='m-0 font-black leading-none text-9xl animate-bounce z-0'>{days}</h2>
          <h2 className='m-0 font-bold text-6xl z-0'>DÍA</h2>
        </div>
      }
      {days>1 &&
        <div className='m-10 sm:m-20 p-15 text-center rounded-lg drop-shadow-2xl'>
          <h2 className='m-0 font-bold text-5xl my-10 z-0'>FALTAN</h2>
          <h2 className='m-0 font-black leading-none text-9xl animate-bounce z-0'>{days}</h2>
          <h2 className='m-0 font-bold text-6xl z-0'>DÍAS</h2>
        </div>
      }
      {days==0 &&
        <div className='m-10 sm:m-20 p-15 text-center rounded-lg drop-shadow-2xl'>
          <h2 className='m-0 font-bold text-3xl md:text-5xl my-10 z-0'>ES</h2>
          <h2 className='m-0 font-black leading-none text-6xl md:text-7xl lg:text-9xl animate-bounce -my-5 z-0'>HOY</h2>
          <h2 className='m-0 font-bold text-3xl md:text-5xl my-10 z-0'>es hoy</h2>
        </div>
      }
      {(days < 0 && days >= -3) &&
      <div className='m-10 sm:m-20 p-15 text-center rounded-lg drop-shadow-2xl'>
        <h2 className='m-0 font-bold text-5xl my-10 z-0'>ESTAMOS EN </h2>
        <h2 className='m-0 font-black leading-none text-6xl sm:text-7xl xl:text-9xl animate-bounce mb-20 z-0'>TANDIL</h2>
      </div>
    }
      {(days < -3) &&
        <div className='m-10 sm:m-20 md:36 p-15 text-center rounded-lg drop-shadow-2xl'>
          <h2 className='m-0 font-bold text-3xl md:text-5xl my-10 z-0'>gracias por</h2>
          <h2 className='m-0 font-black leading-none text-3xl sm:text-5xl  lg:text-6xl xl:text-7xl animate-bounce z-0'>acompañarnos</h2>
        </div>
      }
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='grid justify-items-center gap-5 relative m-10 p-5 bg-black bg-opacity-25 backdrop-blur-xl	rounded-lg'>
          <h1 className='font-black text-3xl md:text-5xl'>Ubicación: </h1>
          <p className='text-base md:text-xl text-center '>Av. Don Bosco 2627, B7000</p>
          <p className='text-base md:text-xl text-center -mt-5'>Tandil, Provincia de Buenos Aires</p>
          <Link className='bg-white hover:bg-slate-300 mb-5 m-2 p-2 flex flex-row gap-2 text-2xl select-none transition ease-in-out delay-50 rounded-lg' to="https://maps.app.goo.gl/dto2kL9TvgbcudtR7">
            <img className="w-6 m-1" src={imgMaps}></img>
            <p className='text-black font-bold text-center text-xl m-1'>GoogleMaps</p>
          </Link>
        </div>

        <div className="grid justify-items-center gap-5 relative m-10 p-8 bg-black bg-opacity-25 backdrop-blur-xl	rounded-lg">
          <h1 className=" text-xl sm:text-2xl lg:text-3xl font-bold self-center text-center">Acompañá el viaje <br/> con música</h1>
          <div className='grid sm:grid-cols-2 gap-5'>
            <Link className='bg-white hover:bg-spoty-green grid grid-rows-2 px-1 justify-evenly gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://open.spotify.com/playlist/00WOvKLAITZLkilqk4RVtp?si=b81eNaT8QfyIhNu5hGhdqQ">
              <img className="w-6 m-2" src={imgSpotify}></img>
              <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>Spotify</p>
            </Link>
            <Link className='bg-white hover:bg-youtube-red grid grid-rows-2 gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://music.youtube.com/playlist?list=PLC313ihg4qMI1lr9-Y9SULYYiVIMwhs0w&si=a_kJSATAhh7TTBQt">
              <img className="w-6 m-2" src={imgYTMusic}></img>
              <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>YT Music</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='grid justify-items-center gap-5 relative m-10 p-5 bg-black bg-opacity-25 backdrop-blur-xl	rounded-lg'>
        <h1 className='font-black text-3xl md:text-5xl'>Recuerdos: </h1>
      <p className='text-base text-center md:text-xl '>Mira las fotos que sacamos</p>
        <Link className='bg-white hover:bg-slate-300 my-3 m-2 p-2 flex flex-row gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg' to="https://drive.google.com/drive/folders/1ZcMP_s-JWxNoqePxgGQLtowTH-uoHEUc?usp=sharing">
          <img className="w-6 m-1" src={imgDrive}></img>
          <p className='text-black font-bold text-xl m-1'>Nuestras fotos</p>
        </Link>
        <p className='text-base text-center md:text-xl my-2'>Entra al link y espera la confirmación para compartir tus fotos</p>
        <Link className='bg-white hover:bg-slate-300 my-3 m-2 p-2 flex flex-row gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg' to="https://drive.google.com/drive/folders/1pyOewab6VpfxbwdyLwSXdFxKwJ4AHdww?usp=sharing">
          <img className="w-6 m-1" src={imgDrive}></img>
          <p className='text-black font-bold text-xl m-1'>Subi tus fotos</p>
        </Link>
      </div>
    </main>
  )
}
export default Home

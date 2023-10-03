import { useState } from "react"
import { Link } from "react-router-dom"
import Button from '../components/Button.jsx'
import imgSpotify from '../assets/spotify.svg'
import imgYTMusic from '../assets/youtube-music.svg'
import imgCrossHair from '../assets/crosshair_white.svg'
import AlEstar from "../songs/AlEstar.jsx"
import Construire from "../songs/Construire.jsx"
import ElCorazon from "../songs/ElCorazon.jsx"
import EnEstoConocemos from "../songs/EnEstoConocemos.jsx"
import EnTiEstoyFirme from "../songs/EnTiEstoyFirme.jsx"
import GloriosoDia from "../songs/GloriosoDia.jsx"
import SiFuesesLevantado from "../songs/SiFuesesLevantado.jsx"
import SobreTodo from "../songs/SobreTodo.jsx"
import TumbasAJardines from "../songs/TumbasAJardines.jsx"
import VasijasRotas from "../songs/VasijasRotas.jsx"



const songs = [
  { name:'Al estar ante ti', lyrics: <AlEstar/> },
  { name:'Construiré mi vida', lyrics: <Construire/> },
  { name:'El corazon de la adoración', lyrics: <ElCorazon/> },
  { name:'En esto conocemos el amor', lyrics: <EnEstoConocemos/> },
  { name:'En ti estoy firme', lyrics: <EnTiEstoyFirme/> },
  { name:'Glorioso día', lyrics: <GloriosoDia/> },
  { name:'Si fueses levantado', lyrics: <SiFuesesLevantado/> },
  { name:'Sobre todo', lyrics: <SobreTodo/> },
  { name:'Tumbas a jardines', lyrics: <TumbasAJardines/> },
  { name:'Vasijas rotas', lyrics: <VasijasRotas/> }
]

const Songs = () => {
  const [isSelected, setIsSelected] = useState(Array(9).fill(false))

  const handleClick = (index) => {
    if (isSelected[index]) {
      const newSong = [...isSelected]
      newSong[index] = !newSong[index]
      setIsSelected(newSong)
    } else {
    const newSong = Array(9).fill(false)
      newSong[index] = !newSong[index]
      setIsSelected(newSong)
    }
  }

  return(
    <main className="grid grid-row justify-items-center content-center lg:self-center gap-2 m-5 text-white select-none">
      {songs.map((song, index) => (
            <Button
              updateBoard={handleClick}
              index={index}
              title={song.name}
              imgURL={imgCrossHair}
              key={index}
            >
              {isSelected[index] && song.lyrics}
            </Button>
      ))}

      <div className="w-full sm:w-10/12 hover:scale-105 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-md sm:text-xl select-none">
        <div className=' flex flex-row mb-4 items-center content-center justify-left m-0'>
          <h2 className=" text-3xl font-bold">Escuchalas en nuestra playlist</h2>
        </div>
        <Link className='bg-white hover:bg-spoty-green my-5 m-2 p-2 flex flex-row gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://open.spotify.com/playlist/2Ci6c4GvpAABCQDPsJqzzm?si=21d6e63886a64b1a">
          <img className="w-6 m-1" src={imgSpotify}></img>
          <p className='text-black  font-bold text-xl m-1'>Spotify</p>
        </Link>
        <Link className='bg-white hover:bg-youtube-red my-5 m-2 p-2 flex flex-row gap-2 text-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://music.youtube.com/playlist?list=PLj3Ukd2XminUKbEfNWKGZGRT_mrgm84s7&feature=share">
          <img className="w-6 m-1" src={imgYTMusic}></img>
          <p className='text-black  font-bold text-xl m-1'>YT Music</p>
        </Link>
      </div>

    </main>
  )
}
export default Songs
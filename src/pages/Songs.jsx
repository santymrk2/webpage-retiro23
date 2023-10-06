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
    <main className="grid grid-row justify-center lg:self-center gap-2 m-5 text-white select-none">
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

      <div className="w-full sm:w-9/12 md:w-10/12 hover:scale-105 justify-self-center transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg select-none">
          <h2 className="text-2xl text-center sm:text-3xl font-bold mb-5 my-2">Escuchalas en <br/> nuestra playlist</h2>
        <div className='grid sm:grid-cols-2 sm:content-center gap-5'>
          <Link className='bg-white hover:bg-spoty-green grid grid-rows-2 px-1 w-32 gap-2 text-center justify-self-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://open.spotify.com/playlist/2Ci6c4GvpAABCQDPsJqzzm?si=21d6e63886a64b1a">
            <img className="w-6 m-2" src={imgSpotify}></img>
            <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>Spotify</p>
          </Link>
          <Link className='bg-white hover:bg-youtube-red grid grid-rows-2 gap-2 w-32 text-center justify-self-center text-2xl select-none transition ease-in-out delay-50 rounded-lg ' to="https://music.youtube.com/playlist?list=PLj3Ukd2XminUKbEfNWKGZGRT_mrgm84s7&feature=share">
            <img className="w-6 m-2" src={imgYTMusic}></img>
            <p className='text-black font-bold text-xl text-center self-center m-1 p-2'>YT Music</p>
          </Link>
        </div>
      </div>

    </main>
  )
}
export default Songs
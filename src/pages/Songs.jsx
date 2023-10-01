import { useState } from "react"
import imgCrossHair from '../assets/crosshair_white.svg'

const Songs = () => {
  const [song, setSong] = useState(false)
  //const [song_2, setSong_2] = useState(false)

  return(
    <main className="grid grid-row justify-items-center lg:self-center gap-10 m-5 text-white">
      <div className="hover:scale-100 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div onClick={() => {setSong(!song)}} className='flex flex-row items-center content-center justify-left m-0 transition-opacity	' >
          <img className=" w-12 mr-4" src={imgCrossHair}></img>
          <h2 className="text-3xl font-bold pointer-events-none">En ti estoy firme</h2>
        </div>
        <p className={song ? 'block mt-5' : 'hidden'}>
          VERSE 1:<br />
          Si la tiniebla viene a atropellar y el gozo me quiere robar<br />
          Si el dolor se quiere apoderar firme permanezco, firme permanezco (porque)<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          <br />
          VERSE 2:<br />
          La verguenza no tiene lugar y las mentiras no me atraparan<br />
          Sin miedo mi pasado dejo atras firme permanezco, firme permanezco (porque)<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          <br />
          BRIDGE:<br />
          Es Tu poder que nos da libertad Y puede aun los muertos levantar<br />
          Es tu poder que borra la maldad hay poder en tu nombre, hay poder en tu nombre<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
        </p>
      </div>
      {/*`<div className="hover:scale-100 transition duration-300 ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-xl">
        <div onClick={() => {setSong_2(!song_2)}} className='flex flex-row items-center content-center justify-left m-0 transition-opacity	' >
          <img className=" w-12 mr-4" src={imgCrossHair}></img>
          <h2 className=" text-3xl font-bold">En ti estoy firme</h2>
        </div>
        <p className={song_2 ? 'block mt-5' : 'hidden'}>
          VERSE 1:<br />
          Si la tiniebla viene a atropellar y el gozo me quiere robar<br />
          Si el dolor se quiere apoderar firme permanezco, firme permanezco (porque)<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          <br />
          VERSE 2:<br />
          La verguenza no tiene lugar y las mentiras no me atraparan<br />
          Sin miedo mi pasado dejo atras firme permanezco, firme permanezco (porque)<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          <br />
          BRIDGE:<br />
          Es Tu poder que nos da libertad Y puede aun los muertos levantar<br />
          Es tu poder que borra la maldad hay poder en tu nombre, hay poder en tu nombre<br />
          <br />
          CHORUS:<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
          Tu amor vence el temor, cuando en Ti estoy firme<br />
        </p>
  </div>`*/}
    </main>
  )
}
export default Songs
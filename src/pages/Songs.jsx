import { useState } from "react"
import Button from '../components/Button.jsx'
import imgCrossHair from '../assets/crosshair_white.svg'

const Songs = () => {
  const [song, setSong] = useState(Array(9).fill(false))

  const handleClick = (index) => {
    if (song[index]) {
      const newSong = [...song]
      console.log(newSong)
      newSong[index] = !newSong[index]
      console.log(newSong)
      setSong(newSong)
    } else {
    const newSong = Array(9).fill(false)
      console.log(newSong)
      newSong[index] = !newSong[index]
      console.log(newSong)
      setSong(newSong)
    }
  }

  return(
    <main className="grid grid-row justify-items-center lg:self-center gap-2 m-5 text-white">
      <Button
        updateBoard={handleClick}
        title="En ti estoy firme"
        index={0}
        imgURL={imgCrossHair}
      >
        <p className={song[0] ? 'block mt-5' : 'hidden'}>
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
      </Button>
      <Button
        updateBoard={handleClick}
        title="Tumbas a jardines"
        index={1}
        imgURL={imgCrossHair}
      >
        <p className={song[1] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        El mundo busqué y no pudo llenarme<br/>
        Ningún tesoro que pueda ganar me saciará<br/>
        <br/>
        VERSE 2:<br/>
        Mas llegaste tú me diste vida nueva<br/>
        Y cada deseo se cumplirá aquí en tu amor<br/>
        <br/>
        CHORUS:<br/>
        Oh no hay nada, nada mejor, no hay nada, nada mejor<br/>
        No hay nada, nada mejor que mi Dios<br/>
        <br/>
        VERSE 3:<br/>
        Vengo a ti sin miedo y sin reservas<br/>
        Cada fracaso has visto Señor y aún tu amigo soy<br/>
        <br/>
        VERSE 4:<br/>
        Porque el Dios de los montes es el Dios de los valles<br/>
        No hay lugar que me pueda alejar de tu gracia y amor<br/>
        <br/>
        CHORUS:<br/>
        Oh no hay nada, nada mejor, no hay nada, nada mejor<br/>
        No hay nada, nada mejor que mi Dios<br/>
        (2 veces)<br/>
        <br/>
        BRIDGE 1:<br/>
        Cambias lamento en danza de cenizas traes vida<br/>
        Cambias culpa por gloria sé que solo tú lo harás<br/>
        (2 veces)<br/>
        <br/>
        BRIDGE 2:<br/>
        De las ruinas y tumbas   nacen nuevos jardines<br/>
        Resucitas los huesos sé que solo tú lo harás<br/>
        Sé que solo tú lo harás<br/>
        <br/>
        CHORUS:<br/>
        Oh no hay nada, nada mejor, no hay nada, nada mejor<br/>
        No hay nada, nada mejor que mi Dios<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="El corazón de la adoración"
        index={2}
        state={song}
        imgURL={imgCrossHair}
      >
        <p className={song[2] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Cuando la canción ya no suena más<br/>
        vengo en sencillez<br/>
        anhelando dar algo de valor a tu corazón<br/>
        <br/>
        PRE-CHORUS:<br/>
        Te traigo más que mi voz pues un canto en si<br/>
        no es lo que pides de mí<br/>
        Tú buscas en lo interior no lo superficial<br/>
        Tú miras mi corazón<br/>
        <br/>
        CHORUS:<br/>
        El corazón de la adoración<br/>
        trata sólo de ti, sólo de ti   Jesús<br/>
        Perdóname si te he cambiado<br/>
        Pues se trata de ti, sólo de ti Jesús.<br/>
        <br/>
        INTRO:<br/>
        <br/>
        VERSE 2:<br/>
        Digno, eterno Rey quién podrá expresar<br/>
        lo que eres Tú<br/>
        Y aunque pobre soy todo te lo doy<br/>
        Cada respirar<br/>
        <br/>
        PRE-CHORUS:<br/>
        Te traigo más que mi voz pues un canto en si<br/>
        no es lo que pides de mí<br/>
        Tú buscas en lo interior no lo superficial<br/>
        Tú miras mi corazón<br/>
        <br/>
        CHORUS:<br/>
        El corazón de la adoración<br/>
        trata sólo de ti, sólo de ti   Jesús<br/>
        Perdóname si te he cambiado<br/>
        Pues se trata de ti, sólo de ti Jesús.<br/>
        (3 veces)<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="Glorioso día"
        index={3}
        imgURL={imgCrossHair}
      >
        <p className={song[3] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Mi vergüenza me sepultó<br/>
        Yo buscaba un Salvador<br/>
        Más tu perdón, me liberó<br/>
        <br/>
        VERSE 2:<br/>
        Muerto estaba en mi interior<br/>
        Me escondía de Ti Señor<br/>
        Más tu perdón, me liberó<br/>
        <br/>
        CHORUS:<br/>
        Tu voz me habló Y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        Tu voz me habló Y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        <br/>
        VERSE 3:<br/>
        Ahora libre soy en tu amor<br/>
        Es tu gracia la que me salvó<br/>
        Más tu perdón, a mí me liberó<br/>
        <br/>
        CHORUS:<br/>
        Tu voz me habló Y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        Tu voz me habló Y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        <br/>
        BRIDGE:<br/>
        De mi pecado me rescataste<br/>
        En Tu gloria cadenas se rompen<br/>
        Vivía solo y sin consuelo<br/>
        Ahora soy ciudadano del cielo<br/>
        Tú me sanaste estando herido<br/>
        Jesús por tu amor yo respiro<br/>
        Tengo futuro, ahora veo<br/>
        Porque tú voz me habló Y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        Tu voz me habló y a la muerte venció<br/>
        Glorioso día, tu sangre me rescató<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="En esto conocemos el amor"
        index={4}
        imgURL={imgCrossHair}
      >
        <p className={song[4] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Grande amor, no existe nada bajo el sol<br/>
        Que se compare a ti, Señor ¿Quién te puede comprender?<br/>
        <br/>
        PRE-CHORUS:<br/>
        Amor que bajo desde el cie   lo mi alma Él vino a salvar<br/>
        <br/>
        CHORUS:<br/>
        En esto conocemos el amor que Él dio su vida   por nosotros, por nosotros<br/>
        Sublime gracia que nos alcanzó Él dio su vida   por nosotros, por nosotros<br/>
        <br/>
        VERSE 2:<br/>
        Fiel amor, no deja ir mi corazón<br/>
        Y mis pecados ya olvidó ¿Quién me puede separar?<br/>
        <br/>
        VERSE 3:<br/>
        Fuerte amor, como montes a mi alrededor<br/>
        Rodeándome, seguro estoy ¿Qué me puede conmover?<br/>
        <br/>
        PRE-CHORUS:<br/>
        Mi nombre cargo hasta el made ro y me amo hasta el final<br/>
        <br/>
        CHORUS:<br/>
        En esto conocemos el amor que Él dio su vida por nosotros, por nosotros<br/>
        Sublime gracia que nos alcanzó Él dio su vida por nosotros, por nosotros<br/>
        <br/>
        BRIDGE:<br/>
        De tal manera amó Dios al mundo que envió a su Hijo a morir en una cruz<br/>
        Y a todo aquel que crea en su nombre la vida eterna le dará, no morirá<br/>
        <br/>
        CHORUS:<br/>
        En esto conocemos el amor que Él dio su vida por nosotros, por nosotros<br/>
        Sublime gracia que nos alcanzó Él dio su vida por nosotros, por nosotros<br/>
        (2 veces)<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="Sobre todo"
        index={5}
        imgURL={imgCrossHair}
      >
        <p className={song[5] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Sobre todo poder y rey<br/>
        Sobre toda humanidad y ley<br/>
        Sobre todo lo creado por tu mano<br/>
        Tu inventaste todo mi Señor.<br/>
        <br/>
        VERSE 2:<br/>
        Sobre todo reino y nación<br/>
        Maravillas que el mundo conoció<br/>
        Sobre toda riqueza y esplendor<br/>
        Nada se compara a ti mi Dios<br/>
        <br/>
        CHORUS:<br/>
        En la cruz, moriste por amor<br/>
        No bastó dolor y humillación<br/>
        Como flor, que alguien pisoteó<br/>
        Llegaste tú y fue por mi<br/>
        Por amor.<br/>
        <br/>
        VERSE 1:<br/>
        Sobre todo poder y rey<br/>
        Sobre toda humanidad y ley<br/>
        Sobre todo lo creado por tu mano<br/>
        Tu inventaste todo mi Señor.<br/>
        <br/>
        VERSE 2:<br/>
        Sobre todo reino y nación<br/>
        Maravillas que el mundo conoció<br/>
        Sobre toda riqueza y esplendor<br/>
        Nada se compara a ti mi Dios<br/>
        <br/>
        CHORUS:<br/>
        En la cruz, moriste por amor<br/>
        No bastó dolor y humillación<br/>
        Como flor, que alguien pisoteó<br/>
        Quedaste tú y fue por mi<br/>
        Por amor.<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="Si fueses levantado"
        index={6}
        imgURL={imgCrossHair}
      >
        <p className={song[6] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Subió en silencio a aquella cruz inmolado en una tempestad<br/>
        Bebió la copa del dolor revestido en silencio y paz<br/>
        <br/>
        PRE-CHORUS:<br/>
        Dejar atrás,morir, y estar vivo<br/>
        Mirar como lo ve tu eterno corazón<br/>
        Corazón, tu corazón<br/>
        <br/>
        CHORUS:<br/>
        Y ahora se, me amaba me amaba en el dolor<br/>
        Y ahora se, me salva me salva por amor<br/>
        <br/>
        VERSE 2:<br/>
        Si fueses levantado aquí atraerás a todos hacia ti<br/>
        Si fueses levantado en mi abrirás toda la eternidad<br/>
        <br/>
        PRE-CHORUS:<br/>
        Dejar atrás,morir, y estar vivo<br/>
        Mirar como lo ve tu eterno corazón<br/>
        Corazón, tu corazón<br/>
        <br/>
        CHORUS:<br/>
        Y ahora se, me amaba me amaba en el dolor<br/>
        Y ahora se, me salva me salva por amor<br/>
        <br/>
        BRIDGE:<br/>
        No hay parecer ni hermosura<br/>
        Que se haya visto en Él<br/>
        Fue en el dolor y fue en el<br/>
        quebranto que Él me amó<br/>
        (2 veces)<br/>
        <br/>
        CHORUS:<br/>
        Y ahora se, me amaba me amaba en el dolor<br/>
        Y ahora se, me salva me salva por amor<br/>
        (2 veces)<br/>
        <br/>
        OUTRO:<br/>
        El es mas que luz,es mas que luz<br/>
        El es mi Dios<br/>
        Fue en su quebranto, en su dolor<br/>
        Que el me amo<br/>
        (2 veces)<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="Construiré mi vida"
        index={7}
        imgURL={imgCrossHair}
      >
        <p className={song[7] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Digno de recibir toda adoración<br/>
        Digno de recibir hoy está canción<br/>
        Digno de entregarte mi corazón<br/>
        Vivo por Ti<br/>
        <br/>
        VERSE 2:<br/>
        Cristo Jesús no hay otro nombre igual<br/>
        Cristo, no hay nadie más que pueda salvar<br/>
        Digno de entregarte mi corazón<br/>
        Vivo por Ti, vivo por Ti<br/>
        <br/>
        CHORUS:<br/>
        Santo, como Tú no hay nadie Dios incomparable<br/>
        Abre Tú mis ojos, Cristo<br/>
        Quiero conocerte más y ser lleno de Ti, Dios<br/>
        Y llevar tu amor al mundo<br/>
        <br/>
        VERSE 1:<br/>
        <br/>
        VERSE 2:<br/>
        <br/>
        CHORUS:<br/>
        <br/>
        BRIDGE:<br/>
        Construiré mi vida en Tu amor, ahí estoy seguro<br/>
        Mi confianza está en Ti, Señor y no seré movido<br/>
        (2 veces)<br/>
        <br/>
        CHORUS:<br/>
        Santo, como Tú no hay nadie Dios incomparable<br/>
        Abre Tú mis ojos, Cristo<br/>
        Quiero conocerte más y ser lleno de Ti, Dios<br/>
        Y llevar tu amor al mundo<br/>
        (2 veces)<br/>
        </p>
      </Button>
      <Button
        updateBoard={handleClick}
        title="Vasijas Rotas"
        index={8}
        imgURL={imgCrossHair}
      >
        <p className={song[8] ? 'block mt-5' : 'hidden'}>
        VERSE 1:<br/>
        Mi alma estaba  rota y herida<br/>
        Pero tu gracia la restauró<br/>
        Manos vacías que tu llenaste<br/>
        Soy libre en ti soy libre en ti<br/>
        <br/>
        PRE-CHORUS:<br/>
        Sublime gracia del Señor<br/>
        Que a un pecador salvó uoh oh oh oh<br/>
        Fui ciego más hoy veo yo<br/>
        Perdido y Él me halló<br/>
        <br/>
        CHORUS:<br/>
        Ahora puedo ver ehhhhh ehh  er<br/>
        Oh puedo ver sus ojos de amor<br/>
        Quebrantado fue ehhhhh ehh  eh<br/>
        Para darnos su  salvación<br/>
        <br/>
        VERSE 2:<br/>
        Tu no me juzgas por mis fracasos<br/>
        tú me aceptas tal como soy<br/>
        toma mi vida como vasija<br/>
        para mostrar tu gloria en mi  uohhh<br/>
        <br/>
        PRE-CHORUS:<br/>
        Sublime gracia del Señor<br/>
        Que a un pecador salvó uoh oh oh oh<br/>
        Fui ciego más hoy veo yo<br/>
        Perdido y Él me halló<br/>
        <br/>
        CHORUS:<br/>
        Ahora puedo ver ehhhhh ehh  er<br/>
        Oh puedo ver sus ojos de amor<br/>
        Quebrantado fue ehhhhh ehh  eh<br/>
        Para darnos su  salvación<br/>
        <br/>
        Pre-coro:<br/>
        Sublime gracia del Señor<br/>
        Que a un pecador salvó uoh oh oh oh<br/>
        Fui ciego más hoy veo yo<br/>
        Perdido y Él me halló<br/>
        (2 veces)<br/>
        <br/>
        Coro:<br/>
        Ahora puedo ver ehhhhh ehh  er<br/>
        Oh puedo ver sus ojos de amor<br/>
        Quebrantado fue ehhhhh ehh  eh<br/>
        Para darnos su salvación<br/>
        </p>
      </Button>
    </main>
  )
}
export default Songs
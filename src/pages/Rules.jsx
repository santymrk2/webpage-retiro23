import { Link } from 'react-router-dom'
import Rule from '../components/Rule.jsx'

const Rules = () => {
  return(
    <main className='self-center w-full'>
      <div className="flex flex-col justify-center content-center self-center items-center text-white gap-10 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">A tener en cuenta:</h1>
          <Rule ruleTitle="Respeto por la propiedad y el entorno:" ruleText="Los campistas deben tratar las instalaciones y la propiedad del campamento con cuidado y respeto. No se permite vandalismo ni daño a la propiedad."/>
          <Rule ruleTitle="Cumplimiento de horarios y reglas de convivencia:" ruleText="Los campistas deben respetar los horarios establecidos para actividades, comidas y descanso. Además, se espera que sigan las normas de convivencia, como mantener orden en las habitaciones y áreas comunes."/>
          <Rule ruleTitle="No violencia física ni verbal:" ruleText="Está estrictamente prohibido el uso de violencia física o verbal en el campamento. Cualquier forma de pelea o agresión será sancionada de manera apropiada."/>
          <Rule ruleTitle="Respeto a los demás:" ruleText="Todos los campistas deben tratar a sus compañeros y al personal del campamento con respeto y amabilidad en todo momento. No se tolerarán burlas, insultos ni comportamientos ofensivos."/>
          <Rule ruleTitle="Comunicación abierta:" ruleText="Fomenta la comunicación abierta y honesta entre los campistas. Anima a los niños y jóvenes a expresar sus pensamientos y preocupaciones de manera respetuosa, y asegúrate de que se sientan escuchados."/>
          <Rule ruleTitle="Inclusión y amistad:" ruleText="Se espera que todos los campistas sean inclusivos y amigables con sus compañeros. Nadie debe ser excluido o marginado por ningún motivo, ya sea por su apariencia, origen étnico, religión u otras diferencias."/>
          <Rule ruleTitle="Cumplimiento de las normas de seguridad:" ruleText="Los campistas deben seguir todas las reglas y directrices de seguridad establecidas por el personal del campamento. Esto incluye el uso adecuado de equipo de seguridad y la participación en actividades de manera segura."/>
      </div>
      <div className="flex flex-col justify-center content-center self-center items-center text-white text-xl gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl  p-10">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">No te olvides:</h1>
          <p>Sábanas</p>
          <p>Cubiertos</p>
          <p>Desodorante</p>
          <p>Repelente</p>
          <p>Equipo de mate</p>
          <p>Linterna</p>
          <p>Descarga la plantilla</p>
          <Link className='bg-white hover:bg-gray-400 my-3 m-2 p-2 flex flex-row gap-2 text-center text-2xl  rounded-lg ' to="/">
            <p className='text-black font-bold text-xl m-1'>Checklist</p>
          </Link>
      </div>
    </main>
  )
}
export default Rules
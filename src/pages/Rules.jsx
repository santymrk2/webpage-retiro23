import { Link } from 'react-router-dom'

const Rules = () => {
  return(
    <main className='self-center w-full'>
      <div className="flex flex-col justify-center content-center self-center items-center text-white gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10 text-md sm:text-xl">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">A tener en cuenta:</h1>
          <ul className='list-[upper-roman]'>
            <li className='text-left'>RESPETAR EL HORARIO DE SILENCIO DE 24 A 8 hs, EXIGIDO POR EL LUGAR</li>
            <li className='text-left'>RESPETAR LOS LUGARES QUE SE NOS INDICARAN PARA EL USO</li>
            <li className='text-left'>RESPETO POR LA PROPIEDAD Y EL ENTORNO</li>
            <li className='text-left'>GUARDAR EL ORDEN EN LAS HABITACIONES Y AREAS COMUNES</li>
            <li className='text-left'>NO SE PODRA SALIR DEL PREDIO</li>
            <li className='text-left'>RESPETAR LOS CRONOGRAMAS DEL DIA</li>
            <li className='text-left'>RESPETAR EL DESCANZO EN LA NOCHE</li>
            <li className='text-left'>CONTAR HASTA 100 ANTE MOMENTOS DE ENOJOS</li>
            <li className='text-left'>NO ESTA PERMIDITO EL CONSUMO DE BEBIDAS ALCOHOLICAS</li>
          </ul>
      </div>
      <div className="flex flex-col justify-center content-center self-center items-center text-white text-xl gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl  p-10">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">No te olvides:</h1>
          <p className='text-center'>Almuerzo del día de salida (viernes)</p>
          <p className='text-center'>Toalla de mano y toallón</p>
          <p className='text-center'>Protector solar</p>
          <p className='text-center'>Ropa cómoda</p>
          <p className='text-center'>Repelente</p>
          <p className='text-center'>Sábanas</p>
          <p className='text-center'>Biblia</p>
          <p className='text-center'>Gorras</p>
          <p className='text-center'>DNI</p>
          <p className='text-center'>Abrigo</p>
          <p className='text-center'>Botella</p>
          <p className='text-center'>Taza para el desayuno</p>
          <p className='text-center'>Carnet de obra social (si contas con una)</p>
          <p className='text-center'>Kit de higiene personal (shampoo, crema enjuague, cepillo dental, pasta dental, jabón, etc)</p>
          <p className='text-center'>Mirá la plantilla:</p>
          <Link className='bg-white hover:bg-gray-400 my-3 m-2 p-2 flex flex-row gap-2 text-center text-2xl  rounded-lg' to="https://docs.google.com/document/d/1qjq9bpGQNuLwjSN2mGU1sjJ7rouD1R-u1AKfXxYxRvQ/edit?usp=sharing" download>
            <p className='text-black font-bold text-xl m-1'>Checklist</p>
          </Link>
      </div>
    </main>
  )
}
export default Rules
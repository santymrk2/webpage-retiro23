import { Link } from 'react-router-dom'

const Remember = () => {
  return(
    <main className='self-center w-full'>
      <div className="flex flex-col justify-center content-center self-center items-center text-white gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10 text-md sm:text-xl">
        <h1 className="font-bold text-3xl md:text-4xl tracking-widest">A tener en cuenta:</h1>
        <p className='text-center'>- Esta prohibido utilizar elementos deportivos en espacios cerrados</p>
        <p className='text-center'>- No pegar carteles ni escribir sobre las paredes, utilizar los lugares preparados; (pizarrones, etc.)</p>
        <p className='text-center'>- Se pide mantener limpio y ordenado los espacios designados.</p>
        <p className='text-center'>- No dañar árboles y plantas, en caso de juntar leña, únicamente ramas secas y caídas.</p>
        <p className='text-center'>- Los elementos rotos por el mal uso, deberán ser repuestos por el grupo responsable.</p>
        <p className='text-center'>- En el caso de realizar fuego sólo hacerlo en los lugares permitidos (parrillas y fogones).</p>
        <p className='text-center'>- No está permitido traer elementos de percusión al complejo (bombos, redoblantes, etc.).</p>
        <p className='text-center'>- RESPETAR EL HORARIO DE SILENCIO DE 24 A 8 hs, EXIGIDO POR EL LUGAR Y RESPETAR EL DESCANSO EN LA NOCHE</p>
        <p className='text-center'>- RESPETAR LOS LUGARES QUE SE NOS INDICARAN PARA EL USO</p>
        <p className='text-center'>- RESPETO POR LA PROPIEDAD Y EL ENTORNO</p>
        <p className='text-center'>- GUARDAR EL ORDEN EN LAS HABITACIONES Y AREAS COMUNES</p>
        <p className='text-center'>- NO SE PODRA SALIR DEL PREDIO</p>
        <p className='text-center'>- RESPETAR LOS CRONOGRAMAS DEL día</p>
        <p className='text-center'>- CONTAR HASTA 100 ANTE MOMENTOS DE ENOJOS</p>
        <p className='text-center'>- No está permitido el consumo de bebidas alcoholicas</p>
      </div>

      <div className="flex flex-col justify-center content-center self-center items-center text-white text-xl gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10">
        <h1 className="font-bold text-3xl md:text-4xl tracking-widest">No te olvides:</h1>
        <div className='grid sm:grid-cols-3 gap-4'>
          <p className=' bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Toalla de mano y toallón</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Sábanas</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Botella</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Gorras</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Abrigo</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Ropa cómoda</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Taza para el desayuno</p>
          <p className=' bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Almuerzo del día de salida (viernes)</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>DNI y carnet de obra social (si tenes) </p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center self-center'>Biblia</p>
        </div>
        <h1 className="font-bold text-2xl md:text-3xl tracking-widest">Kit de higiene personal:</h1>
        <div className='grid sm:grid-cols-3 gap-4 w-full'>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Shampoo</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Crema enjuague</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Cepillo dental</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Pasta dental</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Jabón</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Repelente</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Protector solar</p>
          <p className='bg-black bg-opacity-25 p-2 rounded-lg text-center'>Otros</p>
        </div>
        <p className='text-center'>Mirá la plantilla:</p>
        <Link className='bg-white hover:bg-slate-200 my-3 m-2 p-2 flex flex-row gap-2 text-center text-2xl  rounded-lg' to="https://docs.google.com/document/d/1qjq9bpGQNuLwjSN2mGU1sjJ7rouD1R-u1AKfXxYxRvQ/edit?usp=sharing" download>
          <p className='text-black font-bold text-xl m-1 select-none'>Checklist</p>
        </Link>
      </div>
    </main>
  )
}
export default Remember
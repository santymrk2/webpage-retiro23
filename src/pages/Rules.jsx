import { Link } from 'react-router-dom'

const Rules = () => {
  return(
    <main className='self-center w-full'>
      <div className="flex flex-col justify-center content-center self-center items-center text-white gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10 text-md sm:text-xl">
        <h1 className="font-bold text-3xl md:text-4xl tracking-widest">Consignas Generales:</h1>
        <p className='text-center'>- Esta prohibido utilizar elementos deportivos en espacios cerrados</p>
        <p className='text-center'>- No pegar carteles ni escribir sobre las paredes, utilizar los lugares preparados; (pizarrones, etc.)</p>
        <p className='text-center'>- Se pide mantener limpio y ordenado los espacios designados.</p>
        <p className='text-center'>- No dañar árboles y plantas, en caso de juntar leña, únicamente ramas secas y caídas.</p>
        <p className='text-center'>- Los elementos rotos por el mal uso, deberán ser repuestos por el grupo responsable.</p>
        <p className='text-center'>- En el caso de realizar fuego sólo hacerlo en los lugares permitidos (parrillas y fogones).</p>
        <p className='text-center'>- No está permitido traer elementos de percusión al complejo (bombos, redoblantes, etc.).</p>
      </div>
      <div className="flex flex-col justify-center content-center self-center items-center text-white gap-5 m-3 sm:m-10 rounded-lg bg-black bg-opacity-25 backdrop-blur-xl p-10 text-md sm:text-xl">
        <h1 className="font-bold text-3xl md:text-4xl tracking-widest">A tener en cuenta:</h1>
        <p className='text-center'>I. RESPETAR EL HORARIO DE SILENCIO DE 24 A 8 hs, EXIGIDO POR EL LUGAR</p>
        <p className='text-center'>II. RESPETAR LOS LUGARES QUE SE NOS INDICARAN PARA EL USO</p>
        <p className='text-center'>III. RESPETO POR LA PROPIEDAD Y EL ENTORNO</p>
        <p className='text-center'>IV. GUARDAR EL ORDEN EN LAS HABITACIONES Y AREAS COMUNES</p>
        <p className='text-center'>V. NO SE PODRA SALIR DEL PREDIO</p>
        <p className='text-center'>VI. RESPETAR LOS CRONOGRAMAS DEL DIA</p>
        <p className='text-center'>VII. RESPETAR EL DESCANZO EN LA NOCHE</p>
        <p className='text-center'>VIII. CONTAR HASTA 100 ANTE MOMENTOS DE ENOJOS</p>
        <p className='text-center'>IX. NO ESTA PERMIDITO EL CONSUMO DE BEBIDAS ALCOHOLICAS</p>
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
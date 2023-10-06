const Square = ({ children, updateBoard, index, title, imgURL }) => {

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className="w-full justify-center sm:w-10/12 xl:w-11/12 hover:scale-100 transition duration-300 justify-self-center ease-in-out bg-black bg-opacity-25 backdrop-blur-xl p-5 m-5 rounded-lg text-sm sm:text-xl">
      <div onClick={handleClick} className='flex flex-row items-center content-center justify-left m-0 transition-opacity	' >
        <img className=" w-12 mr-4 select-none" src={imgURL}></img>
        <h2 className="text-xl sm:text-2xl font-bold pointer-events-none select-none">{title}</h2>
      </div>
      {children}
    </div>
  )
}
export default Square
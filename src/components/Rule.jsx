const Rule = ({ ruleTitle, ruleText }) => {
  return(
    <div className="block self-center text-left text-base md:text-xl">
      <h2 className="font-bold text-xl md:text-2xl tracking-widest	">{ruleTitle}</h2>
      <p className="text-md">{ruleText}</p>
    </div>
  )
}
export default Rule
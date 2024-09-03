export type tagPostProps = {
  tagPost? : "Technology" | "Security" | "Car"
}
const TagPost = ({tagPost} : tagPostProps) => {

  const colorVariants = {
    "Technology" : "bg-[#f6f7ff] text-[#4B6BFB]",
    "Security" : "bg-[#f6f7ff] text-[#4B6BFB]",
    "Car" : "bg-[#f6f7ff] text-[#4B6BFB]",
  }
  
  return (
    <div  className={`${tagPost ? colorVariants[tagPost] : 'bg-[#f6f7ff] text-black'}`}>{tagPost ? tagPost : 'Undefined'}</div>
  )
}

export default TagPost
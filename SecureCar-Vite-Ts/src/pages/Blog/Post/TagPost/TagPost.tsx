export type tagPostProps = {
  tagPost? : "Technology" | "Security" | "Car"
}
const TagPost = ({tagPost} : tagPostProps) => {

  const colorVariants = {
    "Technology" : "bg-[#f6f7ff] text-[#4B6BFB] rounded",
    "Security" : "bg-[#f6f7ff] text-[#4B6BFB] rounded",
    "Car" : "bg-[#f6f7ff] text-[#4B6BFB] rounded",
  }
  
  return (
    <div  className={`${tagPost ? colorVariants[tagPost] : 'bg-[#f6f7ff] text-black rounded'}`}>{tagPost ? tagPost : 'Undefined'}</div>
  )
}

export default TagPost
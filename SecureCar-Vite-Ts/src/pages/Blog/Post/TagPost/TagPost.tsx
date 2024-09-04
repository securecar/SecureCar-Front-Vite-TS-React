export type tagPostProps = {
  tagPost? : "Technology" | "Security" | "Car"
}
const TagPost = ({tagPost} : tagPostProps) => {

  const colorVariants = {
    "Technology" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
    "Security" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
    "Car" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
  }
  
  return (
    <div  className={`${tagPost ? colorVariants[tagPost] : 'flex self-start bg-[#f6f7ff] text-black rounded w-max px-2 py-1 font-semibold '}`}>{tagPost ? tagPost : 'Undefined'}</div>
  )
}

export default TagPost
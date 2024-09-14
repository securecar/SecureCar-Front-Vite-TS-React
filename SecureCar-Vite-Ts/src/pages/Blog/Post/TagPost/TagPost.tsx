export type tagPostProps = {
  tagPost? : "Tecnologia" | "Segurança" | "Carro" | "Seguro"
}
const TagPost = ({tagPost} : tagPostProps) => {

  const colorVariants = {
    "Tecnologia" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
    "Segurança" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
    "Carro" : "flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold ",
    "Seguro" : "flex self-start bg-[#f6f7ff] text-[#3b41af] rounded w-max px-2 py-1 font-semibold ",
  }
  
  return (
    <div  className={`${tagPost ? colorVariants[tagPost] : 'flex self-start bg-[#f6f7ff] text-black rounded w-max px-2 py-1 font-semibold '}`}>{tagPost ? tagPost : 'Undefined'}</div>
  )
}

export default TagPost